const BigNumber = require("bignumber.js");
const db = require("../../../models/tvl.model");

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

const contractHelper = require('../../../utils/contract');

let tokens = {
  "tether": 0.00,
  "dai": 0.00,
  "true-usd": 0.00,
  "usd-coin": 0.00,
  "daoventures": 0.00
};

const getDecimals = async (contract) => {
  try {
    return await contract.methods.decimals().call();
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

/**
 * Get pool amount from specified vault.
 */
const getPoolAmount = async (contract) => {
  try {
    return await contract.methods.pool().call();
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getBalance = async (contract, address) => {
  try {
    return await contract.methods.balanceOf(address).call();
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getTotalSupply = async (contract) => {
  try {
    return await contract.methods.totalSupply().call();
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getContract = async (vault) => {
  try {
    const { abi, address, network } = vault;
    return await contractHelper.getContract(abi, address, network);
  } catch(err) {
    console.log("getContract", err);
  }
}

/**
 * Get Token price from coingecko
 */
const getTokenPrice = async() => {
  const tokenIds = Object.keys(tokens);

  try {
    data = await CoinGeckoClient.simple.price({
      ids: tokenIds,
      vs_currencies: ["usd"],
    });

    if (data.code == 200 && data.message == 'OK' && data.data) {
      const result = data.data;
      tokenIds.map(t => {
        tokens[t] = result[t]["usd"];
      })
    }
    
  } catch(err)  {
    console.log("Error occur in getTokenPrice(): ", err);
  }

}

const getVipTokenPrice = async (vipTotalSupply, tokenBalOfVipToken, tokenPrice) => {
  return (tokenBalOfVipToken * tokenPrice) / vipTotalSupply;
}

/**
 * Get TVL of specified vault.
 * TVL = poolAmount * tokenPrice
 */
const getTVL = async (vault) => {
  let tvl = 0;
  const { 
    address
  } = vault;

  try {
    if (vault.contractType === 'citadel' || 
        vault.contractType === 'elon' || 
        vault.contractType === 'cuban') {
      const contract = await getContract(vault);
      const usdPool = await contract.methods.getAllPoolInUSD().call();
      tvl = usdPool / 10 ** 6; // All pool in USD (6 decimals follow USDT)
    } else if(vault.contractType === 'daoFaang'){
      const contract = await getContract(vault);
      const poolAmount = await contract.methods.getTotalValueInPool().call();
      const decimals = await contract.methods.decimals().call();
      tvl = poolAmount / 10 ** decimals;
    } else if (vault.contractType === "moneyPrinter") {
      const contract = await getContract(vault);
      const poolAmount = await contract.methods.getValueInPool().call();
      const decimals = await contract.methods.decimals().call();
      tvl = poolAmount / 10 ** decimals;
    } else {
      const contract = await getContract(vault);
      const usdPool = await contract.methods.getAllPoolInUSD().call();
      tvl = usdPool / 10 ** 18; // Check from code, Pool In USD returns in 18 decimals
    }
  } catch (err) {
    console.error(`Error in getTVL(), while getting TVL for ${address}: `);
    console.error(err);
  } finally {
    return tvl;
  }
};

const getVipTokenTVL = async (vipTokenVault, tokenVault) => {
  let tvl = 0;

  try {
    const { decimals } = vipTokenVault;
    const { tokenId } = tokenVault;
    
    const vipTokenContract = await getContract(vipTokenVault);
    const tokenContract = await getContract(tokenVault);
  
    const vipTotalSupply = await getTotalSupply(vipTokenContract);
    const tokenBalOfVipToken = await getBalance(tokenContract, vipTokenContract._address);
  
    const tokenPrice = (tokenId === "daoventures") 
          ? tokens["daoventures"]
          : 0.225 ;
  
    const vipTokenPrice = await getVipTokenPrice(vipTotalSupply, tokenBalOfVipToken, tokenPrice);
    tvl = (vipTotalSupply / 10 ** decimals) * vipTokenPrice;

  } catch (err) {
    console.error(`Error in getVipTokenTVL() , while getting TVL for ${vipTokenVault.address} :`);
    console.error(err);
  } finally {
    return tvl;
  }
};

// Get and Save all TVL of all Vaults
const getAllTVL = async () => {
  let vaults = contractHelper.getContractsFromDomain();
  let tvls = [];

  // For Strategies
  for (vault in vaults.farmer) {
    let _vault = vaults.farmer[vault];
    let tvl = await getTVL(_vault);
    tvls.push(tvl);
    await saveTVL(vault, tvl);
  }

  // Vip Token DVG
  let tvl = await getVipTokenTVL(vaults.vipDVG, vaults.DVG);
  tvls.push(tvl);
  await saveTVL("xDVG", tvl);

  // Vip Token DVD
  const vipDVDTVL = await getVipTokenTVL(vaults.vipDVD, vaults.DVD);
  tvls.push(vipDVDTVL);
  await saveTVL("xDVD", vipDVDTVL);

  return tvls;
}

// Get Total TVL
const getTotalTVL = async (tvls) => {
  let totalTVL;
  try {
    const zero = new BigNumber(0);
    totalTVL = tvls.reduce(
      (a, b) => {
        return new BigNumber(a).plus(new BigNumber(b));
      }, 
      zero, 
      tvls
    );
    totalTVL = totalTVL.toFixed();
  } catch (err) {
    // Catch error
    console.log(err);
  }
  return totalTVL;
};

// Write to Total TVL to DB
const saveTotalTVL = async (totalTVL) => {
  await db
    .add("total_tvl", {
      tvl: totalTVL,
    })
    .catch((err) => console.log("err", err));
};

// Save TVL of specified Vault
const saveTVL = async (name, tvl) => {
  await db
    .add(name + "_tvl", {
      tvl: tvl,
    })
    .catch((err) => console.log("err", err));
};

const findAllTVL = async (vaults) => {
  let finalResult = {};
  for (vault in vaults.farmer) {
    const collection = vault + "_tvl";
    const dbResult = await db.getTVL(collection, { limit: 1 });
    finalResult[vault] = (dbResult && dbResult.length > 0) ? dbResult[0] : null;
  }
  return finalResult;
}

// Save All TVLs to database
module.exports.saveAllTVLhandler = async () => {
  try {
    await getTokenPrice();
    const tvls = await getAllTVL();
    if(!tvls || tvls === undefined) {
      throw(`TVLs is undefined`);
    }

    const totalTvl = await getTotalTVL(tvls);
    console.log(`Total Tvl ${totalTvl}`);
    await saveTotalTVL(totalTvl);
  } catch (err) {
    console.error(`Error in  saveAllTVLhandler(): `, err);
  }
};

/* HANDLERS */

module.exports.tvlHandle = async (req, res) => {
  let result = null;
  let message = "Successful response";

  try {
    if(req.params.farmer === null || req.params.farmer === "")  {
      throw (`Strategy ID is empty`);
    }

    const strategyId = req.params.farmer;
    if(!contractHelper.checkIsValidStrategyId(strategyId)) {
      throw(`Invalid Strategy ID`);
    }

    const collectionName = `${strategyId}_tvl`;
    result = await db.getTVL(collectionName, { limit: 1 });

  } catch (err) {
    message = err;
    console.error(`Error in tvlHandle(): `, err);
  } finally {
    res.status(200).json({
      message: message,
      body: result,
    });
  } 
};

module.exports.getAllTVLHandler = async(req, res) => {
  let vaults = contractHelper.getContractsFromDomain();

  const finalResult = await findAllTVL(vaults);

  res.status(200).json({
    message: `Successful response`,
    body: finalResult,
  });

  return;
}

module.exports.totalHandle = async (req, res) => {
  // Get and save all TVL
  const totalTvl = await db.getTotalTVL({ limit: 1 });

  delete totalTvl[0]._id;

  res.status(200).json({
    message: "Total TVL",
    body: totalTvl,
  });
  return;
}

module.exports.findAllTVL = findAllTVL;

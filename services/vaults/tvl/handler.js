const _ = require("lodash");
const db = require("../../../models/tvl.model");

const Web3 = require("web3");
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();
const archiveNodeUrl = process.env.ARCHIVENODE_ENDPOINT;
const web3Url = process.env.WEB3_ENDPOINT;
const infuraMainnetUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const infuraKovanUrl = `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`;
const infuraRinkebyUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`;
const infuraRopstenUrl = `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`;
const archiveNodeWeb3 = new Web3(archiveNodeUrl);

const infuraWeb3 = new Web3(web3Url);
const infuraKovanWeb3 = new Web3(infuraKovanUrl);
const infuraRinkebyWeb3 = new Web3(infuraRinkebyUrl);
const infuraRopstenWeb3 = new Web3(infuraRopstenUrl);

const {
  testContracts,
  mainContracts,
} = require("../../../config/serverless/domain");
const e = require("cors");

const getDecimals = async (contract) => {
  try {
    let decimals = await contract.methods.decimals().call();
    return decimals;
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
    let poolAmount = await contract.methods.pool().call();
    return poolAmount;
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getBalance = async (contract, address) => {
  try {
    let balanceOf = await contract.methods.balanceOf(address).call();
    return balanceOf;
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getTotalSupply = async (contract) => {
  try {
    let totalSupply = await contract.methods.totalSupply().call();
    return totalSupply;
  } catch (err) {
    // Catch error
    console.log(err);
  }
};

const getContract = async (vault) => {
  const { strategyABI, strategyAddress } = vault;
  const contract = new archiveNodeWeb3.eth.Contract(
    strategyABI,
    strategyAddress
  );
  return contract;
};

const getTokenContract = async (vault) => {
  const { abi, address } = vault;
  const contract = new archiveNodeWeb3.eth.Contract(abi, address);
  return contract;
};

/**
 * Get Token price from coingecko
 */
const getTokenPrice = async (coingecko_token_id) => {
  // console.log(coingecko_token_id);
  let data;
  try {
    data = await CoinGeckoClient.simple.price({
      ids: coingecko_token_id,
      vs_currencies: ["usd"],
    });
    if (Object.keys(data.data).length != 0) {
      return data.data[coingecko_token_id]["usd"];
    } else {
      return 1;
    }
  } catch (err) {
    // Catch error, Default Value = 1
    console.log(err);
  }
};

const getxDVGPrice = async () => {
  // TODO: Apply xDVG Price formula
  // xDVG price = DVG amount of xDVG SC * DVG price / xDVG amount
  const contracts =
    process.env.PRODUCTION != null && process.env.PRODUCTION != ""
      ? mainContracts
      : testContracts;

  const DVGcontract = await getTokenContract(contracts.DVG.DVG);
  const xDVGcontract = await getTokenContract(contracts.vipDVG.xDVG);
  const amountDVG = await getBalance(
    DVGcontract,
    contracts.vipDVG.xDVG.address
  );
  const amountxDVG = await getTotalSupply(xDVGcontract);
  const priceDVG = await getTokenPrice(contracts.DVG.DVG.tokenId);

  const pricexDVG = amountxDVG == 0 ? 1 : (amountDVG * priceDVG) / amountxDVG;
  return pricexDVG;
};

/**
 * Get TVL of specified vault.
 * TVL = poolAmount * tokenPrice
 */
const getTVL = async (vault) => {
  const { tokenId } = vault;
  let tvl;
  const contract = await getContract(vault);
  const poolAmount = await getPoolAmount(contract);
  const decimals = await getDecimals(contract);
  const tokenPrice = await getTokenPrice(tokenId);

  tvl = (poolAmount / 10 ** decimals) * tokenPrice;
  return tvl;
};

/**
 * Get TVL of xDVG.
 * TVL = totalSupply * xDVG Price
 */
const getTVLxDVG = async (vault) => {
  const { tokenId } = vault;
  let tvl;
  const contract = await getTokenContract(vault);
  const totalSupply = await getTotalSupply(contract);
  const decimals = await getDecimals(contract);
  const tokenPrice = await getxDVGPrice(tokenId); // Not implemented yet

  tvl = (totalSupply / 10 ** decimals) * tokenPrice;
  return tvl;
};

// Get and Save all TVL of all Vaults
const getAllTVL = async () => {
  let vaults =
    process.env.PRODUCTION != null && process.env.PRODUCTION != ""
      ? mainContracts
      : testContracts;

  let tvls = Array();
  for (vault in vaults.farmer) {
    let _vault = vaults.farmer[vault];
    let tvl = await getTVL(_vault);
    tvls.push(tvl);
    await saveTVL(vault, tvl);
  }

  let _vault = vaults.vipDVG.xDVG;
  let tvl = await getTVLxDVG(_vault);
  tvls.push(tvl);
  await saveTVL("xDVG", tvl);

  return tvls;
};

// Get Total TVL
const getTotalTVL = async (tvls) => {
  let totalTVL;
  try {
    totalTVL = _.sum(tvls);
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

const getVaults = () => {
  return process.env.PRODUCTION != null && process.env.PRODUCTION != ""
    ? mainContracts
    : testContracts;
};

// Save All TVLs to database
module.exports.saveAllTVLhandler = async () => {
  const tvls = await getAllTVL();
  const totalTvl = await getTotalTVL(tvls);
  await saveTotalTVL(totalTvl);
};

// Read from DB
module.exports.getTotalTVLhandle = async () => {
  // Get and save all TVL
  const totalTvl = await db.getTotalTVL({ limit: 1 });

  res.status(200).json({
    message: "Total TVL",
    body: totalTvl,
  });
};

/* HANDLERS */

module.exports.getTVLhandle = async (req, res) => {
  // check if vault param is input
  if (req.params.farmer === null || req.params.farmer === "") {
    res.status(200).json({
      message: "Farmer is empty.",
      body: null,
    });
  }

  const result = await db.getTVL(req.params.farmer + "_tvl", { limit: 1 });
  if (result) {
    res.status(200).json({
      message: `TVL for ${req.params.farmer}`,
      body: result,
    });
  }
};

module.exports.getHistoricalTVLhandle = async (req, res) => {
  if (req.params.days == null || req.params.days == "") {
    res.status(200).json({
      message: "Days is empty.",
      body: null,
    });
  } else if (req.params.farmer == null || req.params.farmer == "") {
    res.status(200).json({
      message: "Farmer is empty.",
      body: null,
    });
  } else {
    let collection = "";

    switch (req.params.farmer) {
      case db.usdtFarmer:
        collection = db.usdtFarmer;
        break;
      case db.usdcFarmer:
        collection = db.usdcFarmer;
        break;
      case db.daiFarmer:
        collection = db.daiFarmer;
        break;
      case db.tusdFarmer:
        collection = db.tusdFarmer;
        break;
      case db.cUsdtFarmer:
        collection = db.cUsdtFarmer;
        break;
      case db.cUsdcFarmer:
        collection = db.cUsdcFarmer;
        break;
      case db.cDaiFarmer:
        collection = db.cDaiFarmer;
        break;
      default:
        res.status(200).json({
          message: "Invalid Farmer",
          body: null,
        });
        return;
    }
  }
};

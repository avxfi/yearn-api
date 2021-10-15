require("dotenv").config();
const BigNumber = require("bignumber.js");
// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
const db = require('../../../../models/apy.model');
const delay = require("delay");
const vaults = require("./vaults");
const _ = require("lodash");
const { delayTime } = require("./config");

const contractHelper = require("../../../../utils/contract");
const dateTimeHelper = require("../../../../utils/dateTime");

let currentBlockNbr;
let oneDayAgoBlock;

const saveVaultWithApy = async (data) => {
  await db.add(data).catch((err) => console.log('err', err));
  console.log(`Saved ${data.name}`);
};

const getPriceFromChainLink = async (block) => {
  let price = 0;

  try {
    const contracts = contractHelper.getContractsFromDomain();
    const contract = await contractHelper.getEthereumContract(contracts.chainLink.USDT_ETH.abi, contracts.chainLink.USDT_ETH.address);
    price = await contract.methods.latestAnswer().call(undefined, block);
  } catch (ex) { }
  await delay(delayTime);
  return price;
};

const getCitadelPricePerFullShare = async (contract, block, inceptionBlockNbr) => {
  const contractDidntExist = block < inceptionBlockNbr;
  const inceptionBlock = block === inceptionBlockNbr;

  if (inceptionBlock) {
    return 1e18;
  }
  if (contractDidntExist) {
    return 0;
  }

  let pricePerFullShare = 0;
  try {
    const price = await getPriceFromChainLink(block);
    const pool = await contract.methods.getAllPoolInETH(price).call(undefined, block);
    const totalSupply = await contract.methods.totalSupply().call(undefined, block);
    pricePerFullShare = pool / totalSupply;
  } catch (ex) { }

  await delay(delayTime);
  return pricePerFullShare;
}

const getElonPricePerFullShare = async (contract, block, inceptionBlockNbr) => {
  const contractDidntExist = block < inceptionBlockNbr;
  const inceptionBlock = block === inceptionBlockNbr;

  if (inceptionBlock) {
    return 1e18;
  }
  if (contractDidntExist) {
    return 0;
  }

  let pricePerFullShare = 0;
  try {
    const pool = await contract.methods.getAllPoolInUSD().call(undefined, block); // All pool in USD (6 decimals)
    const totalSupply = await contract.methods.totalSupply().call(undefined, block);
    pricePerFullShare = (new BigNumber(pool)).shiftedBy(12).dividedBy(totalSupply).toNumber();
  } catch (ex) { }

  await delay(delayTime);
  return pricePerFullShare;
}

const getCubanPricePerFullShare = async (contract, block, inceptionBlockNbr) => {
  const contractDidntExist = block < inceptionBlockNbr;
  const inceptionBlock = block === inceptionBlockNbr;

  if (inceptionBlock) {
    return 1e18;
  }
  if (contractDidntExist) {
    return 0;
  }

  let pricePerFullShare = 0;
  try {
    const pool = await contract.methods.getAllPoolInUSD().call(undefined, block); // All pool in USD (6 decimals)
    const totalSupply = await contract.methods.totalSupply().call(undefined, block);
    pricePerFullShare = (new BigNumber(pool)).shiftedBy(12).dividedBy(totalSupply).toNumber();
  } catch (ex) { }

  await delay(delayTime);
  return pricePerFullShare;
}

const getFaangPricePerFullShare = async (contract, block, inceptionBlockNbr) => {
  const contractDidntExist = block < inceptionBlockNbr;
  const inceptionBlock = block === inceptionBlockNbr;

  if (inceptionBlock) {
    return 1e18;
  }
  if (contractDidntExist) {
    return 0;
  }

  let pricePerFullShare = 0;
  try {
    const pool = await contract.methods.getTotalValueInPool().call(undefined, block);
    const totalSupply = await contract.methods.totalSupply().call(undefined, block);
    pricePerFullShare = pool / totalSupply;
  } catch (ex) { }

  await delay(delayTime);
  return pricePerFullShare;
}

// For new strategies from metaverse onwards
const getPricePerFullShare = async(contract, block, inceptionBlockNumber, vaultSymbol) => {
  const contractDidntExist = block < inceptionBlockNumber;
  const inceptionBlock = block === inceptionBlockNumber;

  if (inceptionBlock) {
    return 1e18;
  }
  if (contractDidntExist) {
    return 0;
  }

  let pricePerFullShare = 0;
  try {
    pricePerFullShare = await contract.methods.getPricePerFullShare().call(undefined, block);
    pricePerFullShare = new BigNumber(pricePerFullShare).shiftedBy(-18).toNumber();
  } catch (err) {
    console.error(`[apy/save/handler]Error in getPricePerFullShare() ${vaultSymbol}: `, err);
  } finally {
    return pricePerFullShare;
  }
}

const calculateApy = (triggerDuration, currentPrice, oneDayAgoPrice) => {
  const n = 365 / triggerDuration; // Assume 2 days to trigger invest function
  const apr = (currentPrice - oneDayAgoPrice) * n;
  const apy = (Math.pow((1 + (apr / 100) / n), n) - 1) * 100;
  return (isNaN(apy) || apy === Infinity) ? 0 : apy;
}

const getApyForVault = async (vault, contracts) => {
  const {
    lastMeasurement: inceptionBlockNbr,
    vaultContractABI: abi,
    vaultContractAddress: address,
    triggerDuration,
    vaultSymbol
  } = vault;
  
  if (vault.isCitadel) {
    // Citadel Vault
    const contract = await contractHelper.getEthereumContract(abi, address);

    const pricePerFullShareCurrent = await getCitadelPricePerFullShare(contract, currentBlockNbr, inceptionBlockNbr);
    const pricePerFullShareOneDayAgo = await getCitadelPricePerFullShare(contract, oneDayAgoBlock, inceptionBlockNbr);

    // APY Calculation
    const n = 365 / 2; // Assume 2 days to trigger invest function
    const apr = (pricePerFullShareCurrent - pricePerFullShareOneDayAgo) * n;
    const apy = (Math.pow((1 + (apr / 100) / n), n) - 1) * 100;

    return {
      apyInceptionSample: 0,
      apyOneDaySample: 0,
      apyThreeDaySample: 0,
      apyOneWeekSample: 0,
      apyOneMonthSample: 0,
      apyLoanscan: 0,
      compoundApy: 0,
      citadelApy: isNaN(apy) ? 0 : apy,
      elonApy: 0,
      cubanApy: 0,
      faangApy: 0,
    }
  } else if (vault.isElon) {
    // Elon's APE Vault
    const contract = await contractHelper.getEthereumContract(abi, address);

    const pricePerFullShareCurrent = await getElonPricePerFullShare(contract, currentBlockNbr, inceptionBlockNbr);
    const pricePerFullShareOneDayAgo = await getElonPricePerFullShare(contract, oneDayAgoBlock, inceptionBlockNbr);

    // APY Calculation
    const n = 365 / 2; // Assume 2 days to trigger invest function
    const apr = (0 < pricePerFullShareCurrent && 0 < pricePerFullShareOneDayAgo) ? (pricePerFullShareCurrent - pricePerFullShareOneDayAgo) * n : 0;
    const apy = (Math.pow((1 + (apr / 100) / n), n) - 1) * 100;

    return {
      apyInceptionSample: 0,
      apyOneDaySample: 0,
      apyThreeDaySample: 0,
      apyOneWeekSample: 0,
      apyOneMonthSample: 0,
      apyLoanscan: 0,
      compoundApy: 0,
      citadelApy: 0,
      elonApy: apy,
      cubanApy: 0,
      faangApy: 0,
    }
  } else if (vault.isCuban) {
    // Cuban's Ape Vault
    const contract = await contractHelper.getEthereumContract(abi, address);

    const pricePerFullShareCurrent = await getCubanPricePerFullShare(contract, currentBlockNbr, inceptionBlockNbr);
    const pricePerFullShareOneDayAgo = await getCubanPricePerFullShare(contract, oneDayAgoBlock, inceptionBlockNbr);

    // APY Calculation
    const n = 365 / 2; // Assume 2 days to trigger invest function
    const apr = (0 < pricePerFullShareCurrent && 0 < pricePerFullShareOneDayAgo) ? (pricePerFullShareCurrent - pricePerFullShareOneDayAgo) * n : 0;
    const apy = (Math.pow((1 + (apr / 100) / n), n) - 1) * 100;

    return {
      apyInceptionSample: 0,
      apyOneDaySample: 0,
      apyThreeDaySample: 0,
      apyOneWeekSample: 0,
      apyOneMonthSample: 0,
      apyLoanscan: 0,
      compoundApy: 0,
      citadelApy: 0,
      elonApy: 0,
      cubanApy: apy,
      faangApy: 0,
    }
  } else if (vault.isFaang) {
    // DAO Faang Stonk Vault
    const contract = await contractHelper.getEthereumContract(abi, address);

    let pricePerFullShareCurrent = await getFaangPricePerFullShare(contract, currentBlockNbr, inceptionBlockNbr);
    let pricePerFullShareOneDayAgo = await getFaangPricePerFullShare(contract, oneDayAgoBlock, inceptionBlockNbr);
    pricePerFullShareCurrent = (0 < pricePerFullShareCurrent) ? pricePerFullShareCurrent : 1;
    pricePerFullShareOneDayAgo = (0  < pricePerFullShareOneDayAgo) ? pricePerFullShareOneDayAgo : 1;

    // APY Calculation
    const n = 365 / 2; // Assume 2 days to trigger invest function
    const apr = (pricePerFullShareCurrent - pricePerFullShareOneDayAgo) * n;
    const apy = (Math.pow((1 + (apr / 100) / n), n) - 1) * 100;

    return {
      apyInceptionSample: 0,
      apyOneDaySample: 0,
      apyThreeDaySample: 0,
      apyOneWeekSample: 0,
      apyOneMonthSample: 0,
      apyLoanscan: 0,
      compoundApy: 0,
      citadelApy: 0,
      elonApy: 0,
      cubanApy: 0,
      faangApy: apy,
    }
  } else {
    const contract = await contractHelper.getEthereumContract(abi, address);
    const currentPrice = await getPricePerFullShare(contract, currentBlockNbr, inceptionBlockNbr, vaultSymbol);
    const oneDayPrice = await getPricePerFullShare(contract, oneDayAgoBlock, inceptionBlockNbr, vaultSymbol);
    const apy = await calculateApy(triggerDuration, currentPrice, oneDayPrice);
    return {
      apy: apy
    };
  }
};

const readVault = async (vault, contracts) => {
  const {
    name,
    symbol,
    description,
    vaultSymbol,
    vaultContractABI: abi,
    vaultContractAddress: address,
    erc20address: tokenAddress,
  } = vault;

  console.log(`Reading vault ${vault.name}`);

  if (!abi || !address) {
    console.log(`Vault ABI not found: ${name}`);
    return null;
  }

  // const contract = new infuraWeb3.eth.Contract(abi, address);
  const apy = await getApyForVault(vault, contracts);

  // const loanscanApy = await getLoanscanApyForVault(vault);
  const data = {
    address,
    name,
    symbol,
    description,
    vaultSymbol,
    description,
    tokenAddress,
    timestamp: Date.now(),
    ...apy,
  };

  await saveVaultWithApy(data);
  return data;
};

module.exports.handler = async () => {
  try {
    const oneDayAgo = dateTimeHelper.toMillisecondsTimestamp(
      dateTimeHelper.subtractDay(1, new Date())
    );

    console.log("Fetching Ethereum historical blocks", "Save APY");
    currentBlockNbr = await contractHelper.getEthereumCurrentBlockNumber();
    console.log(`[Ethereum] Current Block Number: ${currentBlockNbr}`);
    oneDayAgoBlock = await contractHelper.getEthereumBlockNumberByTimeline(oneDayAgo);
    console.log(`[Ethereum] 1d ago Block Number: ${oneDayAgoBlock}`);

    nbrBlocksInDay = currentBlockNbr - oneDayAgoBlock;
    console.log("Done fetching historical blocks");

    const vaultsWithApy = [];
    const contracts = contractHelper.getContractsFromDomain();

    for (const vault of vaults) {
      const vaultWithApy = await readVault(vault, contracts);
      if (vaultWithApy !== null) {
        vaultsWithApy.push(vaultWithApy);
      }
      await delay(delayTime);
    }

    console.log(`[saveVaultAPY()] completed. ${new Date().getTime()}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports.getCitadelPricePerFullShare = getCitadelPricePerFullShare;
module.exports.getElonPricePerFullShare = getElonPricePerFullShare;
module.exports.getCubanPricePerFullShare = getCubanPricePerFullShare;
module.exports.getFaangPricePerFullShare = getFaangPricePerFullShare;
module.exports.getPricePerFullShare = getPricePerFullShare;
module.exports.calculateApy = calculateApy;

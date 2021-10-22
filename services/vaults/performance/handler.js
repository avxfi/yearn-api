"use strict";

require("dotenv").config();
const _ = require("lodash");
const historicalDb = require("../../../models/performance.model");
const moment = require("moment");
const ethers = require("ethers");
const EthDater = require("ethereum-block-by-date");
const {
  aggregatedContractAddress,
  testContracts,
  mainContracts,
} = require("../../../config/serverless/domain");

const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

let url = process.env.ARCHIVENODE_ENDPOINT_2;

const constant = require("../../../utils/constant");
const dateTimeHelper = require("../../../utils/dateTime");
const contractHelper = require("../../../utils/contract");

// Using ethers.js0.26
let provider = new ethers.providers.JsonRpcProvider(url);

let dater = new EthDater(
  provider // Web3 object, required.
);

let days;
let contracts;
let vault;
let BTC_AGGREGATOR_ADDR;
let ETH_AGGREGATOR_ADDR;

if (process.env.PRODUCTION != "") {
  contracts = mainContracts;
  BTC_AGGREGATOR_ADDR = "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c";
  ETH_AGGREGATOR_ADDR = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
} else {
  contracts = testContracts;
  BTC_AGGREGATOR_ADDR = "0x6135b13325bfc4b00278b4abc5e20bbce2d6580e";
  ETH_AGGREGATOR_ADDR = "0x9326bfa02add2366b30bacb125260af641031331";
}

// const ETF_STRATEGIES = ["daoCDV", "daoSTO", "daoELO"];
const ETF_STRATEGIES = ["daoCDV", "daoSTO"];

const aggregatorV3InterfaceABI = require("./AggregatorABI.json");

const BTCpriceFeed = new ethers.Contract(
  BTC_AGGREGATOR_ADDR,
  aggregatorV3InterfaceABI,
  provider
); // 8 DEcimals
const ETHpriceFeed = new ethers.Contract(
  ETH_AGGREGATOR_ADDR,
  aggregatorV3InterfaceABI,
  provider
); // 8 DEcimals

async function getTokenPrice(coingecko_token_id, date) {
  let data;
  try {
    data = await CoinGeckoClient.coins.fetchHistory(coingecko_token_id, {
      date: date,
    });
    if (Object.keys(data.data).length != 0) {
      return data.data["market_data"]["current_price"]["usd"];
    } else {
      return 1;
    }
  } catch (err) {
    // Catch error, Default Value = 1
  }
}

function getInceptionBlock(farmer) {
  if (process.env.PRODUCTION != "") {
    const farmers = {
      daoCDV: 12586420,
      daoSTO: 12932754,
      daoELO: 12722655,
      daoCUB: 12799447,
    };
    return farmers[farmer];
  } else {
    const farmers = {
      daoCDV: 25336169,
      daoSTO: 25867824,
      daoELO: 25413059,
      daoCUB: 25536976,
    };
    return farmers[farmer];
  }
}

async function getTotalSupply(etf, vault, block) {
  if (etf === "daoCDV" || etf === "daoSTO") {
    const totalSupply = await vault.totalSupply({ blockTag: block });
    return totalSupply;
  }
}

async function getTotalPool(etf, vault, block) {
  if (etf === "daoCDV") {
    const totalPool = await vault.getAllPoolInUSD({ blockTag: block });
    return totalPool;
  } else if (etf === "daoSTO") {
    const totalPool = await vault.getTotalValueInPool({ blockTag: block });
    return totalPool;
  }
}

// async function getBTCPriceChainlink(block) {
//   const price = (await BTCpriceFeed.latestRoundData({ blockTag: block }))
//     .answer;
//   return price;
// }

async function getBTCPriceCoinGecko(date) {
  date = new Date(date);

  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();

  let _date = dd + "-" + mm + "-" + yyyy;
  const price = await getTokenPrice("bitcoin", _date);

  return price;
}

// async function getETHPrice(block) {
//   const price = (await ETHpriceFeed.latestRoundData({ blockTag: block }))
//     .answer;
//   return price;
// }

async function getETHPriceCoinGecko(date) {
  date = new Date(date);
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  let _date = dd + "-" + mm + "-" + yyyy;

  const price = await getTokenPrice("ethereum", _date);

  return price;
}

function calcLPTokenPriceUSD(etf, totalSupply, totalPool) {
  if (etf === "daoCDV") {
    // totalSupply = await getTotalSupply(vault, date.block);
    // totalPool = await getTotalPool(vault, date.block);
    if (totalSupply != 0) {
      let lpPrice = totalPool
        .mul(ethers.BigNumber.from("1000000000000"))
        .mul(ethers.BigNumber.from("1000000000000000000"))
        .div(totalSupply);
      lpPrice = ethers.utils.formatEther(lpPrice);
      return lpPrice;
    } else {
      return 0;
    }
  } else if (etf === "daoSTO") {
    // totalSupply = await getTotalSupply(vault, date.block);
    // totalPool = await getTotalPool(vault, date.block);

    if (totalSupply != 0) {
      let lpPrice = totalPool
        .mul(ethers.BigNumber.from("1000000000000000000"))
        .div(totalSupply);
      lpPrice = ethers.utils.formatEther(lpPrice);
      return lpPrice;
    } else {
      return 0;
    }
  }
}

function calculatePerformance(initial, current) {
  if (initial == 0) {
    return 0;
  } else {
    let performance = current / initial - 1;
    return performance;
  }
}

async function getSearchRange(firstBlock, lastBlock) {
  let firstTimestamp = await getUnixTime(firstBlock);

  firstTimestamp = firstTimestamp + (86400 - (firstTimestamp % 86400));
  firstTimestamp *= 1000;
  let lastTimestamp = await getUnixTime(lastBlock);
  lastTimestamp = lastTimestamp - (lastTimestamp % 86400);
  lastTimestamp *= 1000;

  let days = await dater.getEvery(
    "days", // Period, required. Valid value: years, quarters, months, weeks, days, hours, minutes
    firstTimestamp, // Start date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    lastTimestamp, // End date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    1, // Duration, optional, integer. By default 1.
    true // Block after, optional. Search for the nearest block before or after the given date. By default true.
  );

  return days;
}

async function getNextUpdateBlock(dateTime) {
  let url = process.env.ARCHIVENODE_ENDPOINT_2;
  // Using ethers.js
  let provider = new ethers.providers.JsonRpcProvider(url);

  let dater = new EthDater(
    provider // Web3 object, required.
  );

  let nearestDateTime = dateTime - (dateTime % 86400000); // round down to midnight

  let block = await dater.getDate(
    nearestDateTime, // Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    true // Block after, optional. Search for the nearest block before or after the given date. By default true.
  );
  return [block];
}

async function getUnixTime(block) {
  return (await provider.getBlock(block)).timestamp;
}

async function syncHistoricalPerformance(dateTime) {
  // let results = [];

  // Get latest entry in database

  for (const etf of ETF_STRATEGIES) {
    let vaultAddress = contracts["farmer"][etf]["address"];
    let vaultABI = contracts["farmer"][etf]["abi"];
    vault = new ethers.Contract(vaultAddress, vaultABI, provider);
    let latestEntry = await historicalDb.findLatest(etf);
    let startBlock;
    let totalSupply;
    let totalPool;
    let btcPrice;
    let ethPrice;
    let lpTokenPriceUSD;
    let lpPerformance;
    let ethPerformance;
    let btcPerformance;
    let data;
    let basePrice = 0;
    let ethBasePrice = 0;
    let btcBasePrice = 0;
    let lpPriceInception = 0;
    let ethPriceInception = 0;
    let btcPriceInception = 0;
    let latestBlock;
    let dates;
    let latestUpdateDate;

    if (latestEntry.length != 0) {
      basePrice = latestEntry[0]["lp_inception_price"];
      btcBasePrice = latestEntry[0]["btc_inception_price"];
      ethBasePrice = latestEntry[0]["eth_inception_price"];
      lpPriceInception = basePrice;
      btcPriceInception = btcBasePrice;
      ethPriceInception = ethBasePrice;

      latestUpdateDate = latestEntry[0]["date"];
      if (dateTime) {
        dates = await getNextUpdateBlock(dateTime); // Round down to nearest 0:00 UTC day
        if (dates[0].date === latestUpdateDate) {
          continue;
        }
      } else {
        continue;
      }
    } else {
      startBlock = getInceptionBlock(etf);
      latestBlock = await provider.getBlockNumber();
      dates = await getSearchRange(startBlock, latestBlock);
    }

    for (const date of dates) {
      console.log("🚀 | syncHistoricalPerformance | basePrice", basePrice);
      console.log(
        "🚀 | syncHistoricalPerformance | btcBasePrice",
        btcBasePrice
      );
      console.log(
        "🚀 | syncHistoricalPerformance | ethBasePrice",
        ethBasePrice
      );
      try {
        totalSupply = await getTotalSupply(etf, vault, date.block);
        totalPool = await getTotalPool(etf, vault, date.block);
        btcPrice = await getBTCPriceCoinGecko(date.date);
        ethPrice = await getETHPriceCoinGecko(date.date);
        lpTokenPriceUSD = calcLPTokenPriceUSD(etf, totalSupply, totalPool);

        if (lpTokenPriceUSD > 0) {
          if (basePrice === 0) {
            basePrice = lpTokenPriceUSD;
            lpPriceInception = basePrice;
          }
          if (btcPrice > 0 && btcBasePrice === 0) {
            btcBasePrice = btcPrice;
            btcPriceInception = btcBasePrice;
          }
          if (ethPrice > 0 && ethBasePrice === 0) {
            ethBasePrice = ethPrice;
            ethPriceInception = ethBasePrice;
          }
        }
        lpPerformance = calculatePerformance(basePrice, lpTokenPriceUSD);
        btcPerformance = calculatePerformance(btcBasePrice, btcPrice);
        ethPerformance = calculatePerformance(ethBasePrice, ethPrice);

        data = {
          date: date.date,
          time_stamp: date.timestamp,
          block: date.block,
          total_supply: totalSupply.toString(),
          total_pool_usd: totalPool.toString(),
          btc_price: btcPrice.toString(),
          eth_price: ethPrice.toString(),
          lp_token_price_usd: lpTokenPriceUSD.toString(),
          lp_performance: lpPerformance,
          btc_performance: btcPerformance,
          eth_performance: ethPerformance,
          lp_inception_price: lpPriceInception.toString(),
          btc_inception_price: btcPriceInception.toString(),
          eth_inception_price: ethPriceInception.toString(),
        };

        historicalDb.add(etf, data);
      } catch (e) {}
    }
  }
}

const savePerformance = async (dateTime) => {
  await syncHistoricalPerformance(dateTime);
};

// module.exports.handler = async (event) => {
//   const performanceData = await syncHistoricalPerformance();

//   return {
//     statusCode: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": true,
//     },
//     body: JSON.stringify(performanceData),
//   };
// };

// Return just PNL of timeframe
const pnlHandle = async (req, res) => {
  try {
    if (
      req.params.days !== "1y" &&
      req.params.days !== "6m" &&
      req.params.days !== "30d" &&
      req.params.days !== "7d" &&
      req.params.days !== "1d" &&
      req.params.days !== undefined
    ) {
      res.status(200).json({
        message: "Days should be 1y, 6m, 30d, 7d, 1d or empty (all).",
        body: null,
      });
      return;
    }
    // check if vault param is input
    if (req.params.farmer === null || req.params.farmer === "") {
      res.status(200).json({
        message: "Vault input is empty",
        body: null,
      });
      return;
    }

    // Check is ETF Strategies
    const etfStrategies = constant.ETF_STRATEGIES;
    if(!etfStrategies.includes(req.params.farmer)) {
      res.status(200).json({
        message: `Invalid Farmer: ${req.params.farmer}`,
        body: null,
      });
      return;
    }

    const startTime = dateTimeHelper.getStartTimeFromParameter(req.params.days);
    const collection = req.params.farmer;
    const result = await findPerformanceWithTimePeriods(
        collection,
        startTime
    );
  
    if(!result || result.length <= 0) {
      return res.status(200).json({
        message: `Performance Data for ${req.params.farmer}`,
        body: 0,
      });
    }

    const lastDataIndex = result.length - 1;
    if(startTime === -1) {
      // If time period not stated, return latest lp performance data=
      return res.status(200).json({
        message: `Performance Data for ${req.params.farmer}`,
        body: result[lastDataIndex]["lp_performance"] * 100, // Result from database haven't times with 100% yet
      });
    }

    const pnl = await calculateStrategyPNL(result);

    return res.status(200).json({
      message: `Performance Data for ${req.params.farmer}`,
      body: pnl,
    });
  } catch (error) {
    return res.status(200).json({
      message: `Performance Data for ${req.params.farmer}`,
      body: 0,
    });
  }
};

const calculateStrategyPNL = async(datas) => {
  let pnl = 0;

  try {
    if(!datas || datas === undefined || datas.length <= 0) {
      throw(`Missing datas for calculation.`);
    }

    const lastDataIndex = datas.length - 1;
    let basePrice = datas[0]["lp_token_price_usd"];

    if(parseFloat(basePrice) === 0) {
      // Looking for the next non-zero lp price in datas array
      const data = datas.find(r => parseFloat(r["lp_token_price_usd"]) !== 0);
      basePrice = data !== undefined && data["lp_token_price_usd"] 
        ? data["lp_token_price_usd"]
        : 0;
    }
  
    pnl = calculatePerformance(
      basePrice,
      datas[lastDataIndex]["lp_token_price_usd"]
    ) * 100;

  } catch (err) {
    console.error(`[performance/handler] Error in calculatePNL(): ${err}`);
  } finally {
    return pnl;
  }
}

const processPerformanceData = (datas, strategyId, sinceInception = false) => {
  try {
    if(!datas || datas === undefined || datas.length <= 0) {
      throw(`Datas is undefined or empty in processPerformanceData.`);
    }
    if(!strategyId || strategyId === undefined || strategyId === "") {
      throw(`Strategy Type is not defined`);
    }

    const contracts = contractHelper.getContractsFromDomain();
    const pnlSeries = contracts.farmer[strategyId].pnl;
  
    if(sinceInception) {
      datas.forEach(data => {
        pnlSeries.forEach(series => {
          const seriesName = `${series.db}_performance`;
          data[seriesName] = data[seriesName] * 100
        });
      });
    } else {
      const firstData = datas[0];
      const basePrices = {};
      pnlSeries.forEach(series => {
        const propertyName = (series.db === "lp") 
          ? "lp_token_price_usd"
          : `${series.db}_price`;
        basePrices[series.db] = firstData[propertyName]
          ? firstData[propertyName] 
          : 0;
      })

      datas.forEach((data) => {
        // If base price is zero, to set base price as first non-zero lp price
        if( parseFloat(basePrices["lp"]) === 0 && 
            parseFloat(data["lp_token_price_usd"]) !== 0
        ) {
          basePrices["lp"] = data["lp_token_price_usd"];
        }

        pnlSeries.forEach(series => {
          const seriesName = series.db;
          const propertyName = (seriesName === "lp") 
            ? "lp_token_price_usd"
            : `${seriesName}_price`;
          const performanceName = `${seriesName}_performance`;
          
          data[performanceName] = calculatePerformance(
            basePrices[seriesName],
            data[propertyName]
          ) * 100
        });
      });
    }
    return datas;
  } catch (err) {
    console.error(`Error in processPerformanceData(): `, err);
    return datas;
  } 
}


const findPerformanceWithTimePeriods = async(collection, startTime) => {
  const sinceInception = (startTime == -1);
  let start = dateTimeHelper.toMillisecondsTimestamp(startTime);
 
  let result = (sinceInception)
    ? await historicalDb.findAll(collection)
    : await historicalDb.findPerformanceWithTimePeriods(collection, start);

  return result;
}

const performanceHandle = async (req, res) => {
  try {
    if (
      req.params.days !== "1y" &&
      req.params.days !== "6m" && 
      req.params.days !== "30d" &&
      req.params.days !== "7d" &&
      req.params.days !== "1d" &&
      req.params.days !== undefined
    ) {
      res.status(200).json({
        message: "Days should be 1y, 6m, 30d, 7d, 1d or empty (all).",
        body: null,
      });
      return;
    }
    // check if vault param is input
    if (req.params.farmer === null || req.params.farmer === "") {
      res.status(200).json({
        message: "Vault input is empty",
        body: null,
      });
      return;
    }

     // Check is ETF Strategies
    const etfStrategies = constant.ETF_STRATEGIES;
    if(!etfStrategies.includes(req.params.farmer)) {
      res.status(200).json({
         message: `Invalid Farmer: ${etfStrategies}`,
         body: null,
       });
      return;
    }

    const startTime = dateTimeHelper.getStartTimeFromParameter(req.params.days);
    const sinceInception = (startTime == -1);
    const collection = req.params.farmer;
   
    let result = await findPerformanceWithTimePeriods(collection, startTime);
    if(!result || result.length <= 0) {
      return res.status(200).json({
        message: `Performance Data for ${req.params.farmer}`,
        body: null
      })
    }
    
    result = processPerformanceData(result, req.params.farmer, sinceInception);

    res.status(200).json({
      message: `Performance Data for ${req.params.farmer}`,
      body: result,
    });
  } catch (err) {
    console.log(`Error in performanceHandle(): `, err);
    res.status(200).json({
      message: `Performance Data for ${req.params.farmer}`,
      body: null,
      error: err,
    });
  }
};


module.exports = {
  savePerformance,
  pnlHandle,
  performanceHandle,
  getTokenPrice,
  processPerformanceData,
  calculateStrategyPNL,
  findPerformanceWithTimePeriods
}
 
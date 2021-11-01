const contractHelper = require("../../../utils/contract");
const dateTimeHelper = require("../../../utils/dateTime");
const constant = require("../../../utils/constant");
const { processPerformanceData, calculateStrategyPNL, findPerformanceWithTimePeriods } = require("../../vaults/performance/handler");
const { getYearnAPY, getCompoundAPY } = require("../../vaults/apy/handler");

const historicalApyDb = require("../../../models/historical-apy.model");

const getApyAttributeNameByStrategy = (strategyType) => {
    switch(strategyType) {
        case constant.STRATEGY_TYPE.COMPOUND: 
            return [
                { seriesName: "Compound", attributeName: "compoundApy" },
            ];
        case constant.STRATEGY_TYPE.ELON: 
        return [
            { seriesName: "Elon", attributeName: "lp_performance" },
            { seriesName: "BTC", attributeName: "btc_performance" },
            { seriesName: "ETH", attributeName: "eth_performance" },
        ];
        case constant.STRATEGY_TYPE.CUBAN:
            return [
                { seriesName: "Cuban", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.MONEYPRINTER:
            return [
                { seriesName: "Money Printer", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.YEARN:
            return [
                { seriesName: "Earn", attributeName: "aprs" },
                { seriesName: "Vault", attributeName: "apyInceptionSample"}
            ];
        case constant.STRATEGY_TYPE.CITADEL:
            return [
                { seriesName: "Citadel", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.FAANG:
            return [
                { seriesName: "FAANG Stonk", attributeName: "lp_performance" },
                // enable back once FAANG need to display btc and eth chart
                // { seriesName: "BTC", attributeName: "btc_performance" }, 
                // { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.METAVERSE: 
            return [
                { seriesName: "Metaverse", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.CITADELV2: 
            return [
                { seriesName: "Citadel V2", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];        
        case constant.STRATEGY_TYPE.DAOSTONKS: 
            return [
                { seriesName: "DAO Stonks", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAODEGEN: 
            return [
                { seriesName: "DAO BSC Spaceship", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAOSAFU: 
            return [
                { seriesName: "DAO BSC Citadel", attributeName: "lp_performance" },
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.TA:
            return [
                { seriesName: "DAO Golden Cross", attributeName: "lp_performance"},
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAOAXA:
            return [
                { seriesName: "DAO AXA", attributeName: "lp_performance"},
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAOAXS:
            return [
                { seriesName: "DAO AXS", attributeName: "lp_performance"},
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAOASA:
            return [
                { seriesName: "DAO ASA", attributeName: "lp_performance"},
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        case constant.STRATEGY_TYPE.DAOA2S:
            return [
                { seriesName: "DAO A2S", attributeName: "lp_performance"},
                { seriesName: "BTC", attributeName: "btc_performance" },
                { seriesName: "ETH", attributeName: "eth_performance" },
            ];
        default: 
            return [];
    }
}

const processChartData = (apys, strategyType, strategyId) => {
    const result = [];
    const apyAttributes = getApyAttributeNameByStrategy(strategyType);

    // Array item added into the result: [seriesName, [[timestamp, apy], [timestamp, apy]]]
    // First item in array item: series name, example: citadelApy, represent a line in line chart
    // Second item in array item: series data, Array of [timestamp, apy]
    // Third item in array item: series color
    let chartColorIndex = 0; // Used to randomize chart color
    apyAttributes.forEach(attributes => { 
        let chartColor = constant.TOKEN_CHART_COLOR[attributes.seriesName.toUpperCase()];
        if(chartColor === undefined) {
            chartColor = constant.BACKUP_CHART_COLOR[chartColorIndex];
            chartColorIndex++;
        }
        result.push([attributes.seriesName, [], chartColor]) 
    });

    
    apys.forEach(data => {
        const date = dateTimeHelper.toMillisecondsTimestamp(data["date"]);
      
        apyAttributes.map((a, index) => {
            // Add APY into data, etf strategies or yearn aprs require to multiply by 100 for percentage
            const apy = (a.attributeName === "aprs") 
                ? data[a.attributeName] * 100 
                : data[a.attributeName];
            result[index][1].push([date, +parseFloat(apy).toFixed(4)]); // "+" apy as number instead of string
        });
    });

    return result;
}

module.exports.handler = async(req,res) => {
    if(req.params.strategy === null || req.params.strategy === "") {
        res.status(200).json({
            message: "Strategy type is empty",
            body: null
        })
    }

    if(req.params.days === null || req.params.days === "") {
        res.status(200).json({
            message: "Days is empty, please pass in either 1y, 6m, 30d, 7d, or 1d. ",
            body: null
        })
    }

    const contracts = contractHelper.getContractsFromDomain();
    const strategies = contracts.farmer;

    // Check strategy ID param exists
    if(!Object.keys(strategies).includes(req.params.strategy)) {
        res.status(200).json({
            message: "Invalid Strategy ID.",
            body: null
        })
    }

    let startTime = dateTimeHelper.getStartTimeFromParameter(req.params.days);
    if(startTime === -1) {
        res.status(200).json({
            message: "Please only pass '1y', '6m', '30d', '7d' or '1d' as days option.",
            body: null
        })
    }

    const etfStrategies = constant.ETF_STRATEGIES;
    const strategyId = req.params.strategy;
    const strategyType = strategies[strategyId].contractType; // Get strategy category

    let result = [];
    let historicalData = [];
    let apy = 0;

    let finalResult = {
        chartData: result,
        performanceHistory: apy
    }

    try {
        if(etfStrategies.includes(strategyId)) {
            const result = await findPerformanceWithTimePeriods(
                strategyId,
                startTime, 
            );

            historicalData = processPerformanceData(result, strategyId);
            apy = await calculateStrategyPNL(result);
        } else {    
            const collectionName = `${strategyId}_historical-apy`;
            historicalData = await historicalApyDb.findWithTimePeriods(
                startTime, 
                dateTimeHelper.getCurrentTimestamp(),
                collectionName
            );

            const {contractType} = contracts.farmer[strategyId];
            switch(contractType) {
                case "compound": 
                    apy = await getCompoundAPY(strategyId);
                    break;
                case "yearn": 
                    apy = await getYearnAPY(strategyId);
                    break;
                case "harvest":
                    break;
                default:
                    break;
            }
        }

        if(historicalData.length > 0) {
            result = processChartData(historicalData, strategyType, strategyId);
        }

        finalResult = {
            chartData: result,
            performanceHistory: apy
        }
    
        res.status(200).json({
            message: "Success",
            body: finalResult
        });
    } catch(err) {
        console.error(`[performance/apy] Error in handler(): `, err);
        res.status(200).json({
            message: "Some error occur in backend.",
            body: finalResult
        });
    }
}
const constant = require("../../../utils/constant");
const tokenDb = require("../../../models/token.model");
const moment = require("moment");
const delay = require("delay");
const { getTokenPrice } = require("../performance/handler");

let delayTime = 5000;
let tokens = {};

const getStrategyUnderlyingAssets = (assetAddress) => {
    switch(assetAddress) {
        case constant.DAOCDV:
            return constant.DAOCDV_ASSET_DISTRIBUTION;
        default: 
            break;
    }
}

const getStartOfDay = (momentDate) => {
    return momentDate.startOf("day").format("DD-MM-YYYY");
}

const calculateChangePercentage = (oldPrice, newPrice) => {
    try {
        return (newPrice - oldPrice) / oldPrice * 100;
    } catch(err) { 
        console.error(`[distribution/handler] Error in calculateChangePercentage():`, err);
    }
}

const getStrategyAssetDistribution = async(strategyId) => {
    try {
        if(strategyId === undefined || strategyId === "") {
            throw `Missing Strategy ID`;
        }

        const strategyUnderlyingAssets = getStrategyUnderlyingAssets(strategyId);
        if(strategyUnderlyingAssets === undefined) {
            return {};
        }

        const underlyingAssetsIds = Object.values(strategyUnderlyingAssets).map(asset => asset.tokenId);
        const underlyingAssets = await tokenDb.findTokenByIds(underlyingAssetsIds);

        underlyingAssets.map(asset => {
            const assetSymbol = asset.symbol;
            const assetObject = strategyUnderlyingAssets[assetSymbol];

            assetObject.currentPrice = asset.currentPrice || 0.00;
            assetObject.oneDayPrice = asset.oneDayPrice || 0.00;
            assetObject.changePercentage = asset.changePercentage || 0.00;
            assetObject.timestamp = asset.timestamp;
           
            strategyUnderlyingAssets[assetSymbol] = assetObject;
        });

        return strategyUnderlyingAssets;
    } catch (error) {
        console.error(`Error occur in getStrategyAssetDistribution():`, error);
    }
}

const findAllStrategiesAssetDistribution = async() => {
    const etfStrategies = constant.ETF_STRATEGIES;
    const result = {};

    for(let i = 0 ; i < etfStrategies.length; i++) {
        const strategyId = etfStrategies[i];
        const strategyAssetDistribution = await getStrategyAssetDistribution(strategyId);
        result[strategyId] = strategyAssetDistribution;
    }

    return result;
}

const saveAssetsPrice = async() => {
    try {
        const assets = await tokenDb.findAll();
       
        if(assets.length <= 0) {
            throw "Assets not found in database!";
        }
        if(tokens === undefined) {
            throw "Token current price not found!";
        }

        const todayDate = getStartOfDay(moment(new Date()));
        const yesterdayDate = getStartOfDay(moment(new Date()).subtract(1, "day"));
    
        for(let i = 0; i < assets.length; i++) {
            const asset = assets[i];
    
            const todayPrice = await getTokenPrice(asset.tokenId, todayDate);
            delay(delayTime);
            const yesterdayPrice = await getTokenPrice(asset.tokenId, yesterdayDate);
           
            asset.currentPrice = todayPrice;
            asset.oneDayPrice = yesterdayPrice;
            asset.changePercentage = calculateChangePercentage(yesterdayPrice, todayPrice);

            await tokenDb.add(asset);
        }
    } catch (err) {
        console.error(`[distribution/handler] Error occur in saveAssetsPrice(): `, err);
    }
}

module.exports = {
    findAllStrategiesAssetDistribution,
    saveAssetsPrice,
    getStrategyAssetDistribution
}
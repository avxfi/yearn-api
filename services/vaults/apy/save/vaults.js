const config = require("./config.js");
const abi = require('../../../../config/abi')

module.exports = [
  {
    id: "cDAI",
    name: "Compound DAI",
    symbol: "cDAI",
    description: "Compound DAI",
    erc20address: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
    vaultContractAddress: "0x47e565b1e23cda3d6bb69e7ae398b884f5addc7d",
    vaultContractABI: abi.cDAIContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10650116,
    measurement: 1e18,
    price_id: "dai",
    vaultSymbol: 'cDAI',
    isCompound: true,
  },
  {
    id: "cUSDC",
    name: "Compound USDC",
    symbol: "cUSDC",
    description: "Compound USDC",
    erc20address: "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
    vaultContractAddress: "0x05ab7659e6ef9ba1a5f790b402fd1688f01b003e",
    vaultContractABI: abi.cUSDCContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: false,
    withdraw: true,
    withdrawAll: false,
    lastMeasurement: 10532708,
    measurement: 1e18,
    price_id: "usd-coin",
    vaultSymbol: 'cUSDC',
    isCompound: true,
  },
  {
    id: "cUSDT",
    name: "Compound USDT",
    symbol: "cUSDT",
    description: "Compound USDT",
    erc20address: "0x07de306ff27a2b630b1141956844eb1552b956b5",
    vaultContractAddress: "0x5d102e0bdf2037899e1ff2e8cc50987108533c52",
    vaultContractABI: abi.cUSDTContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10651402,
    measurement: 1e18,
    price_id: "tether",
    vaultSymbol: 'cUSDT',
    isCompound: true,
  },
  {
    id: "DAI",
    name: "DAI",
    symbol: "DAI",
    description: "DAI Stablecoin",
    vaultSymbol: "yDAI",
    erc20address: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
    vaultContractAddress: "0x5c2eea0a960cc1f604bf3c35a52ca2273f12e67e",
    vaultContractABI: config.vaultContractV2ABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 24563615,
    measurement: 1e18,
    price_id: "dai",
    isYearn: true,
  },
  {
    id: "TUSD",
    name: "TUSD",
    symbol: "TUSD",
    description: "TrueUSD",
    vaultSymbol: "yTUSD",
    erc20address: "0xf0a112a9da3cae4668270729c3d5917b6cb79564",
    vaultContractAddress: "0xa8564f8d255c33175d4882e55f1a6d19e7a7d351",
    vaultContractABI: config.vaultContractV2ABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 24737399,
    measurement: 1e18,
    price_id: "true-usd",
    isYearn: true,
  },
  {
    id: "USDC",
    name: "USD Coin",
    symbol: "USDC",
    description: "USD//C",
    vaultSymbol: "yUSDC",
    erc20address: "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
    vaultContractAddress: "0xabdb489ded91b6646fadc8eeb0ca82ea1d526182",
    vaultContractABI: config.vaultContractABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: false,
    withdraw: true,
    withdrawAll: false,
    lastMeasurement: 24563583,
    measurement: 1e18,
    price_id: "usd-coin",
    isYearn: true,
  },
  {
    id: "USDT",
    name: "USDT",
    symbol: "USDT",
    description: "Tether USD",
    vaultSymbol: "yUSDT",
    erc20address: "0x07de306ff27a2b630b1141956844eb1552b956b5",
    vaultContractAddress: "0xa5c53c76729e92630a2a3c549215110a330c902d",
    vaultContractABI: config.vaultContractV2ABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 24547196,
    measurement: 1e18,
    price_id: "tether",
    isYearn: true,
  },
  {
    id: "daoCDV",
    name: "DAO Vault Citadel",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Citadel for 3 stablecoins",
    vaultSymbol: "daoCDV",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0x626c25ca5b86277f395c0e40dbdf51f2a302ab43",
    vaultContractABI: config.vaultCitadelABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 25336169,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isCitadel: true,
  },
  {
    id: "daoELO",
    name: "DAO Vault Elon",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Elon for 3 stablecoins",
    vaultSymbol: "daoELO",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xf03fa8553379d872b4e2Bafbc679409Fb82604c2",
    vaultContractABI: abi.elonApeVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 25413059,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isElon: true,
  },
  {
    id: "daoSTO",
    name: "DAO Vault Stonks",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Stonks for 3 stablecoins",
    vaultSymbol: "daoSTO",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xf03fa8553379d872b4e2Bafbc679409Fb82604c2",
    vaultContractABI: abi.daoFaangStonkVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 25680643,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isFaang: true,
  },
  {
    id: "hfDAI",
    name: "DAI",
    symbol: "DAI",
    description: "DAI Stablecoin",
    vaultSymbol: "hfDAI",
    erc20address: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa", 
    vaultContractAddress: "0x0f89EE5b95d1d5cfb10F29775d816fC6D8Adb9FC",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0xE5331cAF0B4E15C88E878551b93df0647738Af35",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 	24943134,
    measurement: 1e18,
    price_id: "dai",
    isHarvest: true
  },
  {
    id: "hfUSDC",
    name: "USD Coin",
    symbol: "USDC",
    description: "USD//C",
    vaultSymbol: "hfUSDC",
    erc20address: "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
    vaultContractAddress: "0x54783464848b35d6fb9bba37C1dDd23aC3B1A11A",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0xE5331cAF0B4E15C88E878551b93df0647738Af35",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: false,
    withdraw: true,
    withdrawAll: false,
    lastMeasurement: 24943141,
    measurement: 1e18,
    price_id: "usd-coin",
    isHarvest: true
  },
  {
    id: "hfUSDT",
    name: "USDT",
    symbol: "USDT",
    description: "Tether USD",
    vaultSymbol: "hfUSDT",
    erc20address: "0x07de306ff27a2b630b1141956844eb1552b956b5",
    vaultContractAddress: "0xb41A49De82e95dc1E028839C3440Ac97f9A7832C", 
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0x0bFA86d10A383B435748E39Cedf8852CFD2B1A9d",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 24943148,
    measurement: 1e18,
    price_id: "tether",
    isHarvest: true
  },
];

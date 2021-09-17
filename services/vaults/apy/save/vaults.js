const config = require("./config.js");
const abi = require('../../../../config/abi')

const testVaults = [
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
    vaultContractAddress: "0xf03fa8553379d872b4e2bafbc679409fb82604c2",
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
    id: "daoCUB",
    name: "DAO Vault Cuban",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Cuban for 3 stablecoins",
    vaultSymbol: "daoCUB",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0x5c304a6cb105e1bff9805ca5cf072f1d2c3beac5",
    vaultContractABI: abi.cubanApeVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 25536976,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isCuban: true,
  },
  {
    id: "daoSTO",
    name: "DAO Vault Stonks",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Stonks for 3 stablecoins",
    vaultSymbol: "daoSTO",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xd6af81e5288be43137debf969d7f2c03482c8cc1",
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
    vaultContractAddress: "0x6d7e8fa90c1ffdc019d691bafc18d6362fdeecd7",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0xdfeb689aea68f221eaafeeeb91767003265968d6",
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
    vaultContractAddress: "0x68b1c860300c4f7d577f08d8b3c3aee23887b280",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0x7da9e06545c4fe6556fc0990f5afd4955379e1d2",
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
    vaultContractAddress: "0x35880615bb18da592ff0feb0940ade2c02249715", 
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0xac783dc15d2cf08d1e1c34e18e531a9b182277b0",
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
  {
    id: "daoMVF",
    name: "DAO Vault Metaverse",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Metaverse for 3 stablecoins",
    vaultSymbol: "daoMVF",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xcbb69e3621ce4eb0d99b60f0e0430dcd5f52fc95",
    vaultContractABI: abi.metaverseVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27185171,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isMetaverse: true,
  },
];

const mainVaults = [
  {
    id: "cDAI",
    name: "Compound DAI",
    symbol: "cDAI",
    description: "Compound DAI",
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0x43c20638c3914eca3c96e9cac8ebe7d652be45c6",
    vaultContractABI: abi.cDAIContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12125533,
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
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0xd1d7f950899c0269a7f2aad5e854cdc3a1350ba9",
    vaultContractABI: abi.cUSDCContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: false,
    withdraw: true,
    withdrawAll: false,
    lastMeasurement: 12125523,
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
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0xeece6ad323a93d4b021bdaac587dcc04b5cf0a78",
    vaultContractABI: abi.cUSDTContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 6,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 	12125523,
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
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    vaultContractAddress: "0xacd43e627e64355f1861cec6d3a6688b31a6f952",
    vaultContractABI: config.vaultContractV2ABI,
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
    isYearn: true,
  },
  {
    id: "TUSD",
    name: "TUSD",
    symbol: "TUSD",
    description: "TrueUSD",
    vaultSymbol: "yTUSD",
    erc20address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    vaultContractAddress: "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a",
    vaultContractABI: config.vaultContractV2ABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 10603368,
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
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e",
    vaultContractABI: config.vaultContractABI,
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
    isYearn: true,
  },
  {
    id: "USDT",
    name: "USDT",
    symbol: "USDT",
    description: "Tether USD",
    vaultSymbol: "yUSDT",
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x2f08119c6f07c006695e079aafc638b8789faf18",
    vaultContractABI: config.vaultContractV2ABI,
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
    isYearn: true,
  },
  {
    id: "daoCDV",
    name: "DAO Vault Citadel",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Citadel for 3 stablecoins",
    vaultSymbol: "daoCDV",
    erc20address: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0x8fe826cc1225b03aa06477ad5af745aed5fe7066",
    vaultContractABI: config.vaultCitadelABI,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12586420,
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
    erc20address: ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8",
    vaultContractABI: abi.elonApeVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12722655,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isElon: true,
  },
  {
    id: "daoCUB",
    name: "DAO Vault Cuban",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Cuban for 3 stablecoins",
    vaultSymbol: "daoCUB",
    erc20address: ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd", 
    vaultContractABI: abi.cubanApeVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12799447,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isCuban: true,
  },
  {
    id: "daoSTO",
    name: "DAO Vault Stonks",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Stonks for 3 stablecoins",
    vaultSymbol: "daoSTO",
    erc20address: ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0x9ee54014e1e6cf10fd7e9290fdb6101fd0d5d416",
    vaultContractABI: abi.daoFaangStonkVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12932754,
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
    erc20address: "0x6b175474e89094c44da98b954eedeac495271d0f", 
    vaultContractAddress: "0xe4e6ce7c1d9ff44db27f622accbb0753c2f48955",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0xef9a15025c2ed048a67c5c8019a1101172eeb51c",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 	12593517,
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
    erc20address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    vaultContractAddress: "0xd0f0858578c7780f2d65f6d81bc7ddbe166367cc",
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0x0af9547974e056fca221f679dbbb7f8651407d7f",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: false,
    withdraw: true,
    withdrawAll: false,
    lastMeasurement: 12593522,
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
    erc20address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    vaultContractAddress: "0x2cc1507e6e3c844eeb77db90d193489f1ddfb299", 
    vaultContractABI: abi.hfVaultContract,
    strategyContractAddress: "0x89541e3b8e8b73c108744909ea11d506b4a8e6c7",
    strategyABI: abi.hfStrategyContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 12593527,
    measurement: 1e18,
    price_id: "tether",
    isHarvest: true
  },
  {
    id: "daoMVF",
    name: "DAO Vault Metaverse",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Metaverse for 3 stablecoins",
    vaultSymbol: "daoMVF",
    erc20address: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0x5b3ae8b672a753906b1592d44741f71fbd05ba8c",
    vaultContractABI: abi.metaverseVaultContractMainnet,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 13239874,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isMetaverse: true,
  },
];

module.exports = (process.env.PRODUCTION != '') ? mainVaults : testVaults;
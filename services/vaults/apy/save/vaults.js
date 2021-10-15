const config = require("./config.js");
const abi = require('../../../../config/abi')

const testVaults = [
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
    triggerDuration: 2
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
    triggerDuration: 2
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
    triggerDuration: 2
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
    triggerDuration: 2
  },
  {
    id: "daoMVF",
    name: "DAO Vault Metaverse",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Metaverse for 3 stablecoins",
    vaultSymbol: "daoMVF",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xb2953c89615069fa6c14f3db3a09b7ecc077f533",
    vaultContractABI: abi.metaverseVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27591336,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isMetaverse: true,
    triggerDuration: 2
  },
  {
    id: "daoCDV2",
    name: "DAO L2 Citadel V2",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Citadel V2 for 3 stablecoins",
    vaultSymbol: "daoCDV2",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xc5719b5e85c30eb6a49d3c1b8058ae2435146c88",
    vaultContractABI: abi.citadelV2VaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27165510,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isCitadelV2: true,
    triggerDuration: 2
  },
  {
    id: "daoSTO2",
    name: "DAO Vault Stonks V2",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Stonks V2 for 3 stablecoins",
    vaultSymbol: "daoSTO2",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xb8e43526d2fee347f88e690ee86d047895472d04",
    vaultContractABI: abi.daoStonksVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27387067,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isDaoStonks: true,
    triggerDuration: 2
  },
  {
    id: "daoTAS",
    name: "DAO Vault Tech Anlys",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Tech Anlys for 3 stablecoins",
    vaultSymbol: "daoTAS",
    erc20address: ["0x07de306ff27a2b630b1141956844eb1552b956b5", "0xb7a4f3e9097c08da09517b5ab877f7a917224ede", "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],
    vaultContractAddress: "0xb72b89fa6d222973379cbd9c5c88768e3a050aed",
    vaultContractABI: abi.daoTAVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 27400992,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isTA: true,
    triggerDuration: 2
  },
];

const mainVaults = [
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
    triggerDuration: 2
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
    triggerDuration: 2
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
    triggerDuration: 2
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
    triggerDuration: 2
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
    triggerDuration: 2
  },
  {
    id: "daoCDV2",
    name: "DAO L2 Citadel V2",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Citadel V2 for 3 stablecoins",
    vaultSymbol: "daoCDV2",
    erc20address: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0xcc6c417e991e810477b486d992faaca1b7440e76",
    vaultContractABI: abi.citadelV2VaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 13344175,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isCitadelV2: true,
    triggerDuration: 2
  },
  {
    id: "daoSTO2",
    name: "DAO Vault Stonks V2",
    symbol: ["USDT","USDC","DAI"],
    description: "DAO Vault Stonks V2 for 3 stablecoins",
    vaultSymbol: "daoSTO2",
    erc20address: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
    vaultContractAddress: "0xd0b14644b0f91239075ed8a415769c4e20d37cf9",
    vaultContractABI: abi.daoStonksVaultContract,
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 13344659,
    measurement: 1e18,
    price_id: ["tether", "usd-coin", "dai"],
    isDaoStonks: true,
    triggerDuration: 2
  },
  // {
  //   id: "daoTAS",
  //   name: "DAO Vault Tech Anlys",
  //   symbol: ["USDT","USDC","DAI"],
  //   description: "DAO Vault Tech Anlys for 3 stablecoins",
  //   vaultSymbol: "daoTAS",
  //   erc20address: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "0x6b175474e89094c44da98b954eedeac495271d0f"],
  //   vaultContractAddress: "0xb72b89fa6d222973379cbd9c5c88768e3a050aed",
  //   vaultContractABI: abi.daoTAVaultContract,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 27400992,
  //   measurement: 1e18,
  //   price_id: ["tether", "usd-coin", "dai"],
  //   isTA: true,
  //   triggerDuration: 2
  // },
];

module.exports = (process.env.PRODUCTION != '') ? mainVaults : testVaults;
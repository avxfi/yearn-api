const config = require("./config.js");

module.exports = [
  // {
  //   id: "3Crv",
  //   name: "curve.fi/3pool LP",
  //   symbol: "3Crv",
  //   description: "yDAI/yUSDC/yUSDT",
  //   vaultSymbol: "y3Crv",
  //   erc20address: "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490",
  //   vaultContractAddress: "0x9cA85572E6A3EbF24dEDd195623F188735A5179f",
  //   vaultContractABI: config.vaultContractV5ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 11039340,
  //   measurement: 1e18,
  //   depositDisabled: false,
  //   price_id: "curve-fi-ydai-yusdc-yusdt-ytusd", // TODO: Update this when Coingecko adds token
  // },
  // {
  //   id: "ETH",
  //   name: "ETH",
  //   symbol: "ETH",
  //   description: "Ether",
  //   vaultSymbol: "yETH",
  //   erc20address: "Ethereum",
  //   vaultContractAddress: "0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7",
  //   vaultContractABI: config.vaultContractV4ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: false,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10774489,
  //   measurement: 1e18,
  //   depositDisabled: true,
  //   price_id: "ethereum",
  // },
  // {
  //   id: "WETH",
  //   name: "WETH",
  //   symbol: "WETH",
  //   description: "Wrappeth Ether",
  //   vaultSymbol: "yWETH",
  //   erc20address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  //   vaultContractAddress: "0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7",
  //   vaultContractABI: config.vaultContractV4ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10774489,
  //   measurement: 1e18,
  //   depositDisabled: true,
  //   price_id: "ethereum",
  // },
  // {
  //   id: "YFI",
  //   name: "yearn.finance",
  //   symbol: "YFI",
  //   description: "yearn.finance",
  //   vaultSymbol: "yYFI",
  //   erc20address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
  //   vaultContractAddress: "0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10695309,
  //   measurement: 1e18,
  //   price_id: "yearn-finance",
  // },
  // {
  //   id: "CRV",
  //   name: "curve.fi/y LP",
  //   symbol: "yCRV",
  //   description: "yDAI/yUSDC/yUSDT/yTUSD",
  //   vaultSymbol: "yUSD",
  //   erc20address: "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8",
  //   vaultContractAddress: "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c",
  //   vaultContractABI: config.vaultContractABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: false,
  //   withdraw: true,
  //   withdrawAll: false,
  //   lastMeasurement: 10559448,
  //   measurement: 1e18,
  //   price_id: "curve-fi-ydai-yusdc-yusdt-ytusd",
  // },
  // {
  //   id: "crvBUSD",
  //   name: "curve.fi/busd LP",
  //   symbol: "crvBUSD",
  //   description: "yDAI/yUSDC/yUSDT/yBUSD",
  //   vaultSymbol: "ycrvBUSD",
  //   erc20address: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
  //   vaultContractAddress: "0x2994529c0652d127b7842094103715ec5299bbed",
  //   vaultContractABI: config.vaultContractV3ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   depositDisabled: false,
  //   lastMeasurement: 10709740,
  //   measurement: 1e18,
  //   price_id: "lp-bcurve",
  // },
  // {
  //   id: "crvBTC",
  //   name: "curve.fi/sbtc LP",
  //   symbol: "crvBTC",
  //   description: "renBTC/wBTC/sBTC",
  //   vaultSymbol: "ycrvBTC",
  //   erc20address: "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
  //   vaultContractAddress: "0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6",
  //   vaultContractABI: config.vaultContractV3ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10734341,
  //   measurement: 1e18,
  //   price_id: "lp-sbtc-curve",
  // },
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
  },
  {
    id: "TUSD",
    name: "TUSD",
    symbol: "TUSD",
    description: "TrueUSD",
    vaultSymbol: "yTUSD",
    erc20address: "0x0000000000085d4780B73119b644AE5ecd22b376",
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
  },
  // {
  //   id: "DAI",
  //   name: "DAI",
  //   symbol: "DAI",
  //   description: "DAI Stablecoin",
  //   vaultSymbol: "yDAI",
  //   erc20address: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
  //   vaultContractAddress: "0x193b83e8cc108c86362e47a4c2d3048837d4996e",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10650116,
  //   measurement: 1e18,
  //   price_id: "dai",
  // },
  // {
  //   id: "TUSD",
  //   name: "TUSD",
  //   symbol: "TUSD",
  //   description: "TrueUSD",
  //   vaultSymbol: "yTUSD",
  //   erc20address: "0xe1964bdd447ee6f0ee2bc734f1043eba35444cfc",
  //   vaultContractAddress: "0x0c9ddf949e32221612145807e34483ccf946b2b9",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10603368,
  //   measurement: 1e18,
  //   price_id: "true-usd",
  // },
  // {
  //   id: "USDC",
  //   name: "USD Coin",
  //   symbol: "USDC",
  //   description: "USD//C",
  //   vaultSymbol: "yUSDC",
  //   erc20address: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
  //   vaultContractAddress: "0x231991d392dbe5980586665bc1a066f8efac78c8",
  //   vaultContractABI: config.vaultContractABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 6,
  //   deposit: true,
  //   depositAll: false,
  //   withdraw: true,
  //   withdrawAll: false,
  //   lastMeasurement: 10532708,
  //   measurement: 1e18,
  //   price_id: "usd-coin",
  // },
  // {
  //   id: "USDT",
  //   name: "USDT",
  //   symbol: "USDT",
  //   description: "Tether USD",
  //   vaultSymbol: "yUSDT",
  //   erc20address: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
  //   vaultContractAddress: "0x359902517f43b8d38cf9718fe90e552375476f05",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 6,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10651402,
  //   measurement: 1e18,
  //   price_id: "tether",
  // },
  // {
  //   id: "aLINK",
  //   name: "aLINK",
  //   symbol: "aLINK",
  //   description: "Aave Interest bearing LINK",
  //   vaultSymbol: "yaLINK",
  //   erc20address: "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
  //   vaultContractAddress: "0x29E240CFD7946BA20895a7a02eDb25C210f9f324",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 10599617,
  //   measurement: 1e18,
  //   price_id: "aave-link",
  // },
  // {
  //   id: "LINK",
  //   name: "ChainLink",
  //   symbol: "LINK",
  //   description: "ChainLink",
  //   vaultSymbol: "yLINK",
  //   erc20address: "0x514910771af9ca656af840dff83e8264ecf986ca",
  //   vaultContractAddress: "0x881b06da56BB5675c54E4Ed311c21E54C5025298",
  //   vaultContractABI: config.vaultContractV2ABI,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   depositDisabled: true,
  //   lastMeasurement: 10604016,
  //   measurement: 1e18,
  //   price_id: "chainlink",
  // },
];

const abi = require('../../../../config/abi')

const testVaults = [
    {
        id: "daoDEGEN",
        name: "DAO Vault Degen",
        symbol: ["USDT","USDC","DAI"],
        description: "DAO Vault Degen for 3 stablecoins",
        vaultSymbol: "daoDEGEN",
        erc20address: ["0x337610d27c682E347C9cD60BD4b3b107C9d34dDd", "0x64544969ed7EBf5f083679233325356EbE738930", "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867"],
        vaultContractAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
        vaultContractABI: abi.daoDegenVaultContract,
        balance: 0,
        vaultBalance: 0,
        decimals: 18,
        deposit: true,
        depositAll: true,
        withdraw: true,
        withdrawAll: true,
        lastMeasurement: 12757720,
        measurement: 1e18,
        price_id: ["tether", "usd-coin", "dai"],
        isDaoDegen: true,
      },
];

const mainVaults = [
  // {
  //   id: "daoDEGEN",
  //   name: "DAO Vault Degen",
  //   symbol: ["USDT","USDC","DAI"],
  //   description: "DAO Vault Degen for 3 stablecoins",
  //   vaultSymbol: "daoSAFU",
  //   erc20address: ["0x55d398326f99059fF775485246999027B3197955", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"],
  //   vaultContractAddress: "", // Update here
  //   vaultContractABI: abi.daoDegenVaultContract,
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 12757720, // Update here
  //   measurement: 1e18,
  //   price_id: ["tether", "usd-coin", "dai"],
  //   isDaoDegen: true,
  // },
];

module.exports = (process.env.PRODUCTION != '') ? mainVaults : testVaults;
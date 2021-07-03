const _ = require("lodash");
const abi = require("../abi");
const config = require("../../services/vaults/apy/save/config");

const DEFAULT = {
  domainName: "api.yearn.tools",
  certificateName: "yearn.tools",
  stage: "${self:custom.currentStage}",
  createRoute53Record: true,
  basePath: "${self:custom.basePath}",
  endpointType: "regional",
  apiType: "rest",
  securityPolicy: "tls_1_2",
  autoDomain: true,
  // allowPathMatching: true, // enable only once when migrating from rest to http api migration
};

module.exports.prod = () => DEFAULT;

module.exports.staging = () => {
  return _.merge({}, DEFAULT, {
    domainName: `staging-${DEFAULT.domainName}`,
  });
};

module.exports.dev = () => {
  return _.merge({}, DEFAULT, {
    domainName: `dev-${DEFAULT.domainName}`,
  });
};
const testContracts = {
  earn: {
    yUSDT: {
      address: "0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd",
      abi: abi.earnUSDTABIContract,
    },
    yUSDC: {
      address: "0x2200a7e736821f5915ed3c40e7088a7e56dea64a",
      abi: abi.earnUSDCABIContract,
    },
    yDAI: {
      address: "0x690bcadb0d5633766510be078b97796d90acc7d8",
      abi: abi.earnDAIABIContract,
    },
    yTUSD: {
      address: "0x6c45ba691a8f587e3fd7f17c7adefce8dfa452aa",
      abi: abi.earnTUSDABIContract,
    },
  },
  vault: {
    yUSDT: {
      address: "0xa5c53c76729e92630a2a3c549215110a330c902d",
      abi: config.vaultContractV2ABI,
    },
    yUSDC: {
      address: "0xabdb489ded91b6646fadc8eeb0ca82ea1d526182",
      abi: config.vaultContractABI,
    },
    yDAI: {
      address: "0x5c2eea0a960cc1f604bf3c35a52ca2273f12e67e",
      abi: config.vaultContractV2ABI,
    },
    yTUSD: {
      address: "0xa8564f8d255c33175d4882e55f1a6d19e7a7d351",
      abi: config.vaultContractV2ABI,
    },
  },
  compund: {
    cUSDT: {
      address: "0x3f0a0ea2f86bae6362cf9799b523ba06647da018",
      abi: abi.cUSDTContract,
    },
    cUSDC: {
      address: "0x4a92e71227d294f041bd82dd8f78591b75140d63",
      abi: abi.cUSDCContract,
    },
    cDAI: {
      address: "0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad",
      abi: abi.cDAIContract,
    },
  },
  farmer: {
    yUSDT: {
      address: "0x6b150e9bd70e216775c8b73270e64e870a3110c1",
      abi: abi.vaultUSDTABIContract,
      strategyAddress: "0x31324c1c0bb6b4b6f8102acb8346b065307926fa",
      strategyABI: abi.yearnUSDTABIContract,
      contractType: "yearn",
      tokenId: "tether",
    },
    yUSDC: {
      address: "0x6e15e283dc430eca010ade8b11b5b377902d6e56",
      abi: abi.vaultUSDCABIContract,
      strategyAddress: "0xe77ad5e2c4e7143fdbac6a4dde891727fc395c75",
      strategyABI: abi.yearnUSDCABIContract,
      contractType: "yearn",
      tokenId: "usd-coin",
    },
    yDAI: {
      address: "0x2428bfd238a3632552b343297c504f60283009ed",
      abi: abi.vaultDAIABIContract,
      strategyAddress: "0x8615dfb5b53e9ddb3751fbc3fc59512d4aba9a22",
      strategyABI: abi.yearnDAIABIContract,
      contractType: "yearn",
      tokenId: "dai",
    },
    yTUSD: {
      address: "0xeccb98c36bfc8c49c6065d1cd90bcf1c6f02d4ad",
      abi: abi.vaultTUSDABIContract,
      strategyAddress: "0xf64674cfc6597d597275144a1a746dad564b0fcd",
      strategyABI: abi.yearnTUSDABIContract,
      contractType: "yearn",
      tokenId: "true-usd",
    },
    cUSDT: {
      address: "0x5d102e0bdf2037899e1ff2e8cc50987108533c52",
      abi: abi.compoundVaultContract,
      strategyAddress: "0xa5c956aef6a21c986665de9cf889ef36613c7d5e",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "tether",
    },
    cUSDC: {
      address: "0x05ab7659e6ef9ba1a5f790b402fd1688f01b003e",
      abi: abi.compoundVaultContract,
      strategyAddress: "0x3add8a9d3176c4b30dddeeababf9ca5cc3d49944",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "usd-coin",
    },
    cDAI: {
      address: "0x47e565b1e23cda3d6bb69e7ae398b884f5addc7d",
      abi: abi.compoundVaultContract,
      strategyAddress: "0xb951976a7d79fd8a589a7ca9753641380f5c1ab4",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "dai",
    },
    daoCDV: {
      address: "0x626c25ca5b86277f395c0e40dbdf51f2a302ab43",
      abi: abi.citadelABIContract,
      strategyAddress: "0xc9939b0b2af53e8becba22ab153795e168140237",
      strategyABI: abi.citadelStrategyABIContract,
      contractType: "citadel",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    daoELO: {
      address: "0xf03fa8553379d872b4e2bafbc679409fb82604c2",
      abi: abi.elonApeVaultContract,
      strategyAddress: "0xa4f71f88bd522b33af3ae515caafa956bd1bbfa1",
      strategyABI: abi.elonApeStrategyContract,
      contractType: "elon",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    daoSTO: {
      address: "0xd6af81e5288be43137debf969d7f2c03482c8cc1",
      abi: abi.daoFaangStonkVaultContract,
      strategyAddress: "0xc0f43b6db13e5988c92aa8c7c286a51f493620d4",
      strategyABI: abi.daoFaangStonkStrategyContract,
      contractType: "daoFaang",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    'hfDAI': {
      address: '0x6d7e8fa90c1ffdc019d691bafc18d6362fdeecd7',
      abi: abi.hfVaultContract,
      strategyAddress: '0xdfeb689aea68f221eaafeeeb91767003265968d6',
      strategyABI: abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "dai",
    },
    'hfUSDC': {
      address: '0x68b1c860300c4f7d577f08d8b3c3aee23887b280',
      abi: abi.hfVaultContract,
      strategyAddress: '0x7da9e06545c4fe6556fc0990f5afd4955379e1d2',
      strategyABI: abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "usd-coin",
    },
    'hfUSDT': {
      address: '0x35880615bb18da592ff0feb0940ade2c02249715',
      abi: abi.hfVaultContract,
      strategyAddress: '0xac783dc15d2cf08d1e1c34e18e531a9b182277b0',
      strategyABI: abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "tether",
    },
  },
  vipDVG: {
    address: "0x3aa8e8B6D3562a1E7aCB0dddD02b27896C00c424",
    abi: abi.xDVGABIContract,
    tokenId: "xDVG",
    lastMeasurement: 24819747,
  },
  DVG: {
    address: "0xea9726eFc9831EF0499fD4Db4Ab143F15a797673",
    abi: abi.DVGABIContract,
    tokenId: "daoventures",
  },
  daoStake: {
    address: "0xd8f59a99acfc597feb84914fef3769def87e7553",
    abi: abi.daoStakeContract,
    startBlock: 25711879,
    poolPercent: 0.51
  },
  uniswap: {
    ethDVG: {
      address: "0x0A15e37442e2a41A3A51A9Eff7fE1DCE0E96f0bB",
      abi: abi.uniswapPairABIContract,  
    }  
  },
  harvest: {
    'hfDAI': {
      address: '0xed2ebf9cde8c8fcc4f82ec6e3675130ae5649442',
      abi: abi.hfVault,
    },
    'hfUSDC': {
      address: '0xeff936f12c1600b8ce60f0e0575f520f82aedce3',
      abi: abi.hfVault,
    },
    'hfUSDT': {
      address: '0x1298e9b9a2350ad91f2baf68ab4de8ecb9267621',
      abi: abi.hfVault,
    }
  },
  chainLink: {
    USDT_ETH: {
      address: "0x0bF499444525a23E7Bb61997539725cA2e928138",
      abi: abi.eacAggregatoorProxyContract,
    },
    USDT_USD: {
      address: "0x2ca5A90D34cA333661083F89D831f757A9A50148",
      abi: abi.eacAggregatoorProxyContract,
    }
  }
};

const mainContracts = {
  earn: {
    yUSDT: {
      address: "0xdb12e805d004698fc58f6e4fbdd876268df2dffe",
      abi: abi.earnUSDTABIContract,
    },
    yUSDC: {
      address: "0xC6Be21D8533e90Fd136905eBe70c9d9148237f2d",
      abi: abi.earnUSDCABIContract,
    },
    yDAI: {
      address: "0x21857b392b7d0ca20c439bc39896f38ee74c6023",
      abi: abi.earnDAIABIContract,
    },
    yTUSD: {
      address: "0x63659fcb4a1f62e0c80690ddc67084e8e1560c61",
      abi: abi.earnTUSDABIContract,
    },
  },
  vault: {
    yUSDT: {
      address: "0x2f08119c6f07c006695e079aafc638b8789faf18",
      abi: config.vaultContractV2ABI,
    },
    yUSDC: {
      address: "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e",
      abi: config.vaultContractABI,
    },
    yDAI: {
      address: "0xacd43e627e64355f1861cec6d3a6688b31a6f952",
      abi: config.vaultContractV2ABI,
    },
    yTUSD: {
      address: "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a",
      abi: config.vaultContractV2ABI,
    },
  },
  farmer: {
    yUSDT: {
      address: "0x4F0C1c9bA6B9CCd0BEd6166e86b672ac8EE621F7",
      abi: abi.vaultUSDTABIContract,
      strategyAddress: "0x3DB93e95c9881BC7D9f2C845ce12e97130Ebf5f2",
      strategyABI: abi.yearnUSDTABIContract,
      contractType: "yearn",
      tokenId: "tether",
    },
    yUSDC: {
      address: "0x9f0230FbDC0379E5FefAcca89bE03A42Fec5fb6E",
      abi: abi.vaultUSDCABIContract,
      strategyAddress: "0x4A9dE4dA5eC67E1dbc8e18F26E178B40D690A11D",
      strategyABI: abi.yearnUSDCABIContract,
      contractType: "yearn",
      tokenId: "usd-coin",
    },
    yDAI: {
      address: "0x2bFc2Da293C911e5FfeC4D2A2946A599Bc4Ae770",
      abi: abi.vaultDAIABIContract,
      strategyAddress: "0x3685fB7CA1C555Cb5BD5A246422ee1f2c53DdB71",
      strategyABI: abi.yearnDAIABIContract,
      contractType: "yearn",
      tokenId: "dai",
    },
    yTUSD: {
      address: "0x2C8de02aD4312069355B94Fb936EFE6CFE0C8FF6",
      abi: abi.vaultTUSDABIContract,
      strategyAddress: "0xA6F1409a259B21a84c8346ED1B0826D656959a54",
      strategyABI: abi.yearnTUSDABIContract,
      contractType: "yearn",
      tokenId: "true-usd",
    },
    cUSDT: {
      address: "0xEeCe6AD323a93d4B021BDAaC587DCC04b5cf0a78",
      abi: abi.compoundVaultContract,
      strategyAddress: "0x11af10648ed5094f41753ccb69a2f74135697631",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "tether",
    },
    cUSDC: {
      address: "0xd1D7f950899C0269a7F2aad5E854cdc3a1350ba9",
      abi: abi.compoundVaultContract,
      strategyAddress: "0x89be389b0529ca3187b6e81e689496cb3bad8557",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "usd-coin",
    },
    cDAI: {
      address: "0x43C20638C3914Eca3c96e9cAc8ebE7d652Be45c6",
      abi: abi.compoundVaultContract,
      strategyAddress: "0x0c5cff1c9ec7ce8e28998503471b19c848c5a581",
      strategyABI: abi.compoundStrategyContract,
      contractType: "compound",
      tokenId: "dai",
    },
    daoCDV: {
      address: "0x8fe826cc1225b03aa06477ad5af745aed5fe7066", // TODO Update on mainnet
      abi: abi.citadelABIContract,
      strategyAddress: "", // TODO Update on mainnet
      strategyABI: abi.citadelStrategyABIContract,
      contractType: "citadel",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    daoELO: {
      address: "0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8", // TODO Update on mainnet
      abi: abi.elonApeVaultContract,
      strategyAddress: "0x8a00046ab28051a952e64a886cd8961ca90a59bd", // TODO Update on mainnet
      strategyABI: abi.elonApeStrategyContract,
      contractType: "elon",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    daoSTO: {
      address: "0",// TODO Update on mainnet
      abi: abi.daoFaangStonkVaultContract,
      strategyAddress: "", // TODO Update on mainnet
      strategyABI: abi.daoFaangStonkStrategyContract,
      contractType: "daoFaang",
      tokenId: ["tether", "usd-coin", "dai"],
    },
    hfDAI: {
      address: '', // TODO: Update that this to mainnet address
      abi: abi.hfVaultContract,
      strategyAddress: '',
      strategyABI:  abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "dai",
    },
    hfUSDC: {
      address: '', // TODO: Update that this to mainnet address
      abi: abi.hfVaultContract,
      strategyAddress: '',
      strategyABI: abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "usd-coin",
    },
    hfUSDT: {
      address: '', // TODO: Update that this to mainnet address
      abi: abi.hfVaultContract,
      strategyAddress: '',
      strategyABI: abi.hfStrategyContract,
      contractType: 'harvest',
      tokenId: "tether",
    },
  },
  compund: {
    cUSDT: {
      address: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
      abi: abi.cUSDTContract,
    },
    cUSDC: {
      address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
      abi: abi.cUSDTContract,
    },
    cDAI: {
      address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
      abi: abi.cDAIContract,
    },
  },
  vipDVG: {
    address: "", // TODO: Update mainnet address
    abi: abi.xDVGABIContract,
    tokenId: "xDVG",
    lastMeasurement: 0, // TODO Update lastMeasurement
  },
  DVG: {
    address: "", // TODO: Update mainnet address
    abi: abi.xDVGABIContract,
    tokenId: "daoventures",
  },
  daoStake: {
    address: "", // TODO Update mainnet address
    abi: abi.daoStakeContract,
    startBlock: 25055584, // TODO Update mainnet block
    poolPercent: 0.51
  },
  uniswap: {
    ethDVG: {
      address: "", // TODO Update mainnet address
      abi: abi.uniswapPairABIContract,
    }
  },
  harvest: {
    'hfDAI': {
      address: '', // TODO Update mainnet address
      abi: abi.hfVault,
    },
    'hfUSDC': {
      address: '', // TODO Update mainnet address
      abi: abi.hfVault,
    },
    'hfUSDT': {
      address: '', // TODO Update mainnet address
      abi: abi.hfVault,
    }
  },
  chainLink: {
    USDT_ETH: {
      address: "0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46",
      abi: abi.eacAggregatoorProxyContract,
    },
    USDT_USD: {
      address: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
      abi: abi.eacAggregatoorProxyContract,
    }
  }
};

const devEarnContract = "0xdb12e805d004698fc58f6e4fbdd876268df2dffe";
const devVaultContract = "0x99dd34943c741E17EB772041cd3D7E8d317FA92f";
const devYfUSDTContract = "0x9680CF4CfED6Cf04eF0Eeb513c2399c192D0c0B0";
const prodEarnContract = "0xe6354ed5bc4b393a5aad09f21c46e101e692d447";
const prodVaultContract = "0x2f08119c6f07c006695e079aafc638b8789faf18";
const prodYfUSDTContract = "0xA0db955B5bdFA7C279CdE6C136FBA20C195CdEe5";
const aggregatedContractAddress = "0x9cad8ab10daa9af1a9d2b878541f41b697268eec";

module.exports.devContract = {
  devEarnContract,
  devVaultContract,
  devYfUSDTContract,
};

module.exports.prodContract = {
  prodEarnContract,
  prodVaultContract,
  prodYfUSDTContract,
};

module.exports = {
  testContracts,
  mainContracts,
  aggregatedContractAddress,
};

// Mainnet Contracts
db.vault_categories.insertMany([
    { name: 'advance', contract_address: '0x4f0c1c9ba6b9ccd0bed6166e86b672ac8ee621f7', symbol: 'yUSDT',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', contract_address: '0x9f0230fbdc0379e5fefacca89be03a42fec5fb6e', symbol: 'yUSDC',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'advance', contract_address: '0x2bfc2da293c911e5ffec4d2a2946a599bc4ae770', symbol: 'yDAI',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'advance', contract_address: '0x2c8de02ad4312069355b94fb936efe6cfe0c8ff6', symbol: 'yTUSD',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'basic', contract_address: '0xeece6ad323a93d4b021bdaac587dcc04b5cf0a78', symbol: 'cUSDT',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'basic', contract_address: '0xd1d7f950899c0269a7f2aad5e854cdc3a1350ba9', symbol: 'cUSDC',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'basic', contract_address: '0x43c20638c3914eca3c96e9cac8ebe7d652be45c6', symbol: 'cDAI',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'expert', contract_address: '0x8fe826cc1225b03aa06477ad5af745aed5fe7066', symbol: 'daoCDV',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'degen', contract_address: '0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8', symbol: 'daoELO',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'degen', contract_address: '0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd', symbol: 'daoCUB' ,deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', contract_address: '0x742a85daf742ca0213b06fdae449434e0448691e', symbol: 'daoSTO',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', contract_address: '0x89541e3b8e8b73c108744909ea11d506b4a8e6c7', symbol: 'hfUSDT' ,deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', contract_address: '0x0af9547974e056fca221f679dbbb7f8651407d7f', symbol: 'hfUSDC',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', contract_address: '0xef9a15025c2ed048a67c5c8019a1101172eeb51c', symbol: 'hfDAI',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
]);

db.stake_pool.insertMany([
    {
        name: 'vipDVG',
        label: 'vipDVG LP',
        contract_address: '', // TODO: Update to mainnet address
        status: 'A',
        pid: '7',
        category: 'Basic',
        tokenId: 'xDVG', 
        symbol: 'xDVG',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'ETH<->DVG',
        label: 'Uniswap DVG-ETH LP',
        contract_address: '', // TODO: Update to mainnet address
        status: 'A',
        pid: '8',
        category: 'Basic',
        tokenId: 'ethDVG',
        symbol: 'ethDVG',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x8fe826cc1225b03aa06477ad5af745aed5fe7066',
        status: 'A',
        pid: '9',
        category: 'Expert',
        tokenId: 'ethereum',
        symbol: 'daoCDV',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: "daoSTO",
        label: "DAO FAANG Stonk",
        contract_address: '0x742a85daf742ca0213b06fdae449434e0448691e',
        status: 'A',
        pid: '3',
        category: 'Advance',
        tokenId: 'tether',
        symbol: 'daoSTO',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    }
]);

// Testnet Contracts
db.vault_categories.insertMany([
    { name: 'advance', network:"ethereum",  contract_address: '0x6b150e9bd70e216775c8b73270e64e870a3110c1', symbol: 'yUSDT', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"ethereum", contract_address: '0x6e15e283dc430eca010ade8b11b5b377902d6e56', symbol: 'yUSDC', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"ethereum", contract_address: '0x2428bfd238a3632552b343297c504f60283009ed', symbol: 'yDAI', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"ethereum", contract_address: '0xeccb98c36bfc8c49c6065d1cd90bcf1c6f02d4ad', symbol: 'yTUSD', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"ethereum", contract_address: '0x5d102e0bdf2037899e1ff2e8cc50987108533c52', symbol: 'cUSDT', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"ethereum", contract_address: '0x05ab7659e6ef9ba1a5f790b402fd1688f01b003e', symbol: 'cUSDC', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"ethereum", contract_address: '0x47e565b1e23cda3d6bb69e7ae398b884f5addc7d', symbol: 'cDAI', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'degen', network:"ethereum", contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43', symbol: 'daoCDV', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'degen', network:"ethereum", contract_address: '0xf03fa8553379d872b4e2bafbc679409fb82604c2', symbol: 'daoELO', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' }, 
    { name: 'degen', network:"ethereum", contract_address: '0x5c304a6cb105e1bff9805ca5cf072f1d2c3beac5', symbol: 'daoCUB', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' }, 
    { name: 'advance', network:"ethereum", contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1', symbol: 'daoSTO', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"ethereum", contract_address: '0x35880615bb18da592ff0feb0940ade2c02249715', symbol: 'hfUSDT', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'basic', network:"ethereum", contract_address: '0x68b1c860300c4f7d577f08d8b3c3aee23887b280', symbol: 'hfUSDC', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'basic', network:"ethereum", contract_address: '0x6d7e8fa90c1ffdc019d691bafc18d6362fdeecd7', symbol: 'hfDAI', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
]);

db.xdvg_token.insert({
    name: 'USDT',
    contract_address: '0x07de306FF27a2B630B1141956844eB1552B956B5'
});

db.stake_pool.insertMany([
    {
        name: 'vipDVG',
        label: 'vipDVG LP',
        contract_address: '0x3aa8e8b6d3562a1e7acb0dddd02b27896c00c424',
        status: 'A',
        pid: '7',
        category: 'Basic',
        tokenId: 'xDVG', 
        symbol: 'xDVG',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'ETH<->DVG',
        label: 'Uniswap DVG-ETH LP',
        contract_address: '0x0a15e37442e2a41a3a51a9eff7fe1dce0e96f0bb',
        status: 'A',
        pid: '8',
        category: 'Basic',
        tokenId: 'ethDVG',
        symbol: 'ethDVG',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43',
        status: 'A',
        pid: '9',
        category: 'Expert',
        tokenId: 'ethereum',
        symbol: 'daoCDV',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: "daoSTO",
        label: "DAO FAANG Stonk LP",
        contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1', 
        status: 'A',
        pid: '11',
        category: 'Advance',
        tokenId: 'tether',
        symbol: 'daoSTO',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
]);


db.special_event.insertMany([
    { startTime: 1622390400000, endTime: 1622444400000, threshold: 3000 },
    { startTime: 1622538000000, endTime: 1622541600000, threshold: 5000 },
    { startTime: 1622538900000, endTime: 1622540400000, threshold: 7000 },
    { startTime: 1622542200000, endTime: 1622543400000, threshold: 6000 },
    { startTime: 1622606400000, endTime: 1622610000000, threshold: 3000 }
]);
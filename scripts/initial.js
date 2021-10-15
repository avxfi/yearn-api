// Mainnet Contracts
db.vault_categories.insertMany([
    { name: 'expert', network:"ethereum", contract_address: '0x8fe826cc1225b03aa06477ad5af745aed5fe7066', symbol: 'daoCDV',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'degen', network:"ethereum", contract_address: '0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8', symbol: 'daoELO',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''  },
    { name: 'degen', network:"ethereum", contract_address: '0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd', symbol: 'daoCUB' ,deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"ethereum", contract_address: '0x742a85daf742ca0213b06fdae449434e0448691e', symbol: 'daoSTO',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"polygon", contract_address: '0x3db93e95c9881bc7d9f2c845ce12e97130ebf5f2', symbol: 'daoMPT',deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"ethereum", contract_address: '0x5b3ae8b672a753906b1592d44741f71fbd05ba8c', symbol: 'daoMVF', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'expert', network:"ethereum", contract_address: '0xcc6c417e991e810477b486d992faaca1b7440e76', symbol: 'daoCDV2', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'advance', network:"ethereum", contract_address: '0xd0b14644b0f91239075ed8a415769c4e20d37cf9', symbol: 'daoSTO2', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    // { name: 'degen', network:"bsc", contract_address: '', symbol: 'daoDEGEN' ,deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' }, // Update this later
    // { name: 'basic', network:"bsc", contract_address: '', symbol: 'daoSAFU', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    // { name: 'advance', network:"ethereum", contract_address: '', symbol: 'daoTAS', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
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

db.daomine_pool.insertMany([
    {
        name: 'vipDVD',
        label: 'vipDVD LP',
        contract_address: '0x4bb18f377a9d2dd62a6af7d78f6e7673e0e0f648', // TODO: Update to mainnet address
        status: 'A',
        pid: '0',
        category: 'Basic',
        tokenId: 'xDVD', 
        symbol: 'xDVD',
        startBlock: 26524610,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
]);

// Testnet Contracts
db.vault_categories.insertMany([
    { name: 'expert', network:"ethereum", contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43', symbol: 'daoCDV', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'degen', network:"ethereum", contract_address: '0xf03fa8553379d872b4e2bafbc679409fb82604c2', symbol: 'daoELO', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' }, 
    { name: 'degen', network:"ethereum", contract_address: '0x5c304a6cb105e1bff9805ca5cf072f1d2c3beac5', symbol: 'daoCUB', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' }, 
    { name: 'advance', network:"ethereum", contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1', symbol: 'daoSTO', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'advance', network:"ethereum", contract_address: '0x4f0bc6bd6beb231087781336bacd5613527ac63c', symbol: 'daoMPT', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'expert', network:"ethereum", contract_address: '0xb2953c89615069fa6c14f3db3a09b7ecc077f533', symbol: 'daoMVF', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'expert', network:"ethereum", contract_address: '0xc5719b5e85c30eb6a49d3c1b8058ae2435146c88', symbol: 'daoCDV2', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'advance', network:"ethereum", contract_address: '0xb8e43526d2fee347f88e690ee86d047895472d04', symbol: 'daoSTO2', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'degen', network:"bsc", contract_address: '0x56f2005c3fec21dd3c21899fbceb1aae5b4bc5da', symbol: 'daoDEGEN' ,deposit: true, withdraw: true, depositMessage: '', withdrawMessage: '' },
    { name: 'basic', network:"bsc", contract_address: '0x81390703430015a751f967694d5ccb8745fda254', symbol: 'daoSAFU', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    { name: 'advance', network:"ethereum", contract_address: '0xb72b89fa6d222973379cbd9c5c88768e3a050aed', symbol: 'daoTAS', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
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

db.daomine_pool.insertMany([
    {
        name: 'vipDVD',
        label: 'vipDVD LP',
        contract_address: '0x4bb18f377a9d2dd62a6af7d78f6e7673e0e0f648',
        status: 'A',
        pid: '0',
        category: 'Basic',
        tokenId: 'xDVD', 
        symbol: 'xDVD',
        startBlock: 26524610,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43',
        status: 'A',
        pid: '2',
        category: 'Expert',
        tokenId: 'ethereum', 
        symbol: 'daoCDV',
        startBlock: 26670259,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'daoSTO',
        label: 'DAO FAANG Stonk LP',
        contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1',
        status: 'A',
        pid: '3',
        category: 'Advance',
        tokenId: 'tether', 
        symbol: 'daoSTO',
        startBlock: 26670264,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'ETH<->DVD',
        label: 'Uniswap DVD-ETH LP',
        contract_address: '0xf8098e1a33e5445322171c0acf785bd35def54fa',
        status: 'A',
        pid: '4',
        category: 'Basic',
        tokenId: 'ethDVD', 
        symbol: 'ethDVD',
        startBlock: 26678186,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
]);


db.special_event.insertMany([
    { startTime: 1622390400000, endTime: 1622444400000, threshold: 3000 },
    { startTime: 1622538000000, endTime: 1622541600000, threshold: 5000 },
    { startTime: 1622538900000, endTime: 1622540400000, threshold: 7000 },
    { startTime: 1622542200000, endTime: 1622543400000, threshold: 6000 },
    { startTime: 1622606400000, endTime: 1622610000000, threshold: 3000 }
]);

db.tokens.insertMany([
    { tokenId: 'huobi-token', symbol: 'HBTC'},
    { tokenId: 'ethereum', symbol: 'ETH'},
    { tokenId: 'wrapped-bitcoin', symbol: 'WBTC'},
    { tokenId: 'defipulse-index', symbol: 'DPI'},
    { tokenId: 'dai', symbol: 'DAI'},
    { tokenId: 'mirrored-facebook', symbol: 'MFB'},
    { tokenId: 'mirrored-amazon', symbol: 'MAMZN'},
    { tokenId: 'mirrored-apple', symbol: 'MAAPL'},
    { tokenId: 'mirrored-netflix', symbol: 'MNFLX'},
    { tokenId: 'mirrored-google', symbol: 'MGOOGL'},
    { tokenId: 'terrausd', symbol: 'UST'},
    { tokenId: 'rendoge', symbol: 'RENDOGE'},
    { tokenId: 'matic-network', symbol: 'MATIC'},
    { tokenId: 'aave', symbol: 'AAVE'},
    { tokenId: 'sushi', symbol: 'SUSHI'},
    { tokenId: 'axie-infinity', symbol: 'AXS'},
    { tokenId: 'injective-protocol', symbol: 'INJ'},
    { tokenId: 'alchemix', symbol: 'ALCX'},
    { tokenId: 'mirrored-tesla', symbol: 'MTSLA'},
    { tokenId: 'bitcoin', symbol: 'BTC'},
    { tokenId: 'tether', symbol: 'USDT'},
    { tokenId: 'aave-dai', symbol: 'ADAI'},
    { tokenId: 'aave-usdc', symbol: 'AUSDC'},
    { tokenId: 'aave-usdt', symbol: 'AUSDT'},
    { tokenId: 'tether', symbol: 'USDT'},
    { tokenId: 'smooth-love-potion', symbol: 'SLP'},
    { tokenId: 'illuvium', symbol: 'ILV'},
    { tokenId: 'aavegotchi', symbol: 'GHST'},
    { tokenId: 'revv', symbol: 'REVV'},
    { tokenId: 'metaverse-index', symbol: 'MVI'},
    { tokenId: 'mirrored-microsoft', symbol: 'MMSFT'}, // TODO:Remember to add this for DaoStonks
    { tokenId: 'mirrored-twitter', symbol: 'MTWTR'}, // TODO:Remember to add this for DaoStonks
]);

db.airdrop.insertMany([
    {address: "", amount: "", signature: ""}
]);

db.airdrop_event.insertMany([
    {address: "0xbcf5cef54bca1b0591ee487bac567e7182bf8c7d", active: true}
]);
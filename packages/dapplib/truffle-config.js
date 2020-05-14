require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million prosper hunt glimpse flower test'; 
let testAccounts = [
"0x395dc8879794ddcca501f3ac4311e74cdba4efb4cd5048b7739aaedaf696cdc0",
"0xbbad431010d912b52a2af861a5f604ce4594517ebd8d96f019eae3bd795d85f6",
"0x1a25b2aab7b0ef6486148dd58b7bd3df35b8eccd007f3eb22c065cd5d0e8835e",
"0x0659c407b2ab6e3568b1cf58241446a7f5252e4e78ba468accb923fdd633e816",
"0xf62df88481bc0bc1b41e9ac8ec1caa9806f1485c08d884764563f3de076c8129",
"0x8e71f7a16bc27d89e77fa1ab4a15c810bafbc4eaad3b69bf4ece4c8dbfaae991",
"0x6c3464fc2373b5124b02f9e9365c8b06e04acb840738a4d8968d6497011dc070",
"0x5da7be59b1af7b2f79182955ac8bb4e6d2655373a92c08b37e43bcf779b7da13",
"0x3e7bb73ea246f55d6e2cab50b1e81b0bc5cddf962bf47c002caa446717c6f35b",
"0x6f6b03c0b254f3aca1b20fd17d0150f645cbf71ed18f77d51f9b050df99f5b48"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

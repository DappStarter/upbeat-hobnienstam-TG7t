require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift reflect rural evidence harvest clock orphan trust'; 
let testAccounts = [
"0x0131397399a08fb1ba8364389938688efc982898a045e993ad44d305b1b6f43e",
"0xe03797d9ee469dd09a2aaaba03064777c01491ba150b625e5c3f25471e2b5234",
"0xd45b93d65277385d57df2477ceb5d74c8bef981ca9df58c08afecfdea1118e65",
"0xd492c928759eed6ffdc2ccbed5f109626648fcf3946e83956923f2bcb915d276",
"0xc8fc0d39a0685e184e8c818a695e211dedc3f9ca25d059f68cbedbd1d1f69b15",
"0xde308caee05d56d1fca76f754221038367691e9e67801ec074baf138e5dbea7d",
"0x1d5f9a63122c6eeed09c38811f30b0b4f55e26f9f98a97319a6ef6f0c8f66a1c",
"0x421ba99da888dcfec5f5ec501616510c012d2d9b772806fea34ec5c03527afbd",
"0x7b4cb7d40b3bd54f57d2e027967a7c5ce0061396156adbbcbf8a05926cd7089d",
"0xbc8f4186af64409053eeacd8692cde594f5a139de1de9742a3c67d6331bd916a"
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
            version: '^0.8.0'
        }
    }
};


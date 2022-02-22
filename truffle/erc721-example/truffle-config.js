const HDWalletProvider = require('@truffle/hdwallet-provider')
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker')
const utils = require('web3-utils')
const MNEMONIC = process.env.MNEMONIC
const startIndex = 0
const numberOfAddresses = 3
let hdWalletProvider

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    aurora_testnet: {
      provider: function() {
        return new HDWalletProvider({
          mnemonic: MNEMONIC,
          providerOrUrl: 'https://testnet.aurora.dev',
          numberOfAddresses
        });
      },
      network_id: '1313161555',
      gas: 10000000,
      from: '0x23a824dd17d6571e1badd25a6247c685d6802985',
      deploymentPollingInterval: 8000,
      timeoutBlocks: 500,
      confirmations: 10,
    },
    ropsten: {
      provider: () => setupWallet(`https://ropsten.infura.io/v3/${process.env.INFURA_TOKEN}`),
      network_id: 0x3,
      from: '0x6A33382de9f73B846878a57500d055B981229ac4',
      gas: 3 * 1000000,
      gasPrice: utils.toWei('8', 'gwei')
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    },
  },
};

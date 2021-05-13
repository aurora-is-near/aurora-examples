const HDWalletProvider = require('truffle-hdwallet-provider')
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker')
// export MNEMONIC = ''
const MNEMONIC = process.env.MNEMONIC || process.env.NMEMORIC
const hdWalletStartIndex = 0
const hdWalletAccounts = 1
let hdWalletProvider

const setupWallet = (
    url
) => {
    if (!hdWalletProvider) {
        hdWalletProvider = new HDWalletProvider(
            MNEMONIC,
            url,
            hdWalletStartIndex,
            hdWalletAccounts)
        hdWalletProvider.engine.addProvider(new NonceTrackerSubprovider())
    }
    return hdWalletProvider
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    aurora: {
      provider: () => setupWallet('https://rpc.testnet.aurora.dev:8545'),
      network_id: 0x4e454153, // 1313161555
      gas: 10000000,
      from: '0x6A33382de9f73B846878a57500d055B981229ac4'
    }
  }
};

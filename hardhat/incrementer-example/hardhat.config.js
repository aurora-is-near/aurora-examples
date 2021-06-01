require("@nomiclabs/hardhat-waffle");

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

task('get-counter', 'Returns the current counter for the provided Incrementer')
    .addParam('incrementerAddress', 'Eth address of Incrementer contract')
    .setAction(async taskArgs => {
        const { getCounter } = require('./scripts/utils');
        await getCounter(hre.ethers.provider, taskArgs.incrementerAddress);
    });

task('increment-counter', 'Increments the counter for the provided Incrementer')
    .addParam('incrementerAddress', 'Eth address of Incrementer contract')
    .setAction(async taskArgs => {
        const { incrementCounter } = require('./scripts/utils');
        await incrementCounter(hre.ethers.provider, taskArgs.incrementerAddress);
    });

module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    },
    develop_aurora: {
      url: 'https://develop.rpc.testnet.aurora.dev:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    },
    ropsten: {
      url: 'https://rpc.testnet.aurora.dev:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    }
  }
};


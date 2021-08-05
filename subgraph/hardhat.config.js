require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    },
    local: {
      url: 'http://localhost:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 3,
      live: true,
      gasPrice: 50000000000,
      gasMultiplier: 2,
    },
  },
  abiExporter: {
    path: './abis',
    clear: true,
    flat: true,
    only: [':CovidVaccineToken$'],
    spacing: 2
  }
};

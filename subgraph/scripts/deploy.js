require('dotenv').config();
const hre = require("hardhat");

async function main() {
    const provider = hre.ethers.provider;
    const deployerWallet = new hre.ethers.Wallet(process.env.AURORA_PRIVATE_KEY, provider);

    console.log(
        "Deploying contracts with the account:",
        deployerWallet.address
    );

    console.log(
        "Account balance:",
        (await deployerWallet.getBalance()).toString()
    );

    const CovidVaccineToken = await hre.ethers.getContractFactory("CovidVaccineToken");
    const covidVaccineToken = await CovidVaccineToken
        .connect(deployerWallet)
        .deploy();
    await covidVaccineToken.deployed();
    console.log("CovidVaccineToken deployed to:", covidVaccineToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
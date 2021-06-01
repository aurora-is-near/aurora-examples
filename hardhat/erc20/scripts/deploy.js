const hre = require("hardhat");
async function main() {
    const provider = hre.ethers.provider;
    const deployer = new hre.ethers.Wallet(process.env.AURORA_PRIVATE_KEY, provider);
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );  
    const Token = await ethers.getContractFactory("WatermelonToken");
    const token = await Token.deploy(100000);
  
    console.log("Token address:", token.address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});
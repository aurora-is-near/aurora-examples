require("@nomiclabs/hardhat-web3");

task("transfer", "ERC20 transfer")
.addParam("token", "Token address")
.addParam("spender", "Spender address")
.addParam("amount", "Token amount")
.setAction(async function ({ token, spender, amount }, { ethers: { getSigners } }, runSuper) {
  const watermelonToken = await ethers.getContractFactory("WatermelonToken")
  const watermelon = watermelonToken.attach(token)
  const [minter] = await ethers.getSigners();
//   await (await watermelon.connect(minter).transfer(spender, amount)).wait()
  const totalSupply = (await (await watermelon.connect(minter)).totalSupply()).toNumber()
  console.log(`Total Supply is ${totalSupply}`);
//   console.log(`${minter.address} has transferred ${amount} to ${spender}`);
});

module.exports = {};
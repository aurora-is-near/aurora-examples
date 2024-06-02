const fs = require('fs');

task("mint", "Mints ERC20 tokens")
    .addParam("token", "Contract address")
    .addParam("to", "Receiver address")
    .setAction(async function ({ token, to }, { ethers: { getSigners } }, runSuper) {
        const provider = ethers.provider;
        const minter = new hre.ethers.Wallet(process.env.AURORA_PRIVATE_KEY, provider);
        console.log('Minter address: ', minter.address);
        const jsonFile = "./artifacts/contracts/CovidVaccineToken.sol/CovidVaccineToken.json";
        const parsed= JSON.parse(fs.readFileSync(jsonFile));
        const abi = parsed.abi;
        const covidVaccineToken = new ethers.Contract(token, abi);
        const tx = await covidVaccineToken.connect(minter).mint(to);
        const { events } = await tx.wait();
        console.log(
            'Successfully minted the token ID: ', 
            events[0].args.tokenId.toNumber(), 
            ' for ', 
            events[0].args.to
        );
    });

module.exports = {};
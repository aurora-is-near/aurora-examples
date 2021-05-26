var WatermelonToken = artifacts.require("WatermelonToken");
const BN = require('bignumber.js')

module.exports = function(deployer) {
    deployer.deploy(WatermelonToken, BN(1000000000000000000000));
};

var WatermelonToken = artifacts.require("WatermelonToken");

module.exports = function(deployer) {
    deployer.deploy(WatermelonToken, 1000000);
};
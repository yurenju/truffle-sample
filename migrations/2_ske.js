const SKEToken = artifacts.require("SKEToken");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SKEToken);
};

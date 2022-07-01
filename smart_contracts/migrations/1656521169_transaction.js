const Transaction = artifacts.require("Transaction");

module.exports = function(_deployer) {
  _deployer.deploy(Transaction);
};

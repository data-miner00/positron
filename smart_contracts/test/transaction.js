const Transaction = artifacts.require("Transaction");

contract("Transaction", () => {
  let transactionContract = null;

  before(async () => {
    transactionContract = await Transaction.deployed();
  });

  it("should start with zero transactionCount", async () => {
    const transactionCount = await transactionContract.getTransactionCount();
    assert(transactionCount.toNumber() === 0);
  });

  // Add more tests
});

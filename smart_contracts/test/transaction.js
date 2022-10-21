const Transaction = artifacts.require("Transaction");

contract("Transaction", (accounts) => {
  let transactionContract = null;
  let testAccountOne = accounts[0];
  let testAccountTwo = accounts[1];

  before(async () => {
    transactionContract = await Transaction.deployed();
  });

  describe("Contract initialization", () => {
    it("should start with zero transactionCount", async () => {
      const transactionCount = await transactionContract.getTransactionCount();
      assert(transactionCount.toNumber() === 0);
    });

    it("should start with zero transactions", async () => {
      const transactions = await transactionContract.getAllTransactions();
      assert.deepEqual(transactions, []);
    });

    it("should start with zero totalVolume", async () => {
      const volume = await transactionContract.getTotalVolume();
      assert.equal(volume.toNumber(), 0);
    });
  });

  describe("Adding entries to blockchain", () => {
    it("should add new entry to transactions list", async () => {
      const amount = "123";
      const message = "hello";
      const keyword = "hello";

      await transactionContract.commit(
        testAccountTwo,
        Number(amount),
        message,
        keyword,
        { from: testAccountOne }
      );
      const transactions = await transactionContract.getAllTransactions();
      const _transactions = transactions[0];

      assert.equal(transactions.length, 1);

      assert.equal(_transactions[0], testAccountOne);
      assert.equal(_transactions[1], testAccountTwo);
      assert.equal(_transactions[2], amount);
      assert.equal(_transactions[3], message);
      assert.isNotNull(_transactions[4]);
      assert.equal(_transactions[5], keyword);
    });
  });
});

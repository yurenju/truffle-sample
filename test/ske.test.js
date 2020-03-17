const SKEToken = artifacts.require("SKEToken");

contract("2nd SKEToken test", async accounts => {
  it("should put 10000 SKEToken in the first account", async () => {
    let instance = await SKEToken.deployed();
    let balance = await instance.balanceOf.call(accounts[0]);
    assert.equal(balance.valueOf(), 10000);
  });
});

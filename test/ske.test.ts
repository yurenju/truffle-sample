const SKEToken = artifacts.require("SKEToken");

contract("2nd SKEToken test", async ([deployer, user1]) => {
  it("should put 10000 SKEToken in the first account", async () => {
    const token = await SKEToken.new(10000, { from: deployer });
    let balance = await token.balanceOf(deployer);
    assert.equal(balance.valueOf(), 10000);
  });
});

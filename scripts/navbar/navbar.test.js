const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const adder = require("./navbar");

describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(1, 2).toBe(3));
  });
});

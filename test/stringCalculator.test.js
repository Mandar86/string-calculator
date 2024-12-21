const stringCalculator = require("../src/stringCalculator");

test("should return 0 for empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

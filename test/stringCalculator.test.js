const stringCalculator = require("../src/stringCalculator");

test("should return 0 for empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

test("should return the number when only one number is passed", () => {
  expect(stringCalculator("1")).toBe(1);
});

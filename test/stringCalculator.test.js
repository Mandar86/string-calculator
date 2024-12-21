const stringCalculator = require("../src/stringCalculator");

test("should return 0 for empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

test("should return the number when only one number is passed", () => {
  expect(stringCalculator("1")).toBe(1);
});

test("should return the sum when two number separated by comma are passed", () => {
  expect(stringCalculator("1,2")).toBe(3);
});

test("should handle multiple numbers separated by commas", () => {
  expect(stringCalculator("4,5,6,7,8")).toBe(4 + 5 + 6 + 7 + 8);
});

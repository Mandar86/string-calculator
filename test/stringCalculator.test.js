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

test("shold handle newline as delimiter", () => {
  expect(stringCalculator("4,5\n6,7")).toBe(4 + 5 + 6 + 7);
});

test("should handle custom delimiter defined in the following format '//[delimiter]\n[numbers…]'", () => {
  expect(stringCalculator("//;\n4;5;6;7")).toBe(4 + 5 + 6 + 7);
});

test("should throw an error for negative numbers", () => {
  expect(() => {
    stringCalculator("1,-2,-3,-4");
  }).toThrow("negative numbers not allowed -2,-3,-4");
});

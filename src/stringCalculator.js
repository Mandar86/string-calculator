function stringCalculator(inputString) {
  if (!inputString) {
    return 0;
  }
  const delimiter = /,|\n/; // regular expression to handle two delimiters either comma(,) or newline(\n)
  const numbersArray = inputString.split(delimiter).map(Number);

  return numbersArray.reduce((sum, curr) => sum + curr);
}

module.exports = stringCalculator;

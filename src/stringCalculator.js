function stringCalculator(inputString) {
  if (!inputString) {
    return 0;
  }
  const numbersArray = inputString.split(",").map(Number);

  return numbersArray.reduce((sum, curr) => sum + curr);
}

module.exports = stringCalculator;

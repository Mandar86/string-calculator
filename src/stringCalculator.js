function stringCalculator(inputString) {
  if (!inputString) {
    return 0;
  }
  return parseInt(inputString, 10);
}

module.exports = stringCalculator;

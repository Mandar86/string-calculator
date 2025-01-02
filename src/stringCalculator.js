function stringCalculator(inputString) {
  if (!inputString) return 0;

  let delimiter = /,|\n/;
  let isMultiply = false;
  if (inputString.startsWith("//")) {
    const partitions = inputString.split("\n");
    const separatedDelimiter = partitions[0].slice(2);

    if (separatedDelimiter === "*") {
      delimiter = /\*/;
      isMultiply = true;
    } else {
      delimiter = new RegExp(separatedDelimiter);
    }
    inputString = partitions[1];
  }
  const numbersArray = inputString.split(delimiter).map(Number);
  const negativeNumbers = numbersArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  if (isMultiply) {
    return numbersArray.reduce((mult, curr) => mult * curr);
  }
  return numbersArray.reduce((sum, curr) => sum + curr);
}

module.exports = stringCalculator;

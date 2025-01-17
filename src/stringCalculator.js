function stringCalculator(inputString) {
  if (!inputString) return 0;

  function adder(numsArray) {
    return numsArray.reduce((sum, num) => sum + num, 0);
  }

  function multiplier(numsArray) {
    return numsArray.reduce((sum, num) => sum * num, 1);
  }

  let delimiter = /,|\n/;
  let isMultiply = false;
  if (inputString.startsWith("//")) {
    const partitions = inputString.split("\n");

    delimiter = extractDelimiter(partitions);
    inputString = partitions[1];

    if (delimiter.source === "\\*") {
      isMultiply = true;
    }
  }
  const numbersArray = inputString.split(delimiter).map(Number);
  const negativeNumbers = numbersArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  if (isMultiply) {
    return multiplier(numbersArray);
  }
  return adder(numbersArray);

  function extractDelimiter(partitions) {
    const separatedDelimiter = partitions[0].slice(2);
    if (separatedDelimiter === "*") {
      delimiter = /\*/;
    } else {
      delimiter = new RegExp(separatedDelimiter);
    }
    return delimiter;
  }
}

module.exports = stringCalculator;

function stringCalculator(inputString) {
  if (!inputString) return 0;

  let delimiter = /,|\n/;

  if (inputString.startsWith("//")) {
    const partitions = inputString.split("\n");
    delimiter = new RegExp(partitions[0].slice(2));
    inputString = partitions[1];
  }
  const numbersArray = inputString.split(delimiter).map(Number);
  const negativeNumbers = numbersArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  return numbersArray.reduce((sum, curr) => sum + curr);
}

module.exports = stringCalculator;

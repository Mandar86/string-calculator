function stringCalculator(inputString) {
  if (!inputString) {
    return 0;
  }

  let delimiter = /,|\n/; // regular expression to handle two delimiters either comma(,) or newline(\n)

  if (inputString.startsWith("//")) {
    // Input Format:- //[delimiter]\n[numbers…]
    const partitions = inputString.split("\n");
    delimiter = new RegExp(partitions[0].slice(2)); // Regular expression of custom delimiter
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

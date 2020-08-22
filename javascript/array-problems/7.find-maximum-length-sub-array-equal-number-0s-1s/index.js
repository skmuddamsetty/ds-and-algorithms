/**
 * https://www.techiedelight.com/find-maximum-length-sub-array-equal-number-0s-1s/
 * @param {Array} A
 */
const findMaxLengthSubArrayWithEqualZerosAndOnes = (A) => {
  let map = { 0: -1 };
  let index = 0;
  let currSum = 0;
  let maxLength = -1;
  let highIndex;
  let lowIndex;
  for (let num of A) {
    if (num === 0) {
      currSum = currSum - 1;
    } else {
      currSum = currSum + 1;
    }
    if (map[currSum] !== undefined && maxLength < index - map[currSum]) {
      maxLength = index - map[currSum];
      highIndex = index;
      lowIndex = map[currSum] + 1;
    }
    if (map[currSum] === undefined) {
      map[currSum] = index;
    }
    index++;
  }
  console.log(
    `Max length sub array with equal number of 1\'s and 0\'s [${lowIndex},${highIndex}] ${maxLength}`
  );
  return maxLength;
};

module.exports = { findMaxLengthSubArrayWithEqualZerosAndOnes };

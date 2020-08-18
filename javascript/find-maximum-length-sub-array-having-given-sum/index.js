/**
 * https://www.techiedelight.com/find-maximum-length-sub-array-having-given-sum/
 * @param {Array} A
 * @param {Number} targetSum
 */
const findMaxLengthSubArrayWithGivenSum = (A, targetSum) => {
  let index = 0;
  let map = {};
  let currSum = 0;
  let lengthOfLongestArray = -1;
  for (let num of A) {
    currSum += num;
    if (
      map[currSum - targetSum] !== undefined &&
      lengthOfLongestArray < index - map[currSum - targetSum]
    ) {
      lengthOfLongestArray = index - map[currSum - targetSum];
      console.log(`[${map[currSum - targetSum] + 1},${index}]`);
    }
    if (map[currSum] === undefined) {
      map[currSum] = index;
    }
    index++;
  }
  console.log(
    `Length of Longest SubArray with Given Sum ${lengthOfLongestArray}`
  );
};

findMaxLengthSubArrayWithGivenSum([1, 4, 3, 2, 1, 1], 7);
findMaxLengthSubArrayWithGivenSum([5, 6, -5, 5, 3, 5, 3, -2, 0], 8);

module.exports = { findMaxLengthSubArrayWithGivenSum };

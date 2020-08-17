/**
 * https://www.techiedelight.com/check-subarray-with-0-sum-exists-not/
 * @param {Array} A
 */
const zeroSumSubArray = (A) => {
  let map = { 0: -1 };
  map[A[0]] = 0;
  let currIndex = 1;
  let currSum = A[0];
  while (currIndex < A.length) {
    currSum = currSum + A[currIndex];
    if (map[currSum] !== undefined) {
      console.log(map[currSum] + 1, currIndex);
    }
    map[currSum] = currIndex;
    currIndex++;
  }
};

zeroSumSubArray([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);

module.exports = zeroSumSubArray;

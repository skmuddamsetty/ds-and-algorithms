/**
 *
 * https://www.techiedelight.com/find-pair-with-given-sum-array/
 * @param {Number} a
 * @param {Number} b
 */
const findPairWithGivenSum = (A, sum) => {
  let map = {};
  let index = 0;
  let diff;
  for (let num of A) {
    diff = sum - num;
    if (map[diff] !== undefined) {
      console.log(`Pair found at: ${map[diff]}, ${index}`);
      return;
    }
    map[num] = index;
    index++;
  }
};

module.exports = findPairWithGivenSum;

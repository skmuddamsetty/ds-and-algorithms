/**
 *
 * @param {Number} a
 * @param {Number} b
 */
const findPairWithGivenSum = (A, sum) => {
  let map = {};
  let index = 0;
  for (let num of A) {
    if (map[num] !== undefined) {
      console.log(`Pair found at: ${map[num]}, ${index}`);
      return;
    }
    map[sum - num] = index;
    index++;
  }
};

findPairWithGivenSum([8, 7, 2, 5, 3, 1], 10);
module.exports = findPairWithGivenSum;

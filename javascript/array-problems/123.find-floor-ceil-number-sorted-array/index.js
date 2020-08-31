/**
 *
 * @param {Array} A
 * @param {Number} num
 *
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */
const findFloorAndCeilOfNumberInArray = (A, num) => {
  let left = 0;
  let right = A.length - 1;
  let floor = -1;
  let ceil = -1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (num === A[mid]) {
      return [A[mid], A[mid]];
    } else if (num > A[mid]) {
      left = mid + 1;
      floor = A[mid];
    } else if (num < A[mid]) {
      right = mid - 1;
      ceil = A[mid];
    }
  }
  return [floor, ceil];
};

console.log(findFloorAndCeilOfNumberInArray([1, 4, 6, 8, 9], 5));
module.exports = { findFloorAndCeilOfNumberInArray };

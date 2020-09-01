/**
 *
 * @param {Array} A
 */
const countLastOccurence = (A, num) => {
  let left = 0;
  let right = A.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (num < A[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (A[left - 1] === num) {
    return left - 1;
  } else {
    return -1;
  }
};
module.exports = { countLastOccurence };

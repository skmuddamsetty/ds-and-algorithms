/**
 * https://www.techiedelight.com/sort-array-containing-0s-1s-2s-dutch-national-flag-problem/
 *
 * @param {Array} A
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const sortThreeNumbers = (A) => {
  let start = 0;
  let mid = 0;
  let pivot = 1;
  let end = A.length - 1;
  while (mid <= end) {
    // current element is 0
    if (A[mid] < pivot) {
      swap(A, start, mid);
      start++;
      mid++;
    }
    // current element is 2
    else if (A[mid] > pivot) {
      swap(A, mid, end);
      end--;
    }
    // current element is 1
    else {
      mid++;
    }
  }
  return A;
};

const swap = (A, a, b) => {
  let temp = A[a];
  A[a] = A[b];
  A[b] = temp;
};

sortThreeNumbers([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]);

module.exports = { sortThreeNumbers };

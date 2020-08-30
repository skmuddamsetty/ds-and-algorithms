/**
 *
 * @param {Array} A
 */
const sortArrayUsingOneSwap = (A) => {
  let x = -1;
  let y = -1;
  let prev = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < prev) {
      if (x === -1) {
        x = i - 1;
        y = i;
      } else {
        y = i;
      }
    }
    prev = A[i];
  }
  swap(A, x, y);
  return A;
};

const swap = (A, a, b) => {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
};

sortArrayUsingOneSwap([3, 8, 6, 7, 5, 9]);

module.exports = { sortArrayUsingOneSwap };

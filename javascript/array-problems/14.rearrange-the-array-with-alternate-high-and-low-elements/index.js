/**
 * https://www.techiedelight.com/rearrange-the-array-with-alternate-high-and-low-elements/
 * @param {Array} A
 */
const rearrangeArray = (A) => {
  for (let i = 1; i < A.length - 1; i = i + 2) {
    if (A[i] < A[i - 1] || A[i] < A[i + 1]) {
      if (A[i - 1] > A[i + 1]) {
        swap(A, i, i - 1);
      } else {
        swap(A, i, i + 1);
      }
    }
  }
  return A;
};

const swap = (A, a, b) => {
  const temp = A[a];
  A[a] = A[b];
  A[b] = temp;
};

module.exports = { rearrangeArray };

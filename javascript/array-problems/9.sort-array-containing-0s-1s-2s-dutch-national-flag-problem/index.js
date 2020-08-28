const sortThreeNumbers = (A) => {
  let start = 0;
  let mid = 0;
  let pivot = 1;
  let end = A.length - 1;
  while (mid <= end) {
    if (A[mid] < pivot) {
      swap(A, start, mid);
      start++;
      mid++;
    } else if (A[mid] > pivot) {
      swap(A, mid, end);
      end--;
    } else {
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

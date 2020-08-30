const findLargestConsecutiveSubArray = (A) => {
  let set = new Set();
  let startIndex = 0;
  let endIndex = 0;
  let results = [];
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      if (set.size === max - min + 1) {
        results.push([startIndex, endIndex]);
      }
      set.clear();
      if (A[i - 1] !== A[i]) {
        set.add(A[i - 1]);
        set.add(A[i]);
        startIndex = i - 1;
        endIndex = i;
      } else {
        set.add(A[i]);
        startIndex = i;
        endIndex = i;
      }
    } else {
      min = Math.min(min, A[i]);
      max = Math.max(max, A[i]);
      set.add(A[i]);
      endIndex = i;
    }
  }
  return results;
};

findLargestConsecutiveSubArray([2, 0, 2, 1, 4, 3, 1, 0]);
findLargestConsecutiveSubArray([2, 0, 2, 1, 1, 3, 0, 2, 4, 1, 0]);

module.exports = { findLargestConsecutiveSubArray };

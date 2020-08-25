const { a } = require('../shared/tree');
/**
 * https://www.techiedelight.com/find-maximum-sum-root-to-leaf-path-binary-tree/
 * @param {Node} root
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const findMaximumSumAndSumPath = (root) => {
  let maximumSum = 0;
  let results = [];
  let arr;
  helper(root, arr, results);
  results.forEach((res) => {
    let sum = res.reduce((prevValue, currValue) => prevValue + currValue);
    maximumSum = Math.max(maximumSum, sum);
  });
  return maximumSum;
};

const helper = (root, arr = [], results = []) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    arr.push(root.key);
    results.push([...arr]);
    arr.pop();
    return;
  }
  arr.push(root.key);
  helper(root.left, arr, results);
  helper(root.right, arr, results);
  arr.pop();
};

findMaximumSumAndSumPath(a);

module.exports = { findMaximumSumAndSumPath };

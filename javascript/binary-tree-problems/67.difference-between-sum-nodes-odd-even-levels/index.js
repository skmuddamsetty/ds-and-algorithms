/**
 * https://www.techiedelight.com/difference-between-sum-nodes-odd-even-levels/
 * @param {Node} root
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */
const findDifferenceBetweenEvenAndOddNodes = (root, map = {}) => {
  helper(root, map);
  return map[0] - map[1];
};

const helper = (root, map, level = 0) => {
  // base case
  if (!root) {
    return 0;
  }
  // checking if level is even
  if ((level & 1) === 0) {
    map[0] = (map[0] || 0) + root.key;
  } else {
    // checking if level is odd
    map[1] = (map[1] || 0) + root.key;
  }
  helper(root.left, map, level + 1);
  helper(root.right, map, level + 1);
};

module.exports = { findDifferenceBetweenEvenAndOddNodes };

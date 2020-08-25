/**
 * https://www.techiedelight.com/find-diagonal-sum-given-binary-tree/
 *
 * @param {Node} root
 * @param {Object} map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const findSumOfDiagonalNodes = (root, map = {}) => {
  helper(root, map);
  return Object.values(map);
};

/**
 *
 * @param {Node} root
 * @param {Object} map
 * @param {Number} diagonal
 */
const helper = (root, map, diagonal = 0) => {
  if (!root) {
    return;
  }
  map[diagonal] = (map[diagonal] || 0) + root.key;
  helper(root.left, map, diagonal + 1);
  helper(root.right, map, diagonal);
};

module.exports = { findSumOfDiagonalNodes };

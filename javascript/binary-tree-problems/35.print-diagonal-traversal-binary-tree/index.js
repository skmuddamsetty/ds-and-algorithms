/**
 * https://www.techiedelight.com/print-diagonal-traversal-binary-tree/
 * @param {Node} root
 * @param {Object} map
 *
 * Time Complexity: O(n)
 * Space Coplexity: O(n)
 */
const getDiagonalNodes = (root, map = {}) => {
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
  // if map contains the key push this element to this map with this key
  if (map[diagonal] !== undefined) {
    map[diagonal] = [...map[diagonal], root.key];
  }
  // if the diagonal is seen for the first time, then we put in the map
  else {
    map[diagonal] = [root.key];
  }
  helper(root.left, map, diagonal + 1);
  helper(root.right, map, diagonal);
};

module.exports = { getDiagonalNodes };

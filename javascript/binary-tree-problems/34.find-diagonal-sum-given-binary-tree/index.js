const findSumOfDiagonalNodes = (root, map = {}) => {
  helper(root, map);
  return Object.values(map);
};

const helper = (root, map, diagonal = 0) => {
  if (!root) {
    return;
  }
  map[diagonal] = (map[diagonal] || 0) + root.key;
  helper(root.left, map, diagonal + 1);
  helper(root.right, map, diagonal);
};

module.exports = { findSumOfDiagonalNodes };

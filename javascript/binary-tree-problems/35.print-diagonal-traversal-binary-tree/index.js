const getDiagonalNodes = (root, map = {}) => {
  helper(root, map);
  return Object.values(map);
};

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

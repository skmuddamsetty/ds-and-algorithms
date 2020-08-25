const { Node } = require('../shared/node');

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

let a = new Node(1);
a.left = new Node(2);
a.right = new Node(3);
a.left.left = new Node(4);
a.right.left = new Node(5);
a.right.right = new Node(6);
a.left.left.left = new Node(7);
a.right.left.left = new Node(8);
a.right.left.right = new Node(9);
a.right.right.right = new Node(10);
getDiagonalNodes(a);

module.exports = { getDiagonalNodes };

/**
 * https://www.techiedelight.com/find-maximum-width-given-binary-tree/
 * @param {Node} root
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const findMaxWidthOfBinaryTree_iterative = (root) => {
  if (!root) {
    return 0;
  }
  let queue = [root];
  let size;
  let node;
  let maxWidth = 0;
  while (queue.length > 0) {
    size = queue.length;
    maxWidth = Math.max(maxWidth, size);
    while (size > 0) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size--;
    }
  }
  return maxWidth;
};

/**
 *
 * @param {Node} root
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const findMaxWidthOfBinaryTree_recursive = (root) => {
  if (!root) {
    return;
  }
  let map = {};
  let maxWidth = 0;
  helper(root, map);
  Object.keys(map).forEach((key) => {
    maxWidth = Math.max(maxWidth, map[key]);
  });
  return maxWidth;
};

const helper = (root, map, level = 0) => {
  if (!root) {
    return;
  }
  if (map[level] !== undefined) {
    map[level] = map[level] + 1;
  } else {
    map[level] = 1;
  }
  helper(root.left, map, level + 1);
  helper(root.right, map, level + 1);
};

module.exports = {
  findMaxWidthOfBinaryTree_iterative,
  findMaxWidthOfBinaryTree_recursive,
};

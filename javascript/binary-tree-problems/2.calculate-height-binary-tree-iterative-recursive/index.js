/**
 * https://www.techiedelight.com/calculate-height-binary-tree-iterative-recursive/
 * @param {Node} root
 *
 * post-order traversal
 *
 * Time Complexity: O(n)
 * Space Complexity: o(n)
 */
const calculateHeightOfBinaryTree_recursive = (root) => {
  // base case
  if (!root) {
    return 0;
  }
  return (
    1 +
    Math.max(
      calculateHeightOfBinaryTree_recursive(root.left),
      calculateHeightOfBinaryTree_recursive(root.right)
    )
  );
};

/**
 *
 * @param {Node} root
 *
 * Level Order Traversal
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const calculateHeightOfBinaryTree_iterative = (root) => {
  if (!root) {
    return 0;
  }
  let maxheight = 0;
  let queue = [root];
  let size;
  let node;
  while (queue.length > 0) {
    maxheight++;
    size = queue.length;
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
  return maxheight;
};

module.exports = {
  calculateHeightOfBinaryTree_recursive,
  calculateHeightOfBinaryTree_iterative,
};

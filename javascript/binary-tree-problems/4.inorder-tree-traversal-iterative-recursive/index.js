const { a } = require('../shared/tree');
/**
 *
 * @param {Node} root
 */
const inorderTraversal_iterative = (root) => {
  if (!root) {
    return;
  }
  let results = [];
  let stack = [];
  let curr = root;
  while (stack.length > 0 || curr) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      results.push(curr.key);
      curr = curr.right;
    }
  }
  return results;
};

/**
 * Recursive
 * @param {Node} root
 * @param {Array} results
 */
const inorderTraversal_recursive = (root, results = []) => {
  if (!root) {
    return;
  }
  inorderTraversal_recursive(root.left, results);
  results.push(root.key);
  inorderTraversal_recursive(root.right, results);
  return results;
};

module.exports = { inorderTraversal_iterative, inorderTraversal_recursive };

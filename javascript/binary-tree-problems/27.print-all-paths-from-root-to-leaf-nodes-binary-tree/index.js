const { a } = require('../shared/tree');
/**
 * https://www.techiedelight.com/print-all-paths-from-root-to-leaf-nodes-binary-tree/
 * @param {Node} root
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) - extra space for the call stack where h is the height of the tree
 */
const printAllRootToLeafPaths = (root) => {
  helper(root);
};

const helper = (root, arr = []) => {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    arr.push(root.key);
    console.log(JSON.stringify(arr));
    arr.pop();
    return;
  }
  arr.push(root.key);
  helper(root.left, arr);
  helper(root.right, arr);
  arr.pop();
};

printAllRootToLeafPaths(a);

module.exports = { printAllRootToLeafPaths };

const { a } = require('../shared/tree');
/**
 *
 * @param {Node} root
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

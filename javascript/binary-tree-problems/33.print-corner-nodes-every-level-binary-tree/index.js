/**
 * https://www.techiedelight.com/print-corner-nodes-every-level-binary-tree/
 * @param {Node} root
 */
const { Node } = require('../shared/node');

const printCornerNodes = (root) => {
  if (!root) {
    return;
  }
  let queue = [root];
  let size;
  let node;
  let index = 0;
  let arr = [];
  while (queue.length) {
    size = queue.length;
    index = 0;
    arr = [];
    while (size > 0) {
      node = queue.shift();
      if (index === 0 || size === 1) {
        arr.push(node.key);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size--;
      index++;
    }
    console.log(arr.join(','));
  }
};

module.exports = { printCornerNodes };

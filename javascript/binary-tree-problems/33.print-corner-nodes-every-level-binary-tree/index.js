/**
 * https://www.techiedelight.com/print-corner-nodes-every-level-binary-tree/
 * @param {Node} root
 */
const { Node } = require('../shared/node');

const printCornerNodes_iterative = (root) => {
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

printCornerNodes_iterative(a);

module.exports = { printCornerNodes_iterative };

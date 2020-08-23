const { Node } = require('./node');
const {
  checkIfTwoBinaryTreesIdentical_iterative,
} = require('../1.check-if-two-binary-trees-are-identical-not-iterative-recursive/index');

let x;
let y;
beforeEach(() => {
  // prepare x tree
  x = new Node(1);
  x.left = new Node(2);
  x.right = new Node(3);
  // prepare y tree
  y = new Node(1);
  y.left = new Node(2);
  y.right = new Node(3);
});

it('checkIfTwoBinaryTreesIdentical_iterative:should tell if two given trees are identical or not', () => {
  checkIfTwoBinaryTreesIdentical_iterative(x, y);
});

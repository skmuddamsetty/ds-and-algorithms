const { Node } = require('./node');
const {
  checkIfTwoBinaryTreesIdentical_iterative,
} = require('../1.check-if-two-binary-trees-are-identical-not-iterative-recursive/index');

let x;
let y;
let z;
beforeEach(() => {
  // prepare x tree
  /* Construct below Tree
             15
            /  \
           /    \
          10     20
         / \     / \
        8   12  16  25
  */
  x = new Node(15);
  x.left = new Node(10);
  x.right = new Node(20);
  x.left.left = new Node(8);
  x.left.right = new Node(12);
  x.right.left = new Node(16);
  x.right.right = new Node(25);
  // prepare y tree
  /* Construct below Tree
             15
            /  \
           /    \
          10     20
         / \     / \
        8   12  16  25
                      \
                       \
                       32
  */
  y = new Node(15);
  y.left = new Node(10);
  y.right = new Node(20);
  y.left.left = new Node(8);
  y.left.right = new Node(12);
  y.right.left = new Node(16);
  y.right.right = new Node(25);
  y.right.right.right = new Node(32);
  // prepare z tree
  /* Construct below Tree
              1
            /  \
           /    \
          2      3
         / \      \
        4   5      6
                  / \
                 7   8
  */
  z = new Node(1);
  z.left = new Node(2);
  z.right = new Node(3);
  z.left.right = new Node(4);
  z.right.left = new Node(5);
  z.right.right = new Node(6);
  z.right.left.left = new Node(7);
  z.right.left.right = new Node(8);
});

it('checkIfTwoBinaryTreesIdentical_iterative:should tell if two given trees are identical or not', () => {
  expect(checkIfTwoBinaryTreesIdentical_iterative(x, y)).toBe(true);
});

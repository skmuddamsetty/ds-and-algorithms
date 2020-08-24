const { Node } = require('./node');
const {
  checkIfTwoBinaryTreesIdentical_iterative,
  checkIfTwoBinaryTreesIdentical_recursive,
} = require('../1.check-if-two-binary-trees-are-identical-not-iterative-recursive/index');
const {
  printCornerNodes_iterative,
} = require('../33.print-corner-nodes-every-level-binary-tree/index');

let x;
let y;
let z;
let a;
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
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
        8   12  16  26
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
  y.right.right = new Node(26);
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
  // prepare a tree
  /* Construct below tree
		             1
		            / \
		           /   \
		          2     3
		         /     / \
		        /     /   \
		       4     5     6
		      /     / \     \
		     /     /   \     \
		    7     8     9     10
	*/
  a = new Node(1);
  a.left = new Node(2);
  a.right = new Node(3);
  a.left.left = new Node(4);
  a.right.left = new Node(5);
  a.right.right = new Node(6);
  a.left.left.left = new Node(7);
  a.right.left.left = new Node(8);
  a.right.left.right = new Node(9);
  a.right.right.right = new Node(10);
});

it('checkIfTwoBinaryTreesIdentical_iterative:should tell if two given trees are identical or not', () => {
  expect(checkIfTwoBinaryTreesIdentical_iterative(x, x)).toBe(true);
  expect(checkIfTwoBinaryTreesIdentical_iterative(x, y)).toBe(false);
  expect(checkIfTwoBinaryTreesIdentical_iterative(x, z)).toBe(false);
});

it('checkIfTwoBinaryTreesIdentical_recursive:should tell if two given trees are identical or not', () => {
  expect(checkIfTwoBinaryTreesIdentical_recursive(x, x)).toBe(true);
  expect(checkIfTwoBinaryTreesIdentical_recursive(x, y)).toBe(false);
  expect(checkIfTwoBinaryTreesIdentical_recursive(x, z)).toBe(false);
});

/**
 * printCornerNodes_iterative
 */
it('printCornerNodes_iterative: should print all corner nodes of given tree', () => {
  printCornerNodes_iterative(a);
  expect(console.log.mock.calls[0][0]).toEqual('1');
  expect(console.log.mock.calls[1][0]).toEqual(2, 3);
  expect(console.log.mock.calls[2][0]).toEqual(4, 6);
  expect(console.log.mock.calls[3][0]).toEqual(7, 10);
});

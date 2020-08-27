const { Node } = require('./node');
const {
  checkIfTwoBinaryTreesIdentical_iterative,
  checkIfTwoBinaryTreesIdentical_recursive,
} = require('../1.check-if-two-binary-trees-are-identical-not-iterative-recursive/index');
const {
  printCornerNodes,
} = require('../33.print-corner-nodes-every-level-binary-tree/index');
const {
  findSumOfDiagonalNodes,
} = require('../34.find-diagonal-sum-given-binary-tree/index');
const {
  getDiagonalNodes,
} = require('../35.print-diagonal-traversal-binary-tree/index');

const {
  findDifferenceBetweenEvenAndOddNodes,
} = require('../67.difference-between-sum-nodes-odd-even-levels/index');

const {
  findMaxWidthOfBinaryTree_iterative,
  findMaxWidthOfBinaryTree_recursive,
} = require('../42.find-maximum-width-given-binary-tree/index');

const {
  printAllRootToLeafPaths,
} = require('../27.print-all-paths-from-root-to-leaf-nodes-binary-tree/index');

const {
  findMaximumSumAndSumPath,
} = require('../40.find-maximum-sum-root-to-leaf-path-binary-tree/index');

const {
  calculateHeightOfBinaryTree_recursive,
  calculateHeightOfBinaryTree_iterative,
} = require('../2.calculate-height-binary-tree-iterative-recursive/index');

const {
  inorderTraversal_iterative,
  inorderTraversal_recursive,
} = require('../4.inorder-tree-traversal-iterative-recursive/index');

describe('Unit tests for Binary Tree', () => {
  const log = console.log;
  let x;
  let y;
  let z;
  let a;
  let b;
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
    // prepare b tree
    /* Construct below tree
		          1
		        /   \
		       /     \
		      2       3
		     /      /  \
		    /      /    \
		   4      5      6
		         / \
		        /   \
		       7     8
		 */

    b = new Node(1);
    b.left = new Node(2);
    b.right = new Node(3);
    b.left.left = new Node(4);
    b.right.left = new Node(5);
    b.right.right = new Node(6);
    b.right.left.left = new Node(7);
    b.right.left.right = new Node(8);
  });
  afterEach(() => {
    console.log = log;
  });

  /********************TEST CASES START********************/
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
   * printCornerNodes
   */
  it('printCornerNodes: should print all corner nodes of given tree', () => {
    printCornerNodes(a);
    expect(console.log.mock.calls[0][0]).toEqual('1');
    expect(console.log.mock.calls[1][0]).toEqual('2,3');
    expect(console.log.mock.calls[2][0]).toEqual('4,6');
    expect(console.log.mock.calls[3][0]).toEqual('7,10');
  });

  /**
   * findSumOfDiagonalNodes
   */

  it('findSumOfDiagonalNodes: should print sum of diagonal nodes', () => {
    expect(findSumOfDiagonalNodes(a)).toEqual([20, 16, 12, 7]);
  });

  /**
   * findSumOfDiagonalNodes
   */
  it('findSumOfDiagonalNodes: should return an array of all diagonal nodes', () => {
    expect(getDiagonalNodes(a)).toEqual([
      [1, 3, 6, 10],
      [2, 5, 9],
      [4, 8],
      [7],
    ]);
  });

  /**
   * findDifferenceBetweenEvenAndOddNodes
   */
  it('findDifferenceBetweenEvenAndOddNodes: should return the difference between odd and even level nodes', () => {
    expect(findDifferenceBetweenEvenAndOddNodes(b)).toBe(-4);
  });

  /**
   * findMaxWidthOfBinaryTree_iterative
   */

  it('findMaxWidthOfBinaryTree_iterative: should return the maximum width of a binary tree', () => {
    expect(findMaxWidthOfBinaryTree_iterative(b)).toBe(3);
    expect(findMaxWidthOfBinaryTree_iterative(y)).toBe(4);
  });

  it('findMaxWidthOfBinaryTree_recursive: should return the maximum width of a binary tree', () => {
    expect(findMaxWidthOfBinaryTree_recursive(b)).toBe(3);
    expect(findMaxWidthOfBinaryTree_recursive(y)).toBe(4);
  });

  /**
   * printAllRootToLeafPaths
   */
  it('printAllRootToLeafPaths:should print all root to leaf paths', () => {
    printAllRootToLeafPaths(a);
    expect(console.log.mock.calls[0][0]).toEqual('[1,2,4,7]');
    expect(console.log.mock.calls[1][0]).toEqual('[1,3,5,8]');
    expect(console.log.mock.calls[2][0]).toEqual('[1,3,5,9]');
    expect(console.log.mock.calls[3][0]).toEqual('[1,3,6,10]');
  });

  /**
   * findMaximumSumAndSumPath
   */
  it('findMaximumSumAndSumPath: should return maximum sum path from root to leaf', () => {
    expect(findMaximumSumAndSumPath(a)).toBe(20);
  });

  /**
   * calculateHeightOfBinaryTree_recursive
   */
  it('calculateHeightOfBinaryTree_recursive: Calculate height of binary tree', () => {
    expect(calculateHeightOfBinaryTree_recursive(a)).toBe(4);
    expect(calculateHeightOfBinaryTree_iterative(x)).toBe(3);
  });

  /**
   * calculateHeightOfBinaryTree_iterative
   */
  it('calculateHeightOfBinaryTree_iterative: Calculate height of binary tree', () => {
    expect(calculateHeightOfBinaryTree_iterative(a)).toBe(4);
    expect(calculateHeightOfBinaryTree_iterative(x)).toBe(3);
  });

  /**
   * inorderTraversal_iterative
   */

  it('inorderTraversal_iterative: should return an array with elements in inorder traversal', () => {
    expect(inorderTraversal_iterative(b)).toEqual([4, 2, 1, 7, 5, 8, 3, 6]);
  });

  /**
   * inorderTraversal_recursive
   */
  it('inorderTraversal_recursive: should return an array with elements in inorder traversal', () => {
    expect(inorderTraversal_recursive(b)).toEqual([4, 2, 1, 7, 5, 8, 3, 6]);
  });
});

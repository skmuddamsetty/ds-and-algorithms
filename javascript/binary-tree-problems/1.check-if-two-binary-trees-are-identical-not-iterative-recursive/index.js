/**
 * https://www.techiedelight.com/check-if-two-binary-trees-are-identical-not-iterative-recursive/
 * @param {Node} x
 * @param {Node} y
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const checkIfTwoBinaryTreesIdentical_iterative = (x = null, y = null) => {
  // if both nodes are null return true
  if (!x && !y) {
    return true;
  }
  // if either of the nodes are not null return false
  if (!x || !y) {
    return false;
  }
  let queue1 = [x];
  let queue2 = [y];
  let node1;
  let node2;
  let size;
  while (queue1.length > 0 && queue2.length > 0) {
    size = queue1.length;
    while (size > 0) {
      // using shift to get the left most element in the array and to remove it from the array
      node1 = queue1.shift();
      node2 = queue2.shift();
      // if the key of the both nodes do not match return false
      if (node1.key !== node2.key) {
        return false;
      }
      // push to the queues if both nodes have left nodes
      if (node1.left && node2.left) {
        queue1.push(node1.left);
        queue2.push(node2.left);
      }
      // if either of the nodes have a left node, then this trees do not have identical structure
      // therefore return false
      else if (node1.left || node2.left) {
        return false;
      }
      // push to the queues if both nodes have right nodes
      if (node1.right && node2.right) {
        queue1.push(node1.right);
        queue2.push(node2.right);
      }
      // if either of the nodes have a right node, then this trees do not have identical structure
      // therefore return false
      else if (node1.right || node2.right) {
        return false;
      }
      size--;
    }
  }
  // if the program reaches this point, then all the nodes have been processed and all nodes are equal
  return true;
};

/**
 *
 * @param {Node} x
 * @param {Node} y
 */
const checkIfTwoBinaryTreesIdentical_recursive = (x, y) => {
  // if both nodes are null return true
  if (!x && !y) {
    return true;
  }
  // if either of the nodes are not null return false
  if (!x || !y) {
    return false;
  }
  return (
    x.key === y.key &&
    checkIfTwoBinaryTreesIdentical_recursive(x.left, y.left) &&
    checkIfTwoBinaryTreesIdentical_recursive(x.right, y.right)
  );
};
module.exports = {
  checkIfTwoBinaryTreesIdentical_iterative,
  checkIfTwoBinaryTreesIdentical_recursive,
};

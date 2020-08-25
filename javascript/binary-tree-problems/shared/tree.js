const { Node } = require('./node');

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

module.exports = { a };

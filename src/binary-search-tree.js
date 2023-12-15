const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    this.roots = addWithIn(this.roots, data);

    function addWithIn(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithIn(node.left, data)
      } else {
        node.right = addWithIn(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    return searchWithIn(this.roots, data);

    function searchWithIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchWithIn(node.left, data) :
        searchWithIn(node.right, data);
    }
  }

  find(data) {
    return searchWithIn(this.roots, data);

    function searchWithIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchWithIn(node.left, data)
      } else if (data > node.data) {
        return searchWithIn(node.right, data);
      }
    }
  }

  remove(data) {
    this.roots = deleteNode(this.roots, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = deleteNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roots) {
      return;
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
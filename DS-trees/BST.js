/* DATA STRUCTURES: BINARY SEARCH TREE
 *
 * A Binary Search Tree (BST) is a non-linear data structure with the
 * following rules:
 *      - There is one node called the 'root' that has no parents.
 *      - Every node can have a maximum of two children.
 *      - The child on the left side of the node must have a value
 *          smaller than the parent's value.
 *      - The child on the right side of the node must have a value larger
 *          than the parent's value.
 *
 *      Also: A node with no children is called a Leaf.
 *
 *  Uses of Binary Search trees:
 *      - In Binary Heaps
 *      - In Hash trees
 *      - In Binary Space Partition in 3D videogames to know which object
 *          needs to be rendered
 *      - In AST (Abstract Syntax Trees) for compiling programming languages
 *      - In Routing Trees for Network Traffic
 *      - In Huffman Coding Trees for data compression (jpeg and mp3)
 *      - GGM Trees for cryptography, to generate pseudo-random numbers
 *
 * Binary Search trees are used when you need fast searching performance
 * and insertion performance.
 *  Average case:
 *      - Insertion:    O( log n )
 *      - Search:       O( log n )
 *
 *  Worst case, when the tree is completely unbalanced, it will be the same
 *  as a Singly Linked List:
 *      - Insertion:    O( n )
 *      - Search:       O( n )
 *
 */

class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    let currentNode = this.root
    if (!currentNode) {
      // the tree is empty
      this.root = newNode
      return this
    } else {
      while (true) {
        // loop until an insertion point is found
        if (newNode.value < currentNode.value) {
          // value < current
          if (!currentNode.left) {
            // if there is no left child node is attached there
            currentNode.left = newNode
            return this
          } else {
            // if there is a left child we move down to the
            // left child and start again
            currentNode = currentNode.left
          }
        } else if (newNode.value > currentNode.value) {
          // value > current
          if (!currentNode.right) {
            // if there is no right child node is attached there
            currentNode.right = newNode
          } else {
            // if there is a right child we move down to the
            // right child and start again
            currentNode = currentNode.right
          }
        } else {
          // if value === current we do not insert anything as we
          // do not want any copies: a value can be in the
          // tree only once
          return this
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      // BST is empty
      return false
    }
    if (val === this.root.value) {
      // The value we are looking for is the root
      return true
    }

    // Reference the node where the search should start
    if (val < this.root.value) {
      var currentNode = this.root.left
    } else {
      var currentNode = this.root.right
    }

    while (true) {
      if (!currentNode) {
        // End of tree reached
        return false
      }
      if (val === currentNode.value) {
        // Node found
        return true
      }
      if (val < currentNode.value) {
        // If value < current we move down to the left child
        currentNode = currentNode.left
      } else {
        // If value > current we move down to the right child
        currentNode = currentNode.right
      }
    }
  }
}

const tree = new BST()

console.log(tree.find(2))
tree.insert(15)
tree.insert(7)
tree.insert(5)
tree.insert(45)
tree.insert(10)
tree.insert(25)
console.log(tree.find(2))
console.log(tree.find(10))
console.log(tree.find(45))
console.log(tree.find(5))
console.log(tree.find(100))

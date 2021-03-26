/* DATA STRUCTURES: TREES, TREE TRAVERSAL
 *
 *  There are two main ways of traversing a tree:
 *      - Breadth First Search (BFS): we visit the tree one level at a time,
 *          starting from the root and going down level by level.
 *          - BFS uses a Queue DS:
 *              - it can be implemented with push() and shift()
 *      - Depth First Search (DFS): we visit the tree going down toward its
 *          leaves and then returning back toward the town, down again into
 *          another branch and so on. 
 *          Depth First Seaarch can be accomplished in three ways:
 *              - Pre-Order
 *              - In-Order
 *              - Post-Order
 *          - DFS uses a Stack DS:
 *              - it can be implemented with push() and pop()
 * 
 *  In which field are they used?
 *  Check the following link:
 *  https://levelup.gitconnected.com/how-to-traverse-a-tree-using-javascript-c9a79826e819
 * 
 * Something worth considering:
 *  - DFS:
 *      - there are fewer nodes to keep track of so we take up less space in
 *          memory.
 *      - if the BST only has one branch per node (which is something you
 *          DON'T WANT, it is comparable to a linked list) we only keep a 
 *          single node in memory.
 *  
 */

/* The BST and Node classes are taken from BST.js */
 
class Node {
  constructor(val) {
      this.value = val
      this.left = null
      this.right = null
  }
}

class BST {
  constructor(){
      this.root = null
  }

  insert(val) {
      const newNode = new Node(val)
      let currentNode = this.root
      if (!currentNode){
          // the tree is empty
          this.root = newNode
          return this  
      } else {
          while(true) {
              // infinite loop until an insertion point is found
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
                  // do not want any copies: any single value can be in the
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
      if (val < this.root.value){
          var currentNode = this.root.left
      } else {
          var currentNode = this.root.right
      }
      
      while(true) {
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

  /* BFS Breadth First Search */
  BFS() {
    let visited = [] // resulting array
    let queue = []
    let current = this.root // current node

    // If the Tree is empty return an empty array
    if (!current) return []

    queue.push(current)

    while (queue.length) {
      current = queue.shift()
      visited.push(current.value)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right) 
    }
    return visited
  }

  DFS_preOrder() {
    let visited = []
    let current = this.root

    if (!current) return []

    let traverse = (current) => {
      visited.push(current.value)
      if (current.left) traverse(current.left)
      if (current.right) traverse(current.right)
    }
    traverse(this.root)
    
    return visited
  }

  DFS_inOrder() {
    let visited = []
    let current = this.root

    if (!current) return []

    let traverse = (current) => {
      if (current.left) traverse(current.left)
      visited.push(current.value)
      if (current.right) traverse(current.right)
    }
    traverse(this.root)
    
    return visited
  }
  
  DFS_postOrder() {
    let visited = []
    let current = this.root

    if (!current) return []

    let traverse = (current) => {
      if (current.left) traverse(current.left)
      if (current.right) traverse(current.right)
      visited.push(current.value)
    }
    traverse(this.root)
    
    return visited
  }
}

/* TESTING */

const tree = new BST()

tree.insert(15)
tree.insert(7)
tree.insert(5)
tree.insert(45)
tree.insert(10)
tree.insert(25)

/* example BST:
 *                    15
 *                  /   \
 *               7      45
 *             /  \    /
 *            5   10  25
 * 
 * BFS() returns:            [ 15, 7, 45, 5, 10, 25 ]
 * DFS_preOrder() returns:   [ 15, 7, 5, 10, 45, 25 ]
 * DFS_inOrder() returns:    [ 5, 7, 10, 15, 25, 45 ]
 * DFS_postOrder() returns:  [ 5, 10, 7, 25, 45, 15 ]
 * 
 */
console.log('BFS: ')
console.log(tree.BFS())
console.log('DFS pre-Order: ')
console.log(tree.DFS_preOrder())
console.log('DFS in-Order: ')
console.log(tree.DFS_inOrder())
console.log('DFS post-Order: ')
console.log(tree.DFS_postOrder())
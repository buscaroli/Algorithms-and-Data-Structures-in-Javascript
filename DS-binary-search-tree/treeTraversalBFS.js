/* DATA STRUCTURES: BINARY SEARCH TREES
 * TREE TRAVERSAL: BREADTH FIRST SEARCH (BFS)
 * 
 * In order to to a BFS we need to use a queue (can be implemented with
 *  a node or with an array, doesn't really matter).
 * We start from the Root and move it to the queue, then:
 *  - we loop as long as there is something in the queue and
 *    - we move unqueue the first item from the queue into our list
 *    - we check if the current node has a left node and if so we move it
 *      into the queue
 *    - we check if the current node has a right node and if so we move it 
 *      into the queue
 *    - we do the same for every node of the tree
 *    - we return the list
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

  breathFirstSearch() {
    /* We are going to use an array for the queue.
     * - array.push() will enqueue the value
     * - array.shift() will dequeue the value (from the opposite side)
    */
    let myQueue = []
    let result = []
    let current = this.root

    if (!current) console.log('Tree is empty.')
    myQueue.push(current)

    while(myQueue.length) {
      current = myQueue.shift()
      result.push(current.value)

      if (current.left) myQueue.push(current.left)
      if (current.right) myQueue.push(current.right)

    }
    console.log('Breadth First Search returned: ' + result)
  }
}

// TESTING

let myTree = new BST()
myTree.insert(12)
myTree.insert(6)
myTree.insert(18)
myTree.insert(3)
myTree.insert(8)
myTree.insert(1)
myTree.insert(7)
myTree.insert(15)
myTree.insert(17)
myTree.insert(24)
/* The tree should look like this:
 *
 *           12
 *      6          18
 *   3     8   15      24
 * 1     7       17
 * 
 */
myTree.breathFirstSearch()

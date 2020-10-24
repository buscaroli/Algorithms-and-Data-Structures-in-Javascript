/* DATA STRUCTURES: STACK
 *
 * Implemented with a Singly Linked List (SLL)
 * 
 * Using Prototypal Inharitance Syntax.
 * 
 * LIFO: Last In First Out
 *       In real life: 
 *          - A pile of Plates, where you always pick the one on top.
 *          - A Browser's history, where every page is pushed to the stack
 *            and when hitting the back button is popped from it.
 *          - Used for Backtracking.
 *      
 *       
 *      Time Complexity of its methods:
 *          - Insertion:    O(1) ->  As we keep track of the tail and push
 *                                   at the tail.
 *   
 *          - Removal:      O(1) -> The actual removal of the node takes O(1).
 *          
 *          - Searching:    O(n) //  Not implemented in this file as already.
 *   
 *          - Access:       O(n) //  Implemented in the SLL as not typically
 *                               //  used with stacks.
 *          
 *          The Stack proritises Insertion and Removal.
 */

function Node(val) {
    this.val = val
    this.next = null
  }
  
  function Stack() {
    this.head = null
    this.size = 0
  }
  
  Stack.prototype.push = function(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      // empty stack
      this.head = newNode
      this.size++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.size++
    }
    return this
  } 
  
  Stack.prototype.pop = function() {
    let popped = null
    
    if (this.head) {
      popped = this.head.val
      this.head = this.head.next
      this.size--
    }
    return popped
  }
  
  Stack.prototype.print = function() {
    if (!this.head) {
      console.log('Empty Stack')
    } else {
      let currentNode = this.head
      while (currentNode) {
        console.log(currentNode.val)
        currentNode = currentNode.next
      }
    }
  }
  
  Stack.prototype.getSize = function() {
  console.log('size: ', this.size)}
  
  let myStack = new Stack()
  
  myStack.push(1)
  myStack.print()
  myStack.getSize()
  
  myStack.push(2)
  myStack.print()
  
  myStack.push(3)
  myStack.print()
  myStack.getSize()
  
  myStack.pop()
  myStack.print()
  
  myStack.pop()
  myStack.print()
  myStack.getSize()
  
  myStack.pop()
  myStack.print()
  
  myStack.pop()
  myStack.print()
  myStack.getSize()
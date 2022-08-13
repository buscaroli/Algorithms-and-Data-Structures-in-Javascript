/* DATA STRUCTURES: STACK
 *
 * Implemented with a Singly Linked List (SLL)
 *
 * Implemented using Classes.
 *
 * The Tail is not actually used but could come in handy for implementing
 * accessory methods.
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
 *          - Insertion:    O(1) ->  As we push at the head.
 *
 *          - Removal:      O(1) ->  As we remove at the head.
 *
 *          - Searching:    O(n) //  Not implemented in this file.
 *
 *          - Access:       O(n) //  Not implemented in the SLL as not typically
 *                               //  used with stacks.
 *
 *          The Stack proritises Insertion and Removal.
 */

class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this
    } else {
      let temp = this.head
      this.head = newNode
      this.head.next = temp
      // newNode.next = this.head
      // this.head = newNode
      this.size++
      return this
    }
  }

  pop() {
    if (!this.head) {
      return null
    } else {
      let popped = this.head
      if (this.head === this.tail) {
        this.tail = null
      }
      this.head = this.head.next
      this.size--
      return popped.value
    }
  }

  getSize() {
    return this.size
  }

  print() {
    let currentNode = this.head

    if (!this.head) {
      console.log('Empty Stack')
    } else {
      while (currentNode) {
        console.log(currentNode.value)
        currentNode = currentNode.next
      }
    }
  }
}

/* TESTING TESTING TESTING */

let myStack = new Stack()

myStack.print()

myStack.push(1)
myStack.print()

myStack.push(2)
myStack.print()

myStack.push(3)
myStack.print()

myStack.push(4)
myStack.print()
console.log('size: ', myStack.getSize())

myStack.push(5)
myStack.print()

myStack.pop()
myStack.print()

myStack.pop()
myStack.print()

myStack.pop()
myStack.print()

myStack.pop()
myStack.print()

myStack.pop()
myStack.print()

myStack.pop()
myStack.print()

myStack.push(1)
myStack.print()

myStack.push(2)
myStack.print()

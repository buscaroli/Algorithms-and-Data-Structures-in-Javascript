/* DATA STRUCTURES: QUEUE
 *
 * Implemented with a Singly Linked List (SLL)
 *
 *  FIFO: First In First Out
 *      In real life:
 *          - Queues at the shops (you wait in line until it's your turn).
 *          - The tasks managed by a printer.
 *
 *
 * Time Complexity of its methods:
 *          - Insertion:    O(1) ->  As we keep track of the tail and queue
 *                                   at the tail.
 *
 *          - Removal:      O(1) -> As we remove at the head.
 *
 *          - Searching:    O(n) //  Not implemented in this file.
 *
 *          - Access:       O(n) //  Implemented in the SLL as not typically
 *                               //  used with queues.
 *
 *          The Queue proritises Insertion and Removal.
 *
 *          NB Be sure to insert at the tail (as all you need is a pointer
 *              to the tail to have O(1)) and to remove from the head (as
 *              having the pointer to the head is all you need to remove with
 *              O(1)). Removing from the tail would require to traverse the
 *              whole queue (it would be different if working with Doubly
 *              Linked Lists).
 */

class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  print() {
    if (!this.head) {
      console.log('Empty Queue')
    } else {
      let currentNode = this.head
      while (currentNode) {
        console.log(currentNode.value)
        currentNode = currentNode.next
      }
    }
  }

  queue(val) {
    // will add at the tail of the Queue as I just need the reference
    // to the last element.
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this // to allow methods chaining
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.size++
      return this
    }
  }

  dequeue() {
    // will remove from the head of the queue as I always have a reference
    // for the first node. If removing from the tail I would need to
    // traverse the whole queue.
    if (!this.head) {
      return null
    } else {
      let dequeueed = this.head.value
      this.head = this.head.next
      this.size--
      return dequeueed
    }
  }
}

const myQueue = new Queue()

myQueue.print()
console.log('size: ', myQueue.getSize())

myQueue.queue(1)
myQueue.print()

myQueue.queue(2)
myQueue.print()

myQueue.queue(3)
myQueue.print()

myQueue.queue(4)
myQueue.print()
console.log('size: ', myQueue.getSize())

myQueue.dequeue()
myQueue.print()

myQueue.dequeue()
myQueue.print()

myQueue.dequeue()
myQueue.print()
console.log('size: ', myQueue.getSize())

myQueue.dequeue()
myQueue.print()

myQueue.queue(5)
myQueue.print()

myQueue.queue(6)
myQueue.print()
console.log('size: ', myQueue.getSize())

myQueue.queue(7)
myQueue.print()

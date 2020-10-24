/* DATA STRUCTURES: STACK
 *
 * Implemented with a Singly Linked List (SLL)
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

 /* WORK IN PROGRESS: SIZE ISN'R ACCESSED PROPERTLY, TO BE FIXED */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    costructor() {
        this.head = null
        this.size = 0
    }

    print() {
        let currentNode = this.head

        if (!this.head) {
            console.log( 'Empty Stack')
        } else {           
            while (currentNode) {
                console.log(currentNode.val)
                currentNode = currentNode.next
            }
        }
    }

    push(val) {
        const newNode = new Node(val)

        if (!this.head) {
            // empty stack
            this.head = newNode
            this.size++
            return this
        } else {
            newNode.next = this.head
            this.head = newNode
            this.size++
            return this
        }
    }

    pop() {
        if (!this.head) {
            return null
        } else {
            let popped = this.head
            this.head = this.head.next
            this.size--
            return popped
        }
    }

    getSize() {
        return this.size
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
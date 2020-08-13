/* DATA STRUCTURES - Singly Linked Lists
 *
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    // Prints all the nodes of the list.
    printList() {
        let currentNode = this.head
        
        if (!currentNode) {
            console.log('List is empty.')
        } else {
            console.log('Head')
            while (currentNode) {
                console.log(` -> ${currentNode.val}`)
                currentNode = currentNode.next
            }
        } 
    }

    // Add a Node to the tail of the List
    push(nodeVal) {
        const newNode = new Node(nodeVal)
        
        // If the head of the list is set to null it means the list
        // is empty, do:
        // - head and tail needs to point to newNode (is first and last node)
        // - increase the length of the list by one (one node added)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++ 
        }
        // If the list is not empty do:
        // - current tail needs to point to newNode
        // - tail needs to point to newNode (new tail as last element)
        // - increase the length of the list by one (one node added)
        else if (this.head) {
            this.tail.next = newNode
            this.tail  = newNode
            this.length++
        }
        // returning this in order to be able to chain methods
        // eg myList.push(10).methodToBeCalled()
        return this
    }

    // Removes the node at the tail of the list.
    pop() {
        // If List is empty just return null.
        if (!this.head) return null

        let popped = null
        // Track the current node and the next node.
        let currentNode = this.head
        let nextNode = this.head.next
        // If there is no nextNode it means the list only has one node:
        // - save the value of the node
        // - both head and tail need to point to null
        // - the length of the list is reset to zero
        // return the previously saved value of the onny node
        if (!nextNode) {
            popped = currentNode.val
            this.head = null
            this.tail = null
            this.length = 0
            return popped
        }

        // If the list has more than one element, traverse the list until
        // nextNode.next is pointing to null, which means:
        // - nextNode is the tail tyhat needs to be removed
        // currentNode is the node that has to become the new tail
        while (nextNode.next) {
            currentNode = nextNode
            nextNode = nextNode.next
        }
        // Do:
        // - save the value of the current tail
        // - set currentNode.next to null as it will be the new tail
        // - have the tail point to currentNode (the new tail)
        // - decrease the length of the list
        // - return the previously saved value of the old tail  
        popped = nextNode.val
        currentNode.next = null
        this.tail = currentNode
        this.length--
        return popped
    }

    // Removes the node at the head of the list.
    shift() {
        // If the list is empty return null
        if (!this.head) return null

        // otherwise do:
        // - save the value of the current head
        // - set the head to the value of the second node (could be null)
        // - decrease the length of the list
        // - return the previously saved value of the former head 
        let shifted = this.head.val
        this.head = this.head.next
        this.length--
        return shifted
    }

    // Adds a node at the head of the list.
    unshift(nodeVal) {
        const newNode = new Node(nodeVal)

        // The newNode will become the new head of the list, do:
        // - set newNode.next to point as the previous head of the list (can
        //    be null)
        // - set the head of the list to point to newNode
        // - increase the length of the list by one
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    // Get the value of the node at the specified index
    get(index) {
        // If the index is not within the span of the list return null
        if (index < 0 || index >= this.length) return null

        // Set the currentNode as the head and traverse the list a number of
        // times equal to index, then return the value of the node that has
        // been reached.
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode.val
    }
}

/* TESTING TESTING TESTING ***************************** */

const newList = new SLList()
console.log('\n** ~~ ---------------------------------- ~~ **\n')
console.log('Printing the list before popping:')
newList.push(10)
newList.push(20)
newList.push(30)
newList.push(40)
newList.push(50)
newList.printList()
console.log('Popping the tail from the list and printing the value:')
console.log(newList.pop())
console.log('Printing the list after the popping:')
newList.printList()
console.log('Shifting the node from the head and printing its value:')
console.log(newList.shift())
console.log('Printing the list after the shifting:')
newList.printList()
console.log('Unshifting one element to the list, then printing the list:')
newList.unshift(8)
newList.printList()
console.log('Get elements at index -3, 0, 1, 2, 3, 4, 5 and print the values:')
console.log(newList.get(-3))
console.log(newList.get(0))
console.log(newList.get(1))
console.log(newList.get(2))
console.log(newList.get(3))
console.log(newList.get(4))
console.log(newList.get(5))


console.log('\n** ~~ ---------------------------------- ~~ **\n')
const emptyList = new SLList()
console.log('Trying to pop an empty list:')
console.log(emptyList.pop())
console.log('Trying to shift an empty list:')
console.log(emptyList.shift())

console.log('\n** ~~ ---------------------------------- ~~ **\n')
const oneItemList = new SLList()
oneItemList.push(5)
console.log('Printing a one-node list:')
oneItemList.printList()
console.log('Popping the only node from the list and printing the value:')
console.log(oneItemList.pop())
console.log('Printing the (now empty) list after the popping:')
oneItemList.printList()
console.log('Unshifting one element to an empty list and printing the list:')
oneItemList.unshift(5)
oneItemList.printList()
console.log('Shifting the node from a one-node list and printing the value:')
console.log(oneItemList.shift())
console.log('Printing the (now empty) list after the shifting:')
oneItemList.printList()
/* DATA STRUCTURES - Singly Linked Lists
 *
 * TIME COMPLEXITY OF METHODS
 * - Insertion: O(1)
 * - Removal:   O(1)
 * - Searching: O(n)
 * - Access:    O(n)
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
        return this
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

    // Set the value of the node at the specified index
    set(index, nodeVal) {
        // If the index is not within the span of the list return null
        if (index < 0 || index >= this.length) return null

        const newNode = new Node(nodeVal)

        // Set the currentNode as the head and traverse the list a number of
        // times equal to index, then set the value of the node that has
        // been reached to the given value.
        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        currentNode.val = nodeVal
        // Returning this in order to be able to chain methods
        return this
    }

    // Inserts a node at a specific index
    insert(index, nodeVal) {
        // If the index is not within the span of the list return null
        if (index < 0 || index > this.length) return null

        // If inserting at index 0 I am calling the method unshift()
        if (index === 0) {
            this.unshift(nodeVal)
        }
        // If inserting at index == this.length we are trying to insert at
        // the tail, in this case call the method push()
        else if (index === this.length) {
            this.push(nodeVal)
        }
        // else traverse the list in the same way it was done for the
        // method 'push', then:
        // - have newNodde point to nextNode
        // - have currentNode point to newNode
        // - increase the length of the list
        else {
            const newNode = new Node(nodeVal)

            let currentNode = this.head
            let nextNode = this.head.next
            for (let i = 0; i < index-1; i++) {
                currentNode = nextNode
                nextNode = nextNode.next
            }
            newNode.next = nextNode
            currentNode.next = newNode
            this.length++

        }
        // Returning the list to make it possible to chain other methods
        return this
    }

    // Removing a node at the specified index
    remove(index) {
        // If the index is not within the span of the list return null
        if (index < 0 || index > this.length) return null

        // If inserting at index 0 I am calling the method shift()
        if (index === 0) {
            this.shift()
        }
        // If inserting at index == this.length we are trying to insert at
        // the tail, in this case call the method pop()
        else if (index === this.length) {
            this.pop()
        }
        // else traverse the list in the same way it was done for the
        // method 'push', then:
        // - have currentNode point to nextNode.next (skipping one node)
        // - decrease the length of the list
        else {
            let currentNode = this.head
            let nextNode = this.head.next
            for (let i = 0; i < index-1; i++) {
                currentNode = nextNode
                nextNode = nextNode.next
            }
            currentNode.next = nextNode.next
            this.length--
        }
        return this
    }

    // Reverse the list (in place)
    reverse() {
        // If empty or just one node return the list as it is
        if (this.length === 0 || this.length === 1) return this

        // Taking the indexes of the head and tail and saving them into two
        // variables left and right.
        // Creating a loop and swapping the values of the head and tail.
        // At each iteration of the loop moving the left counter right and
        // the right counter left, swapping the values and so on...
        let left = 0
        let right = this.length - 1
        let temp = null
        // We need to stop the for loop halfway through or the values will be
        // swapped again
        for (let i = 0; i < Math.floor(this.length / 2); i++, left++, right--) {
            temp = this.get(left)
            this.set(left, this.get(right))
            this.set(right, temp)
        }
        // Returning the list is not necessary, I prefer adding it as it makes
        // possible to chain reverse() with other methods.
        return this
    }

    // Reversing the list, more performant
    reverse2() {
        if (this.length === 0 || this.length === 1) return this
        
        // Swapping head and tail and creating two temporary variables
        let current = this.head
        this.head = this.tail    
        let prev = null,
            next = null
        
        // Traversing the list while there is a current node
        while (current) {
            // At each iteration:
            // - next gets the node after the current (right)
            // - current.next is set to point to the prev node (left)
            next = current.next
            current.next = prev
            // - the prev node is set to the current for the following cycle
            // - the current node is set to the next for the following cycle
            prev = current
            current = next
        }
        
        return this
    }

    search(nodeVal) {
        if (this.length === 0) return false

        let current = this.head
        while (current) {
            if (current.val === nodeVal) return true
            current = current.next
        }
        return false
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
console.log('Set the value of the node at index 1 to be 100 and print the list:')
newList.set(1, 100)
newList.printList()
console.log('Inserting the value 3 at index 3, then printing the list:')
newList.insert(3, 3)
newList.printList()
console.log('Inserting the value 0 at index 0, then printing the list:')
newList.insert(0, 0)
newList.printList()
console.log('Inserting the value 5 at index 5, then printing the list:')
newList.insert(5, 5)
newList.printList()
console.log(`The length of the list is ${newList.length}.`)
console.log('Inserting the value 7 at index 7 (after the tail, as current length is 7), then printing the list:')
newList.insert(7, 7)
newList.printList()

console.log('\n** ~~ ---------------------------------- ~~ **\n')
const emptyList = new SLList()
console.log('Trying to pop an empty list:')
console.log(emptyList.pop())
console.log('Trying to shift an empty list:')
console.log(emptyList.shift())
console.log('Trying to reverse an empty list:')
emptyList.reverse()
emptyList.printList()
console.log('reverse2:')
emptyList.reverse2()
emptyList.printList()


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
console.log('Reversing the one element list and printing it:')
oneItemList.reverse()
oneItemList.printList()
console.log('reverse2:')
oneItemList.reverse2()
oneItemList.printList()
console.log('Shifting the node from a one-node list and printing the value:')
console.log(oneItemList.shift())
console.log('Printing the (now empty) list after the shifting:')
oneItemList.printList()


const newList2 = new SLList()
console.log('\n** ~~ ---------------------------------- ~~ **\n')
console.log('Printing the list before popping:')
newList2.push(10)
newList2.push(20)
newList2.push(30)
newList2.push(40)
newList2.push(50)
newList2.printList()
console.log('Removing the node at index 3 from the list and printing the value:')
newList2.remove(3)
console.log('Printing the list after the node has been removed:')
newList2.printList()
console.log('Removing the last item (index = length) from the list, then printing thr list:')
newList2.remove(3)
newList2.printList()
console.log('Removing the first item (index = 0) from the list, then printing thr list:')
newList2.remove(0)
newList2.printList()


const newList3 = new SLList()
console.log('\n** ~~ ---------------------------------- ~~ **\n')
newList3.push(0)
newList3.push(1)
newList3.push(2)
newList3.push(3)
newList3.push(4)
newList3.push(5)
newList3.printList()
newList3.reverse()
console.log('Reversing the list and printing it:')
newList3.printList()
console.log('Removing head:')
newList3.remove(0)
console.log('Pushing -1 and Unshifting 5:')
newList3.printList()
newList3.push(-1)
newList3.unshift(5)
newList3.printList()
console.log('Reversing again:')
newList3.reverse()
newList3.printList()
console.log('reverse2:')
newList3.reverse2()
newList3.printList()
console.log('Searching for the node with the value 3:')
console.log(newList3.search(3))
console.log('Searching for the node with the value 9:')
console.log(newList3.search(9))
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
 *      - In binary Heaps
 *      - In Hash trees 
 *      - In Bnary Space Partition in 3D videogames to know which object
 *          needs to be rendered
 *      - In AST (Abstract Syntax Trees) for compiling programming languages
 *      - In Routing Trees for Network Traffic
 *      - In Huffman Coding Trees for data compression (jpeg and mp3)
 *      - GGM Trees for cryptography, to generate pseudo-random numbers
 * 
 * Binary Search trees are used when you need fast searching performance, 
 * as it is O(log n).
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
}

const tree = new BST()
tree.insert(15)
tree.insert(7)
tree.insert(5)
tree.insert(45)
tree.insert(10)
tree.insert(25)

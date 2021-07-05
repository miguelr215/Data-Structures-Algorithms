// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    // finds first node in list, aka head
    getFirst(){
        return this.head;
    }

    // finds last node in list, aka tail
    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            } else {
                node = node.next;
            }
        }
    }

    // clear LinkedList of any nodes
    clear(){
        this.head = null;
    }

    // removes first node
    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    // removes last node
    removeLast(){
        if(!this.head){
            return;
        }

        if(!this.head.next){
            return this.head = null;
        }

        let node = this.head;
        let previousNode = null;
        while(node){
            if(node.next === null){
                return previousNode.next = null;
            } else {
                previousNode = node;
                node = node.next;
            }
        }
    }

    // insert new node as tail
    insertLast(data){
        const lastNode = this.getLast();
        if(lastNode){
            // there are nodes in the chain
            lastNode.next = new Node(data);
        } else {
            // chain is empty
            this.head = new Node(data);
        }
    }

    // get at node at specified index
    getAt(index){
        let counter = 0;
        let node = this.head;

        while(node){
            if(counter === index){
                return node;
            }
            node = node.next;
            counter++;
        }

        return null;
    }
}

module.exports = { Node, LinkedList };

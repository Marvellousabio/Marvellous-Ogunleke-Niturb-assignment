"use strict";
class LNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(initialvalue) {
        const newNode = new LNode(initialvalue);
        this.head = newNode;
    }
    add(value) {
        const newNode = new LNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
}
const list = new LinkedList(10);
list.add(30);
list.add(50);
list.add(90);
list.add(10);
console.clear();
console.log(list);

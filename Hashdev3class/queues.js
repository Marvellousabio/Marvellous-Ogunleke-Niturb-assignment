"use strict";
class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.head)
            return null;
        const removedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        if (!this.head)
            this.tail = null;
        return removedValue;
    }
    peek() {
        return this.head ? this.head.value : null;
    }
    isEmpty() {
        return this.length === 0;
    }
}
const myQueue = new LinkedQueue();
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue);
myQueue.dequeue();
myQueue.enqueue(50);
console.log(myQueue);
console.log(myQueue.peek());

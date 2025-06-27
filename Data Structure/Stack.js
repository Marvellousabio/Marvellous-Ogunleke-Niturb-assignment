"use strict";
class librarySubjects {
    constructor() {
        this.subjects = [];
    }
    push(subjects) {
        this.subjects.push(subjects);
    }
    pop() {
        return this.subjects.pop();
    }
    peek() {
        return this.subjects[this.subjects.length - 1];
    }
    isEmpty() {
        return this.subjects.length === 0;
    }
}
const mathematics = new librarySubjects();
mathematics.push('Marvellous');
mathematics.push('Abiola');
mathematics.push('Bola');
console.log(mathematics.pop());
console.log(mathematics);
const english = new librarySubjects();
english.push('Lambda');
english.push('edge');
console.log(english);
console.log(librarySubjects);
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
}

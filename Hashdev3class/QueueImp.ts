class QueueUsingStacks<T> {
    private stack1: T[] = []; // Used for enqueue
    private stack2: T[] = []; // Used for dequeue

    enqueue(item: T): void {
        this.stack1.push(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;

        if (this.stack2.length === 0) {
            // Move everything from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }

        return this.stack2.pop();
    }

    peek(): T | undefined {
        if (this.isEmpty()) return undefined;

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    print(): void {
        const fullQueue = [...this.stack2].reverse().concat(this.stack1);
        console.log("Queue:", fullQueue);
    }
}


const q = new QueueUsingStacks<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();            // Queue: [1, 2, 3]

console.log(q.dequeue()); // 1
q.print();            // Queue: [2, 3]

q.enqueue(4);
q.print();            // Queue: [2, 3, 4]

console.log(q.peek());    // 2
console.log(q.isEmpty()); // false

class QueueNode<T>{
    value:T;
    next:QueueNode<T>|null;

    constructor(value:T){
        this.value=value;
        this.next=null;
    }
}

class LinkedQueue<T>{
    private head:QueueNode<T>|null=null;
    private tail:QueueNode<T> |null=null;
    private length:number=0;

    enqueue(value:T):void{
        const newNode=new QueueNode(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail!.next=newNode;
            this.tail=newNode
        }
        this.length++;
    }
    dequeue():T | null{
        if(!this.head) return null;

        const removedValue=this.head.value;
        this.head=this.head.next;
        this.length--;

        if(!this.head) this.tail=null;

        return removedValue;
    }
    peek():T |null{
        return this.head? this.head.value:null;
    }
    isEmpty():boolean{
        return this.length===0;
    }
}

const myQueue= new LinkedQueue<number>();
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue)
myQueue.dequeue();
myQueue.enqueue(50);
console.log(myQueue)
console.log(myQueue.peek())

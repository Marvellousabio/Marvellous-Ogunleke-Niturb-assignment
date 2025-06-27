class DoublyLinkedListNode{
    value:number;
    next:DoublyLinkedListNode | null;
    prev:DoublyLinkedListNode | null;

    constructor(value:number){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList{
    head:DoublyLinkedListNode;
    tail:DoublyLinkedListNode;
    length:number;

    constructor(value:number){
        this.head= new DoublyLinkedListNode(value);
        this.tail = this.head;
        this.length=1;
    }

    append(value:number){
        const newDNode= new DoublyLinkedListNode(value)
        this.tail.next=newDNode;
        newDNode.prev=this.tail;
        this.tail=newDNode;
        this.length++;

    }
    prepend(value: number): void {
    const newNode = new DoublyLinkedListNode(value);
        
        newNode.next = this.head;     // New node points to old head
        this.head.prev = newNode;     // Old head points back to new node
        this.head = newNode;          // Update head to new nod
        this.length++;
}
    traverseToIndex(index:number):DoublyLinkedListNode{
        let counter=0;
        let currentNode=this.head;

        while (counter !==index){
            if (currentNode.next===null) throw new Error("Index out of bounds");
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index:number, value:number):string|void{
    const newDNode= new DoublyLinkedListNode(value);
    const nodeBeforeId= this.traverseToIndex(index-1);
    const currentDNode= nodeBeforeId.next;
    nodeBeforeId.next=newDNode;
    newDNode.next=currentDNode
    newDNode.prev=nodeBeforeId;
    if(currentDNode) currentDNode.prev=newDNode;
    this.length++;
    
    }
    remove(index: number): void {
    if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
    }

    if (index === 0) {
        if (this.length === 1) {
            // If there's only one node, clear the whole list
            this.head = null as any;
            this.tail = null as any;
        } else {
            this.head = this.head.next!;
            this.head.prev = null;
        }
    }
    else if (index === this.length - 1) {
        this.tail = this.tail.prev!;
        this.tail.next = null;
    }

    else {
        const nodeBefore = this.traverseToIndex(index - 1);
        const nodeToRemove = nodeBefore.next!;
        const afterNode = nodeToRemove.next;

        nodeBefore.next = afterNode;
        if (afterNode) afterNode.prev = nodeBefore;
    }

    this.length--;
}



}
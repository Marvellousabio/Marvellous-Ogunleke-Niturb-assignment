//creating a new linkedlist 
// creating new singlelistnode
class SingleLinkedNode{
    value:number;//making our value to accept number alone
    next:SingleLinkedNode | null;//the pointer can either point to the node or null if it is the only one in linkedlist

    //constructor for new node
    constructor(value:number){
        this.value=value;//value should be value prompt entered
        this.next=null;//next should be null by default
    }
}
//creating a new singlelinkedlist
class SinglelinkedList{
    head:SingleLinkedNode;//our head will be a node
    tail:SingleLinkedNode;//tail will be a node
    private length: number;//made length private and length number

    constructor(value:number){
        const newNode=new SingleLinkedNode(value);//making new node
        this.head=newNode;
        this.tail=newNode;
        this.length=1;

    }
    append(value:number){
        const newNode= new SingleLinkedNode(value);
        this.tail.next = newNode;
        this.tail=newNode;
        this.length++;
        
    }
    prepend(value:number){
        //create a new node
        const newNode=new SingleLinkedNode(value);
        //set newNode.next to this.head
        newNode.next=this.head;
        //assigned newNode.ne
        //set this.head 
        this.head=newNode;
        //increase length
        this.length++;
}
    getLength(){
        return this.length;
    }
 
    traverseToIndex(index:number):SingleLinkedNode{
        let counter=0;
        let currentNode=this.head;

        while (counter !==index){
            if (currentNode.next===null) throw new Error("Index out of bounds");
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insertion(index:number, value:number):string|void{
//create a node
//traverse to index
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            return "Index too large, appending value to the end of the list";
        }
        //create a new node
        const newNode=new SingleLinkedNode(value);
        //create a variable to hold the node at index-1
        const nodeBeforeIndex=this.traverseToIndex(index -1)
        //create a holdingNode var
        const holdingNode=nodeBeforeIndex.next;

        nodeBeforeIndex.next=newNode;
        newNode.next=holdingNode;
        this.length++;
        //set newnode.

    }
    remove(index: number): void {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
         if (index === 0) {
            this.head = this.head.next as SingleLinkedNode;
            this.length--;
            if (this.length === 0) this.tail = this.head;
            return;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next as SingleLinkedNode;

        leader.next = unwantedNode.next;

        if (index === this.length - 1) {
            this.tail = leader;
        }
        this.length--;
    }
    reverse(): void {
    //     if (!this.head.next) return;

    //     let prev: SingleLinkedNode | null = null;
    //     let current: SingleLinkedNode | null = this.head;
    //     this.tail = this.head;


    //     while (current) {
    //         const nextNode: SingleLinkedNode | null = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = nextNode;
    //     }
    //      this.head = prev!;
    // }
    if (!this.head || !this.head.next) return; // If the list is empty or has only one node, no need to reverse
    // Initialize pointers
    let first=this.head;
    this.tail=this.head;
    let second=first.next;

    while (second){
        const temp=second.next;
        second.next=first;
        first=second;
        second=temp;
    }
    this.head.next=null;
    this.head=first;
}
}



const ourSingleLinkedList = new SinglelinkedList(10);
ourSingleLinkedList.append(20);
ourSingleLinkedList.append(30);
ourSingleLinkedList.append(40);
ourSingleLinkedList.insertion(2, 25); // Insert between 20 and 30
ourSingleLinkedList.insertion(0, 5);  // Insert at the beginning
ourSingleLinkedList.insertion(100, 50); // Will append to end

ourSingleLinkedList.prepend(1); 
// Insert at the beginning
console.log(ourSingleLinkedList);
console.log("Head:", ourSingleLinkedList.head);
console.log("Tail:", ourSingleLinkedList.tail);
console.log("Length:", ourSingleLinkedList.getLength());
ourSingleLinkedList.remove(2); // removes 25
console.log("After removing index 2:");
ourSingleLinkedList.reverse(); // 40 -> 30 -> 20 -> 10

console.log("After reversing:");




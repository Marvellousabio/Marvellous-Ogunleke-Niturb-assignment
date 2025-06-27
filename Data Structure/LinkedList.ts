class LNode{
    value:number;
    next:LNode|null;

    constructor(value:number){
        this.value=value;
        this.next=null
    }

}

class LinkedList{
    head:LNode |null;

    constructor(initialvalue:number){
        const newNode=new LNode(initialvalue);
        this.head=newNode;
    }
    add(value:number){
        const newNode=new LNode(value)
        if (this.head ===null){
            this.head=newNode;
        } else {
            let currentNode =this.head
            while(currentNode.next!==null){
                currentNode=currentNode.next;
        } currentNode.next=newNode;
    }
       
    } 
}
const list=new LinkedList(10);
list.add(30)
list.add(50)
list.add(90)
list.add(10)
console.clear()
console.log(list)
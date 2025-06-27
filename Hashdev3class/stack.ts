// class stack{
//     items: any[];
//     constructor() {
//         this.items=[];
//     }
//     push(element:any){
//         this.items.push(element);
//     }
//     pop(){
//         if(this.isEmpty()) {
//             return null
//             console.log("Stack is empty");
//         }
//         return this.items.pop();
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("Stack is empty");
//             return null;
//         }
//         return this.items[this.items.length-1];
//     }
//     isEmpty(){
//         return this.items.length===0;
//     }
//     printStack(){
//         console.log(this.items.join("<- Top"));
//     }
// }
class StackWithArray<T=number|string>{
    //assign property 
    stack:T[]
    constructor(){
        this.stack=[];
    }
    pop(){
        return this.stack.pop();
    }
    push(value:T){
        this.stack.push(value)
    }
    peek(){
        return this.stack.length-1
    }
}
class librarySubjects<T>{
    private subjects:T[]=[];

    push(subjects:T){
        this.subjects.push(subjects)
    }
    pop():T|undefined{
        return this.subjects.pop();
    }
    peek():T|undefined{
        return this.subjects[this.subjects.length-1];
    }
    isEmpty():boolean{
        return this.subjects.length ===0;
    }
}
const mathematics=new librarySubjects<String>();
mathematics.push('Marvellous');
mathematics.push('Abiola');
mathematics.push('Bola');
console.log(mathematics.pop());
console.log(mathematics);

const english= new librarySubjects<String>();
english.push('Lambda');
english.push('edge');
console.log(english);

console.log(librarySubjects)

class Queue<T>{
    private items:T[]=[];

    enqueue(item:T){
        this.items.push(item);
    }
    dequeue():T|undefined{
        return this.items.shift();
    }
}
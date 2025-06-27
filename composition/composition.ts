// class GLE{
//     engine:Engine;
//     doors:Door[];
//     seats:Seat[];
// }
// class Engine{
//     model:string;
// }
// class Door{

// }


// class lib{
//     books:Book[];
//     listOfAvailableBooks:Book[];
//     availableBooks:string[];

//     constructor(books:Book[]){
//         this.books=books;
//         this.availableBooks=[...books];
//     }
//     borrow(name:string):string|undefined{
//         if (this.availableBooks.includes(name)){
//             const idx =this.availableBooks.indexOf(name);
//             this.availableBooks.splice(idx,1);
//             return name;
            
//         }
//         else{
//             console.log(`The ${name} bokk is not available`)
//         }
        
//     }
//     returnBook(name:string):void{
//         if (!this.books.includes(name)){
//             this.books.push(name);
//         }
//         if(!this.availableBooks.includes(name)){
//             this.availableBooks.push(name);
//         }
//         console.log(`The book ${} is returned`)
        
//     }
    
// }
// const bookz=['A','B','C'];
// const library=new lib(bookz);


// library.returnBook('D')
// library.borrow('A')
// library.returnBook('A')

// console.log(library.books);
// console.log(library.availableBooks);
class Books{
    title:string;
    isAvailable:boolean;

    constructor(title:string, isAvailable:boolean){
        this.title=title;
        this.isAvailable=isAvailable;
    }
    
}
class Members{
    name:string;
    borrowedBooks:Books[]=[];

    constructor(name:string){
        this.name=name;
    }
    borrowBook(book:Books):void {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;
            console.log(`The book "${book.title}" has been borrowed by ${this.name}.`);
        } else {
            console.log(`The book "${book.title}" is not available.`);
        }
    }
    returnBook(book:Books){
        this.borrowedBooks = this.borrowedBooks.filter(b => b.title !== book.title);
        book.isAvailable = true;
    }
}

class bookLibrary{
    books:Books[]=[];
    listOfAvailableBooks:Books[]=[];

    constructor(books:Books[]){
        this.books = books;
        this.listOfAvailableBooks = [...books];
    }
    addBook(book:Books){
        this.books.push(book);
    }
    showAvailableBooks(){
        return this.books.filter(book => book.isAvailable);
    }
}
const book1=new Books('The Great Gatsby', true);
const book2=new Books('1984',true);
const book3=new Books('To Kill a Mockingbird', true);

const Library1=new bookLibrary([book1,book2,book3]);


const member1 = new Members('Alice');
member1.borrowBook(book1);
member1.borrowBook(book2);
member1.returnBook(book1);
console.log(book1); 


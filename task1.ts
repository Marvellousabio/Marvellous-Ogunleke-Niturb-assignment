//library management
class Book{
    private readonly id :string;
    private title:string;
    private author:string;
    private description:string;
    private available:boolean;
    private totalCopies:number;
    private availableCopies:number;
    

    constructor(id:string,title:string, author:string, description:string,totalCopies:number){
        this.id= id;
        this.title=title;
        this.author=author;
        this.totalCopies=totalCopies;
        this.description=description;
        this.available=totalCopies>0;
        this.availableCopies=totalCopies;
    }

    public checkBookAvailability():boolean{
        return this.available;
    }
    public borrowCopy():void{
        if (this.availableCopies >0){

            this.availableCopies--;
            this.available=this.availableCopies>0;
        }else{
            throw new Error('No copies available');
        }
    }
    public returnCopy():void{
        if(this.availableCopies<this.totalCopies){
            this.availableCopies++;
            this.available=true;

        }else{
            throw new Error('Cannot return more')
        }
    }
    public getTitle():string{return this.title;}
    public getAuthor():string{return this.author;}
    public getId():string{return this.id;}
    public getDescription():string{return this.description}
}


class Member{
    private readonly id:string;
    private name:string;
    private email:string;
    private borrowedBooks:Book[];

    constructor(id:string, name:string, email:string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.borrowedBooks=[];
    }

    public borrowBook(book:Book):void{
        book.borrowCopy();
        this.borrowedBooks.push(book);
    }

    public returnBook(bookId:string):void{
        const index=this.borrowedBooks.findIndex(book=> book.getId()===bookId);
        if (index !==-1){
            const book=this.borrowedBooks[index];
            book.returnCopy();
            this.borrowedBooks.splice(index,1);
        }
        else{
            throw new Error(`Book with id ${bookId} not found in borrowed books`);
        
        }
    }
    public getId():string{return this.id;}
    public getName():string{return this.name;}
    public getBorrowedBooks():Book[]{return this.borrowedBooks;}
}


class Library{
    private books: Book[];
    private members: Member[];
    

    constructor (){
        this.books=[];
        this.members=[];
    }

    public addBook(book:Book):void{
        this.books.push(book)
    }
    public removeBook(bookId:string):void{
        this.books=this.books.filter(book=>book.getId() !== bookId)
    }
    public findBookById(bookId:string):Book | undefined{
        return this.books.find(book => book.getId() ===bookId);
    }

    public registerMember(member:Member):void{
        this.members.push(member);
    }
    public findMemberById(memberId:string):Member|undefined{
        return this.members.find(member=>member.getId()===memberId);
    }
    public borrowBook(memberId:string,bookId:string):void{
        const member=this.findMemberById(memberId);
        const book=this.findBookById(bookId);

        if (!member || !book){
            throw new Error('Member or book not found');
        }
        member.borrowBook(book);
    }
    public returnBook(memberId:string, bookId:string):void{
        const member = this.findMemberById(memberId);
        if  (!member){
            throw new Error('Member not Found');
        }
        member.returnBook(bookId);
    }

}
console.log(Book)
"use strict";
class Book {
    constructor(id, title, author, description, totalCopies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.totalCopies = totalCopies;
        this.description = description;
        this.available = totalCopies > 0;
        this.availableCopies = totalCopies;
    }
    checkBookAvailability() {
        return this.available;
    }
    borrowCopy() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            this.available = this.availableCopies > 0;
        }
        else {
            throw new Error('No copies available');
        }
    }
    returnCopy() {
        if (this.availableCopies < this.totalCopies) {
            this.availableCopies++;
            this.available = true;
        }
        else {
            throw new Error('Cannot return more');
        }
    }
    getTitle() { return this.title; }
    getAuthor() { return this.author; }
    getId() { return this.id; }
    getDescription() { return this.description; }
}
class Member {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        book.borrowCopy();
        this.borrowedBooks.push(book);
    }
    returnBook(bookId) {
        const index = this.borrowedBooks.findIndex(book => book.getId() === bookId);
        if (index !== -1) {
            const book = this.borrowedBooks[index];
            book.returnCopy();
            this.borrowedBooks.splice(index, 1);
        }
        else {
            throw new Error(`Book with id ${bookId} not found in borrowed books`);
        }
    }
    getId() { return this.id; }
    getName() { return this.name; }
    getBorrowedBooks() { return this.borrowedBooks; }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(bookId) {
        this.books = this.books.filter(book => book.getId() !== bookId);
    }
    findBookById(bookId) {
        return this.books.find(book => book.getId() === bookId);
    }
    registerMember(member) {
        this.members.push(member);
    }
    findMemberById(memberId) {
        return this.members.find(member => member.getId() === memberId);
    }
    borrowBook(memberId, bookId) {
        const member = this.findMemberById(memberId);
        const book = this.findBookById(bookId);
        if (!member || !book) {
            throw new Error('Member or book not found');
        }
        member.borrowBook(book);
    }
    returnBook(memberId, bookId) {
        const member = this.findMemberById(memberId);
        if (!member) {
            throw new Error('Member not Found');
        }
        member.returnBook(bookId);
    }
}
console.log(Book);

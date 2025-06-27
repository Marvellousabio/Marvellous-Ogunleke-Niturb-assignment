"use strict";
// //assigments
// class ArrayMarvellous{
//     elements=[];
//     includes(value){
//         for(let i=0; i<this.elements.length;i++){
//             if (this.elements[i]===value){
//                 return true;
//             }
//         }
//         return false;
//     }
//     splice(){
//     }
//     indexOf(value){
//         for(let i=0; i<this.elements.length; i++){
//             if (this.elements[i]===value){
//                 return 1;
//             }
//         }
//         return -1;
//     }
//     pop(){
//         const last= this.elements[this.elements.length-1];
//         this.elements.length=this.elements.length-1;
//         return last;
//     }
//     push(value){
//         this.elements[this.elements.length]=value;
//     }
// }
// const arr=new ArrayMarvellous();
// arr.push(6)
// class ArrayMarvellous<T> {
//     private elements: T[];
//     constructor(initialElements: T[] = []) {
//         this.elements = [...initialElements];
//     }
//     // Returns true if the element exists in the array
//     includes(element: T): boolean {
//         for (const el of this.elements) {
//             if (el === element) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     // Changes the contents by removing/replacing elements and/or adding new elements
//     splice(start: number, deleteCount?: number, ...items: T[]): T[] {
//         const deletedElements: T[] = [];
//         const actualDeleteCount = deleteCount ?? this.elements.length - start;
//         // Remove elements
//         for (let i = 0; i < actualDeleteCount; i++) {
//             if (start + i < this.elements.length) {
//                 deletedElements.push(this.elements[start + i]);
//             }
//         }
//         // Shift elements
//         const newElements = [...this.elements.slice(0, start), ...items];
//         if (start + actualDeleteCount < this.elements.length) {
//             newElements.push(...this.elements.slice(start + actualDeleteCount));
//         }
//         this.elements = newElements;
//         return deletedElements;
//     }
//     // Returns the first index at which a given element can be found
//     indexOf(element: T): number {
//         for (let i = 0; i < this.elements.length; i++) {
//             if (this.elements[i] === element) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//     // Adds elements to the end of the array
//     push(...elements: T[]): number {
//         this.elements = [...this.elements, ...elements];
//         return this.elements.length;
//     }
//     // Removes the last element from the array
//     pop(): T | undefined {
//         if (this.elements.length === 0) return undefined;
//         const lastElement = this.elements[this.elements.length - 1];
//         this.elements = this.elements.slice(0, -1);
//         return lastElement;
//     }
//     // Helper method to see the current array
//     get array(): T[] {
//         return [...this.elements];
//     }
// }
// // Example usage
// const myArray = new ArrayMarvellous<number>([1, 2, 3]);
// console.log(myArray.array); // [1, 2, 3]
// console.log(myArray.includes(2)); // true
// console.log(myArray.indexOf(3)); // 2
// myArray.push(4, 5);
// console.log(myArray.array); // [1, 2, 3, 4, 5]
// console.log(myArray.pop()); // 5
// console.log(myArray.array); // [1, 2, 3, 4]
// console.log(myArray.splice(1, 2, 9, 8)); // [2, 3] (deleted elements)
// console.log(myArray.array); // [1, 9, 8, 4]

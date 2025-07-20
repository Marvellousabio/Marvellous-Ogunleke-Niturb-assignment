"use strict";
function insertSort(arrInsertion) {
    const n = arrInsertion.length;
    //example array [2,5,4,6,5]
    // starting from index 1 which is 
    console.log(`the original array ${arrInsertion}, has length ${n}`);
    for (let i = 1; i < n; i++) {
        //looping through it one on one
        let key = arrInsertion[i];
        let j = i - 1;
        console.log(`Key is ${key} at index ${i} and j is ${i - 1} index`);
        while (j >= 0 && arrInsertion[j] > key) {
            arrInsertion[j + 1] = arrInsertion[j];
            console.log(`Moving ${arrInsertion[j]} from index ${j} to index ${j + 1} because it is greater`);
            j--;
        }
        arrInsertion[j + 1] = key;
    }
    return arrInsertion;
}
const arrInsertion = [12, 11, 13, 5, 6];
console.log("Sorted arrInsertionay:", insertSort(arrInsertion));
function inser(ar) {
    for (let i = 1; i < ar.length; i++) {
        let current = ar[i];
        let j = i - 1;
        while (j >= 0 && ar[j] > current) {
            ar[j + 1] = ar[j];
            j--;
        }
        if (ar[j + 1] !== current)
            ar[j + 1] = current;
    }
    return ar;
}
const ar = [1, 76, 6, 9, 2, 5, 9, 5, 3, 7, 8, 9, 4, 2, 3, 5, 6, 7, 8];
console.log("Sorted arrInsertionay:", inser(ar));

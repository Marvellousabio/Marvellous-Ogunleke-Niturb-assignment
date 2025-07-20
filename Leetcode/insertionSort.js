"use strict";
function insertionSort(arrInsert) {
    const n = arrInsert.length;
    for (let i = 0; i < n; i++) {
        let current = arrInsert[i];
        let j = i - 1;
        while (j > 0 && arrInsert[j] > current) {
            arrInsert[j + 1] = arrInsert[j];
            j--;
        }
        arrInsert[j + 1] = current;
    }
    return arrInsert;
}
const arrInsert = [12, 11, 13, 5, 6];
console.log("Sorted arrInsertay:", insertionSort(arrInsert));

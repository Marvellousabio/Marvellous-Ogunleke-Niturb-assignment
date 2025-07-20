"use strict";
function mergeSort(arra) {
    if (arra.length <= 1) {
        return arra;
    }
    const mid = Math.floor(arra.length / 2);
    const left = mergeSort(arra.slice(0, mid));
    const right = mergeSort(arra.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let j = 0;
    let i = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
const arra = [2, 5, 78, 900, 54, 3, 2, 5, 5, 6, 7, 8, 8, 9, 0, 9, 9, 8, 8, 7, 6, 6, 5, 4, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5, 3, 2, 2, 2, 2, 2, 2, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9, 65, 4, 4, 4, 4445, 566, 78];
const sorted = mergeSort(arra);
console.log(sorted);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMaxandMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = arr[0];
    let min = arr[0];
    console.log("Starting to find maximum and minimum values in the array...", arr);
    console.log(`Initial maximum: ${max}, Initial minimum: ${min}`);
    for (let i = 0; i < arr.length; i++) {
        console.log(`Checking element at index ${i}: ${arr[i]}`);
        if (arr[i] > max) {
            max = arr[i];
            console.log(`New maximum found: ${max} at index ${i}`);
        }
        if (arr[i] < min) {
            min = arr[i];
            console.log(`New minimum found: ${min} at index ${i}`);
        }
    }
    return { min, max };
}
const arr = [3, 5, 1, 8, 2];
const { min, max } = findMaxandMin(arr);
console.log("Array:", arr);
console.log(`Minimum: ${min}, Maximum: ${max}`);

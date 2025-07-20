"use strict";
function findMaxandMin(arrSelect) {
    if (arrSelect.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = arrSelect[0];
    let min = arrSelect[0];
    console.log("Starting to find maximum and minimum values in the array...", arrSelect);
    console.log(`Initial maximum: ${max}, Initial minimum: ${min}`);
    for (let i = 0; i < arrSelect.length; i++) {
        console.log(`Checking element at index ${i}: ${arrSelect[i]}`);
        if (arrSelect[i] > max) {
            max = arrSelect[i];
            console.log(`New maximum found: ${max} at index ${i}`);
        }
        if (arrSelect[i] < min) {
            min = arrSelect[i];
            console.log(`New minimum found: ${min} at index ${i}`);
        }
    }
    return { min, max };
}
//first
const arrSelect = [3, 5, 1, 8, 2];
const { min, max } = findMaxandMin(arrSelect);
console.log("arrSelectay:", arrSelect);
console.log(`Minimum: ${min}, Maximum: ${max}`);

"use strict";
function selectionSort(arr) {
    //set n as array length
    const n = arr.length;
    console.log(`the original array ${arr}, has length ${n}`);
    if (arr.length === 0) {
        throw new Error("The array is empty");
    }
    //loop through in n(arr length time)
    for (let i = 0; i < n; i++) {
        console.log(`Iterating at index ${i} has value ${arr[i]}`);
        //set minIndex to be first index which start at 0 from(let i=0)
        let minIndex = i;
        // loop through each starting from j which is i+1 because we already set min Index to i and j must not meet j ie j<n
        for (let j = i + 1; j < n; j++) {
            console.log(`interating at index ${j}  which is i+1 has  value ${arr[j]}`);
            //so now comaparing arr at j(i+1) and the min number 
            console.log(`comparing if ${arr[j]} less than ${arr[minIndex]} of which ${arr[minIndex]} is the current minimum value in the array`);
            if (arr[j] < arr[minIndex]) {
                console.log(`Array ${arr[j]} is less than ${arr[minIndex]} so we set it to be minimum`);
                //we set the minIndex to j if less than the minIndex
                minIndex = j;
            }
        }
        //incase the i> minindex we swapp the values of i and minIndex
        //if minIndex is not equal to i then we swap the values of i and minIndex
        if (minIndex !== i) {
            //swapping the values of i and minIndex
            //we use destructuring to swap the values of i and minIndex
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.log(`since ${minIndex} not eqaul to ${i}`);
        }
    }
    //return the sorted array
    return arr;
}
const arr = [3, 5, 1, 8, 2];
console.log(selectionSort(arr));
console.log();

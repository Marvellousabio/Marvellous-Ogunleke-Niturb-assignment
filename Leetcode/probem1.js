"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var swapped = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return arr;
}
var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(arr));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
/**
 * Insertion sort is a simple sorting algorithm.
 * The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
 *
 * Implementation of Insertion sort for number array.
 *
 * Time Complexity: Best -> O(n); Worst -> O(n^2)
 * @param sortArray an unsorted array
 * @returns a sorted array
 */
var InsertionSort = function (sortArray) {
    var n = sortArray.length;
    for (var i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        var current = sortArray[i];
        // The last element of our sorted subarray
        var j = i - 1;
        while ((j > -1) && (current < sortArray[j])) {
            sortArray[j + 1] = sortArray[j];
            j--;
        }
        sortArray[j + 1] = current;
    }
    return sortArray;
};
exports.InsertionSort = InsertionSort;
//# sourceMappingURL=InsertionSort.js.map
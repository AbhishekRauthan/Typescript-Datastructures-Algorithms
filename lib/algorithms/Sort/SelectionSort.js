"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
/**
 * Selection Sort, sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
 *
 * Implementation of Selection Sort for number array
 * Time Complexity: O(n^2)
 * @param sortArray an unsorted array
 * @returns a sorted array
 */
var SelectionSort = function (sortArray) {
    var n = sortArray.length;
    for (var i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        var min = i;
        for (var j = 0; j < n; j++) {
            if (sortArray[j] < sortArray[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            var tmp = sortArray[i];
            sortArray[i] = sortArray[min];
            sortArray[min] = tmp;
        }
    }
    return sortArray;
};
exports.SelectionSort = SelectionSort;
//# sourceMappingURL=SelectionSort.js.map
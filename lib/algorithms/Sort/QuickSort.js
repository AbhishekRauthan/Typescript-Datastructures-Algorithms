"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSort = void 0;
/**
 * this functions perform the partition required by quicksort
 * @param arr number array that is to be sorted
 * @param start start index
 * @param end end index
 * @returns pivot index
 */
var partition = function (arr, start, end) {
    var _a, _b;
    // Taking the last element as the pivot
    var pivotValue = arr[end];
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            _a = [arr[pivotIndex], arr[i]], arr[i] = _a[0], arr[pivotIndex] = _a[1];
            // Moving to next element
            pivotIndex++;
        }
    }
    // Putting the pivot value in the middle
    _b = [arr[end], arr[pivotIndex]], arr[pivotIndex] = _b[0], arr[end] = _b[1];
    return pivotIndex;
};
/**
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
 *
 * Impleamentation of Quick Sort for number Array
 * Time Complexity: Best -> O(nlog(n)); Average -> O(nlog(n)); Worst -> O(n^2)
 *
 * @param arr array that is to be sorted
 * @returns sorted array
 */
var QuickSort = function (arr) {
    // Base case or terminating case
    var stack = [];
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    // The loop repeats as long as we have unsorted subarrays
    while (stack[stack.length - 1] >= 0) {
        // Extracting the top unsorted subarray
        var end = stack.pop();
        var start = stack.pop();
        var pivotIndex = partition(arr, start, end);
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    // returns the sorted array
    return arr;
};
exports.QuickSort = QuickSort;
//# sourceMappingURL=QuickSort.js.map
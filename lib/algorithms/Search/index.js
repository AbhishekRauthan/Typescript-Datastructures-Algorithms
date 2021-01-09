"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearch = exports.LinearSearch = void 0;
/**
 * Linear Search scans one item at a time, without jumping to any item .
 *
 * Implementation of Linear Search for number Array; returns index of item if item is in array else returns false
 * Time Complexity = O(n)
 * @param searchArray array to be searched in
 * @param searchItem item to be searched
 */
var LinearSearch = function (searchArray, searchItem) {
    // simple one line implementation using built-in array functions
    // return searchArray.indexOf(searchItem) !== -1
    // above is an one line implementation of linear search that returns a boolean value
    for (var i = 0; i < searchArray.length; i++) {
        if (searchArray[i] === searchItem) {
            return i;
        }
    }
    return false;
};
exports.LinearSearch = LinearSearch;
/**
 * Search a sorted array by repeatedly dividing the search interval in half.
 *
 * ! IMPORTANT: array passed should be a sorted array
 *
 * Implementation of Binary Search for number Array; returns index of item if item is in array else returns false
 * Time Complexity = O(log(n))
 * @param searchArray (sorted)array to be searched in
 * @param searchItem item to be searched
 */
var BinarySearch = function (searchArray, searchItem) {
    var start = 0;
    var end = searchArray.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (searchArray[mid] === searchItem)
            return mid;
        else if (searchArray[mid] < searchItem)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
};
exports.BinarySearch = BinarySearch;
//# sourceMappingURL=index.js.map
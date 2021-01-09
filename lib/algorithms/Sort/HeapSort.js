"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapSort = void 0;
var MaxHeapify = function (array, len, idx) {
    var left = 2 * idx + 1;
    var right = 2 * idx + 2;
    var max = idx;
    if (left < len && array[left] > array[max]) {
        max = left;
    }
    if (right < len && array[right] > array[max]) {
        max = right;
    }
    if (max != idx) {
        swap(array, idx, max);
        MaxHeapify(array, len, max);
    }
};
var swap = function (array, index_A, index_B) {
    var temp = array[index_A];
    array[index_A] = array[index_B];
    array[index_B] = temp;
};
/**
 * Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.
 *
 *
 * Implementation of Heap sort in number array
 * Time Complexity: O(nlog(n))
 * @param array unsorted array
 * @returns sorted array
 */
var HeapSort = function (array) {
    var array_length = array.length;
    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        MaxHeapify(array, array_length, i);
    }
    for (i = array.length - 1; i > 0; i--) {
        swap(array, 0, i);
        array_length--;
        MaxHeapify(array, array_length, 0);
    }
    return array;
};
exports.HeapSort = HeapSort;
//# sourceMappingURL=HeapSort.js.map
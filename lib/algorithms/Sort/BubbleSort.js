"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
/**Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 *
 * Implementation of Bubble sort for number array
 * Time Complexity: Best -> O(n); Worst -> O(n^2)
 * @param sortArray an unsorted array
 * @returns a sorted array
 */
var BubbleSort = function (sortArray) {
    var len = sortArray.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (sortArray[j] > sortArray[j + 1]) {
                var tmp = sortArray[j];
                sortArray[j] = sortArray[j + 1];
                sortArray[j + 1] = tmp;
            }
        }
    }
    return sortArray;
};
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=BubbleSort.js.map
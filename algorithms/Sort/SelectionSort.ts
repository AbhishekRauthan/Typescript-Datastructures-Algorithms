/**
 * Implementation of Selection Sort for number array
 * Time Complexity: O(n^2)
 * @param sortArray an unsorted array
 * @returns a sorted array
 */
export const SelectionSort = (sortArray: number[]) => {
  let n = sortArray.length;
  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = 0; j < n; j++) {
      if (sortArray[j] < sortArray[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = sortArray[i];
      sortArray[i] = sortArray[min];
      sortArray[min] = tmp;
    }
  }
  return sortArray;
}
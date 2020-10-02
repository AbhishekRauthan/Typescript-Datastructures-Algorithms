/**
 * Implementation of Bubble sort for number array
 * Time Complexity: Best -> O(n); Worst -> O(n^2)
 * @param sortArray an unsorted array
 * @returns a sorted array
 */
export const BubbleSort = (sortArray: number[]): number[] => {
  let len = sortArray.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (sortArray[j] > sortArray[j + 1]) {
        let tmp = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = tmp;
      }
    }
  }
  return sortArray;
}
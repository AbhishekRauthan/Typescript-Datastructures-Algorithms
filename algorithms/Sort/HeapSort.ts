const MaxHeapify = (array: number[], len: number, idx: number) => {
  const left = 2 * idx + 1;
  const right = 2 * idx + 2;
  let max = idx;

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
}

const swap = (array: number[], index_A: number, index_B: number) => {
  let temp = array[index_A];
  array[index_A] = array[index_B];
  array[index_B] = temp;
}

/**
 * Implementation of Heap sort in number array
 * Time Complexity: O(nlog(n))
 * @param array unsorted array
 * @returns sorted array
 */
export const HeapSort = (array: number[]) => {

  let array_length = array.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    MaxHeapify(array, array_length, i);
  }

  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    array_length--;
    MaxHeapify(array, array_length, 0);
  }

  return array;
}
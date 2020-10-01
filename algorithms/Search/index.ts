/**
 * Implementation of Linear Search in number Array; returns index of item if item is in array else returns false
 * Time Complexity = O(n)
 * @param searchArray array to be searched in
 * @param searchItem item to be searched
 */
export const LinearSearch = (searchArray: number[], searchItem: number) => {
  // return searchArray.indexOf(searchItem) !== -1
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === searchItem) {
      return i;
    }
  }
  return false;
}

/**
 * Implementation of Binary Search in number Array; returns index of item if item is in array else returns false
 * Time Complexity = O(log(n))
 * @param searchArray array to be searched in
 * @param searchItem item to be searched
 */
export const BinarySearch = (searchArray: number[], searchItem: number) => {
  let start = 0;
  let end = searchArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (searchArray[mid] === searchItem) return mid
    else if (searchArray[mid] < searchItem) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}

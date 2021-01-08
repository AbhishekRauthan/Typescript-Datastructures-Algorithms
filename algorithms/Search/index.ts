/**
 * Linear Search scans one item at a time, without jumping to any item .
 * 
 * Implementation of Linear Search for number Array; returns index of item if item is in array else returns false
 * Time Complexity = O(n)
 * @param searchArray array to be searched in
 * @param searchItem item to be searched
 */
export const LinearSearch = (searchArray: number[], searchItem: number): number | false => {
  // simple one line implementation using built-in array functions
  // return searchArray.indexOf(searchItem) !== -1
  // above is an one line implementation of linear search that returns a boolean value
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === searchItem) {
      return i;
    }
  }
  return false;
}

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
export const BinarySearch = (searchArray: number[], searchItem: number): number | false => {
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

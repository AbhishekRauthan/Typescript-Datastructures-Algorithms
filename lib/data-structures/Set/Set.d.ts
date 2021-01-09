/**
 * set is a data structure that can store any number of unique values in any order you so wish.
 *
 * Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them
 */
export default class Sets<T> {
    private set;
    /**
     * Returns true if set has given item, else returns false
     * @param item - Item to check if it is set
     */
    has(item: T): boolean;
    /**
     * Returns the whole set
     */
    values(): T[];
    /**
     * Adds a given item to set if set doesn't have item already
     * Returns index of item, else returns false
     * @param item - Item to add to set
     */
    add(item: T): number | false;
    /**
     * Removes a given item from set if set does have item already,
     * returns index of item, else returns false
     * @param item - Item to be removed from set
     */
    remove(item: T): number | false;
    /**
     * Returns the length of set
     */
    size(): number;
    /**
     * Returns a brand new Set which contain elements from both Sets
     * (one which is calling the func and another set which is passed as an argument)
     * @param otherSet - Another Set of Type T
     */
    union(otherSet: Sets<T>): Sets<T>;
    /**
   * Returns a brand new Set which contain elements which are common in both Sets
   * (one which is calling the func and another set which is passed as an argument)
   * @param otherSet - Another Set of Type T
   */
    intersection(otherSet: Sets<T>): Sets<T>;
    /**
   * Returns a brand new Set which contain elements which the other set do not contain
   * (one which is calling the func and another set which is passed as an argument)
   * @param otherSet - Another Set of Type T
   */
    difference(otherSet: Sets<T>): Sets<T>;
    /**
   * Returns a boolean value true if set(func calling) is subset of other set
   * @param otherSet - Another Set of Type T
   */
    isSubsetOf(otherSet: Sets<T>): boolean;
    /**
   * Prints the Set in format set[{index}]: {item}
   */
    getSet(): T[];
}
//# sourceMappingURL=Set.d.ts.map
/**
 * set is a data structure that can store any number of unique values in any order you so wish.
 * 
 * Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them
 */
export default class Sets<T> {
  private set: T[];

  constructor() {
    this.set = Array<T>();
  }

  /**
   * set is a data structure that can store any number of unique values in any order you so wish.
   * 
   * Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them
   * Returns true if set has given item, else returns false
   * @param item - Item to check if it is set
   */
  public has(item: T): boolean {
    return (this.set.indexOf(item) !== -1)
  }

  /**
   * Returns the whole set
   */
  public values(): T[] {
    return this.set;
  }

  /**
   * Adds a given item to set if set doesn't have item already
   * Returns index of item, else returns false 
   * @param item - Item to add to set
   */
  public add(item: T): number | false {
    if (!this.has(item)) {
      const index: number = this.set.push(item);
      return index
    }
    return false
  }

  /**
   * Removes a given item from set if set does have item already,
   * returns index of item, else returns false 
   * @param item - Item to be removed from set
   */
  public remove(item: T): number | false {
    if (this.has(item)) {
      const index: number = this.set.indexOf(item);
      this.set = this.set.splice(index, 1);
      return index
    }
    return false
  }

  /**
   * Returns the length of set 
   */
  public size(): number {
    return this.set.length;
  }

  /**
   * Returns a brand new Set which contain elements from both Sets 
   * (one which is calling the func and another set which is passed as an argument)
   * @param otherSet - Another Set of Type T
   */
  public union(otherSet: Sets<T>): Sets<T> {
    const union = new Sets<T>();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      union.add(e);
    });
    secondSet.forEach((e) => {
      union.add(e);
    });
    return union;
  }

  /**
 * Returns a brand new Set which contain elements which are common in both Sets 
 * (one which is calling the func and another set which is passed as an argument)
 * @param otherSet - Another Set of Type T
 */
  public intersection(otherSet: Sets<T>): Sets<T> {
    const intersection = new Sets<T>();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersection.add(e);
      }
    });
    return intersection;
  }

  /**
 * Returns a brand new Set which contain elements which the other set do not contain 
 * (one which is calling the func and another set which is passed as an argument)
 * @param otherSet - Another Set of Type T
 */
  public difference(otherSet: Sets<T>): Sets<T> {
    const difference = new Sets<T>();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        difference.add(e);
      }
    });
    return difference;
  }

  /**
 * Returns a boolean value true if set(func calling) is subset of other set 
 * @param otherSet - Another Set of Type T
 */
  public isSubsetOf(otherSet: Sets<T>): boolean {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }

  /**
 * Prints the Set in format set[{index}]: {item}
 */
  public getSet(): T[] {
    return this.set;
  }
}
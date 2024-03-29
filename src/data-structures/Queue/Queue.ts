/**
 * Queue is a linear structure which follows a particular order in which the operations are performed.
 *
 * The order is First In First Out (FIFO).
 */
export default class Queue<T> {
  private queue: T[];
  private length: number;
  private maxLenght: number;

  /**
   * Queue is a linear structure which follows a particular order in which the operations are performed.
   *
   * The order is First In First Out (FIFO).
   *
   * @constructor
   * Intialize the queue with optional length
   * @param len if undifined maxLength is set to 10
   */
  public constructor(len?: number) {
    this.maxLenght = len ? len : 10;
    this.length = 0;
    this.queue = Array<T>();
  }

  /**
   * Returns true if queue is empty, else returns false
   */
  public isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Returns true if queue is full, else returns false
   */
  public isFull(): boolean {
    return this.length === this.maxLenght;
  }

  /**
   * Removes the first element from queue and returns it if successfull.
   * else returns false
   */
  public dequeue(): T | false {
    if (this.isEmpty()) {
      return false;
    } else {
      const first = this.queue.shift();
      this.length--;
      return first!;
    }
  }

  /**
   * Adds newItem to queue and returns its index if successfull.
   * else returns false
   * @param newItem
   */
  public enqueue(newItem: T): number | false {
    if (this.isFull()) {
      return false;
    } else {
      const index = this.queue.push(newItem);
      this.length++;
      return index;
    }
  }

  /**
   * @returns the Queue
   */
  public getQ(): T[] {
    return this.queue;
  }
}

/**
 * Queue is a linear structure which follows a particular order in which the operations are performed.
 *
 * The order is First In First Out (FIFO).
 */
export default class Queue<T> {
    private queue;
    private length;
    private maxLenght;
    /**
     * Intialize the queue with optional length
     * @param len if undifined maxLength is set to 10
     */
    constructor(len?: number);
    /**
   * Returns true if queue is empty, else returns false
   */
    isEmpty(): boolean;
    /**
   * Returns true if queue is full, else returns false
   */
    isFull(): boolean;
    /**
     * Removes the first element from queue and returns it if successfull.
     * else returns false
     */
    dequeue(): T | false;
    /**
     * Adds newItem to queue and returns its index if successfull.
     * else returns false
     * @param newItem
     */
    enqueue(newItem: T): number | false;
    /**
   * @returns the Queue
   */
    getQ(): T[];
}
//# sourceMappingURL=Queue.d.ts.map
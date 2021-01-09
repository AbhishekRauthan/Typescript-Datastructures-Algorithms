"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Queue is a linear structure which follows a particular order in which the operations are performed.
 *
 * The order is First In First Out (FIFO).
 */
var Queue = /** @class */ (function () {
    /**
     * Intialize the queue with optional length
     * @param len if undifined maxLength is set to 10
     */
    function Queue(len) {
        this.maxLenght = len ? len : 10;
        this.length = 0;
        this.queue = Array(this.maxLenght);
    }
    /**
   * Returns true if queue is empty, else returns false
   */
    Queue.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
   * Returns true if queue is full, else returns false
   */
    Queue.prototype.isFull = function () {
        return this.length === this.maxLenght;
    };
    /**
     * Removes the first element from queue and returns it if successfull.
     * else returns false
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return false;
        }
        else {
            var first = this.queue.shift();
            return first;
        }
    };
    /**
     * Adds newItem to queue and returns its index if successfull.
     * else returns false
     * @param newItem
     */
    Queue.prototype.enqueue = function (newItem) {
        if (this.isFull()) {
            return false;
        }
        else {
            var index = this.queue.push(newItem);
            return index;
        }
    };
    /**
   * @returns the Queue
   */
    Queue.prototype.getQ = function () {
        return this.queue;
    };
    return Queue;
}());
exports.default = Queue;
//# sourceMappingURL=Queue.js.map
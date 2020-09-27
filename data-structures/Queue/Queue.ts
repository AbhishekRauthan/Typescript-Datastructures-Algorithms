export default class Queue<T> {
  private queue: T[];
  private length: number;
  private maxLenght: number;

  constructor(len?: number) {
    this.maxLenght = len ? len : 10;
    this.length = 0;
    this.queue = Array<T>(this.maxLenght);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxLenght;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue underflow!! Cannot remove any element");
    } else {
      const first: T = this.queue.shift();
      console.log(`Removed element ${first} from queue\nRest of the queue is:`);
      this.queue.forEach(console.log);
    }
  }

  enqueue(newItem: T) {
    if (this.isFull()) {
      throw new Error("Queue overflow!! Cannot add any element");
    } else {
      this.queue.push(newItem);
      console.log(`Added element ${newItem} to queue\nNow queue is:`);
      this.queue.forEach((item, index) => {
        console.log(`queue[${index}]: ${item}`);
      });
    }
  }

  printQ() {
    this.queue.forEach((item, index) => {
      console.log(`queue[${index}]: ${item}`);
    });
  }
}

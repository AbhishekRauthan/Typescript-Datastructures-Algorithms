export default class Stack<T> {
  private stack: T[];
  private length: number;
  private readonly maxLength: number;

  constructor(len: number) {
    this.length = 0;
    this.maxLength = len;
    this.stack = new Array<T>(this.maxLength);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxLength;
  }

  push(newItem: T): false | number {
    if (this.isFull()) {
      return false;
    } else {
      const index = this.stack.push(newItem);
      return index
    }
  }

  pop(): false | T {
    if (this.isFull()) {
      return false;
    } else {
      const popedItem = this.stack.pop();
      this.printStack();
      return popedItem;
    }
  }

  top(): T {
    return this.stack[this.length - 1];
  }

  printStack() {
    this.stack.forEach((item, index) => {
      console.log(`stack[${index}]: ${item}`);
    });
  }
}

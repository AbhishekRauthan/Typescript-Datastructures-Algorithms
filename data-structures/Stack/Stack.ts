export class Stack<T> {
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

  push(newItem: T): void {
    if (this.isFull()) {
      throw new Error(`Stack overflow!! Cannot push new Item: ${newItem} into stack`);
    } else {
      this.stack.push(newItem);
      console.log(`Item: ${newItem} pushed in stack\nNow stack is:`);
      this.printStack();
    }
  }

  pop(): void {
    if (this.isFull()) {
      throw new Error(`Stack underflow!! Cannot pop any item from stack`);
    } else {
      const popedItem = this.stack.pop();
      console.log(`Item: ${popedItem} pushed in stack\nNow stack is:`);
      this.printStack();
    }
  }

  top(): T {
    return this.stack[this.length - 1];
  }

  printStack(): void {
    this.stack.forEach((item, index) => {
      console.log(`queue[${index}]: ${item}`);
    });
  }
}
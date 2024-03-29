/**
 * Stack is a linear data structure which follows a particular order in which the operations are performed.
 *
 * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
 */
export default class Stack<T> {
  private stack: T[];
  private length: number;
  private readonly maxLength: number;

  /**
   * Stack is a linear data structure which follows a particular order in which the operations are performed.
   *
   * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
   * @constructor
   * Intialize the stack with optional length
   * @param len if undifined maxLength is set to 10
   */
  public constructor(len?: number) {
    this.length = 0;
    this.maxLength = len ? len : 10;
    this.stack = new Array<T>();
  }

  /**
   * Returns true if stack is empty, else returns false
   */
  public isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Returns true if stack is full, else returns false
   */
  public isFull(): boolean {
    return this.length === this.maxLength;
  }

  /**
   *  Returns index if pushing item to stack is successfull, else returns false
   *  @param newItem item to be pushed of type T
   */
  public push(newItem: T): false | number {
    if (this.isFull()) {
      return false;
    } else {
      const index = this.stack.push(newItem);
      this.length++;
      return index;
    }
  }

  /**
   * Returns the poped element if is successfull, else returns false
   */
  public pop(): false | T {
    if (this.isEmpty()) {
      return false;
    } else {
      const popedItem = this.stack.pop();
      this.length--;

      return popedItem!;
    }
  }

  /**
   * Returns the topmost item in stack
   */
  public top(): T {
    return this.stack[this.length - 1];
  }

  /**
   * @returns the Stack
   */
  public getStack(): T[] {
    return this.stack;
  }
}

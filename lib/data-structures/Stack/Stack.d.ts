/**
 * Stack is a linear data structure which follows a particular order in which the operations are performed.
 *
 * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
 */
export default class Stack<T> {
    private stack;
    private length;
    private readonly maxLength;
    /**
     * Intialize the stack with optional length
     * @param len if undifined maxLength is set to 10
     */
    constructor(len?: number);
    /**
     * Returns true if stack is empty, else returns false
     */
    isEmpty(): boolean;
    /**
     * Returns true if stack is full, else returns false
     */
    isFull(): boolean;
    /**
     *  Returns index if pushing item to stack is successfull, else returns false
     *  @param newItem item to be pushed of type T
     */
    push(newItem: T): false | number;
    /**
     * Returns the poped element if is successfull, else returns false
     */
    pop(): false | T;
    /**
     * Returns the topmost item in stack
     */
    top(): T;
    /**
     * @returns the Stack
     */
    getStack(): T[];
}
//# sourceMappingURL=Stack.d.ts.map
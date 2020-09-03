# Stack Data Structure

## Defination

<br />

### Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it. code for stack:

```
export class Stack<T> {
  private stack: T[];
  private length: number;
  private readonly maxLength: number;

  constructor(len: number) {
    this.length = 0;
    this.maxLength = len;
    this.stack = new Array<T>(this.maxLength);
  }
}
```

<br/>

## Operations

1. ### isFull() / isEmpty()

   ### These are helper functions to check wether a queue is full/empty. These functions are not specific to this data structure but these and simillar functions makes interacting to these data structures much more easy for programmer <strong>Time Complexity is: O(1) </strong>

   ```
   isEmpty(): boolean {
      return this.length === 0;
   }

   isFull(): boolean {
      return this.length === this.maxLenght;
   }
   ```

  <br/>

2. ### Push()

   ### Push function is one of two major operations that is associated with Stack data structure, this operation <strong> <em>adds</em> an element to the <em>ending</em> of the stack </strong>. code for this:

   ```
   push(newItem: T): void {
      if (this.isFull()) {
         throw new Error(`Stack overflow!! Cannot push new Item: ${newItem} into stack`);
      } else {
         this.stack.push(newItem);
         console.log(`Item: ${newItem} pushed in stack\nNow stack is:`);
         this.printStack();
      }
   }
   ```

   ### Example for this:

   ### On a given Numbered Stack : 5-3-7-5-44-7-8, push is performed (add 89)

   ```
   output->
   Item: 89 pushed in stack
   Now stack is:
   stack[0]: 5
   stack[1]: 3
   stack[2]: 7
   stack[3]: 5
   stack[4]: 44
   stack[5]: 7
   stack[6]: 8
   stack[7]: 89
   ```

   ### On a given full numbered Stack, push is performed

   ```
   Error: Stack overflow!! Cannot push new Item: 89 into stack
   ```

3. ### Pop()
   ### Pop is the second major operation that is associalted with Stack data structure, this operation <strong><em>removes</em> an element from the <em>end</em> of the stack</strong>. code for this:
   ```
   pop(): void {
      if (this.isFull()) {
         throw new Error(`Stack underflow!! Cannot pop any item from stack`);
      } else {
         const popedItem = this.stack.pop();
         console.log(`Item: ${popedItem} poped out of stack\nNow stack is:`);
         this.printStack();
      }
   }
   ```
   
   ### Example for this:
   ### On a given Numbered Stack : 5-3-7-5-44-7-8, pop is performed
   ```
   output->
   Item: 8 poped out of stack
   Now stack is:
   stack[0]: 5
   stack[1]: 3
   stack[2]: 7
   stack[3]: 5
   stack[4]: 44
   stack[5]: 7
   ```
   ### On a given empty numbered Stack, pop is performed
   ```
   Error: Stack underflow!! Cannot pop any item from stack
   ```

4. ### Top 
   ### simillar to pop, it returns the "top" value in the data structure <strong>without modifying the stack</strong>
   ```
   top(): T {
      return this.stack[this.length - 1];
   }
   ```

5. ### PrintStack()
   ### PrintStack is also a helper function that traverses and prints out the content of the Stack. code for this:
   ```
   printStack(): void {
      this.stack.forEach((item, index) => {
         console.log(`stack[${index}]: ${item}`);
      });
   }
   ```

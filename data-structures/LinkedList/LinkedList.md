# Queue Data Structure

## Defination

<br />

### A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. code of Queue class:

```typescript
class Queue<T> {
  private queue: T[];
  private length: number;
  private maxLenght: number;

  constructor(len?: number) {
    this.maxLenght = len ? len : 10;
    this.length = 0;
    this.queue = Array<T>(this.maxLenght);
  }
}
```

<br/>

## Operations

1. ### isFull() / isEmpty()

   ### These are helper functions to check wether a queue is full/empty. These functions are not specific to this data structure but these and simillar functions makes interacting to these data structures much more easy for programmer <strong>Time Complexity is: O(1) </strong>

   ```typescript
   isEmpty(): boolean {
      return this.length === 0;
   }

   isFull(): boolean {
      return this.length === this.maxLenght;
   }
   ```

  <br/>

2. ### Dequeue()

   ### Dequeue function is one of two major operations that is associated with Queue data structure, this operation <strong> <em>removes</em> an element from the <em>beginning</em> of the queue </strong>. code for this:

   ```typescript
   dequeue() {
      if (this.isEmpty()) {
         throw new Error("Queue underflow!! Cannot remove any element");
      } else {
         const first: T = this.queue.shift();
         console.log(`Removed element ${first} from queue\nRest of the queue is:`);
         this.queue.forEach(console.log);
      }
   }
   ```

   ### Example for this:
   ### On a given Numbered Queue : 5-3-7-5-44-7-8, dequeue is performed  
   ```
   output-> 
   Removed element 5 from queue
   Rest of the queue is:
   queue[0]: 3
   queue[1]: 7
   queue[2]: 5
   queue[3]: 44
   queue[4]: 7
   queue[5]: 8
   ```
   ### On a given empty numbered Queue, dequeue is performed
   ```
   Error: Queue underflow!! Cannot remove any element
   ```

3. ### Enqueue()
   ### Enqueue is the second major operation that is associalted with Queue data structure, this operation <strong><em>adds</em> an element to the <em>end</em> of the queue</strong>. code for this:
   ```typescript
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
   ```
   ### Example for this:
   ### On a given Numbered Queue : 5-3-7-5-44-7-8, enqueue is performed (add 89)  
   ```
   output-> 
   Added element 89 to queue
   Now queue is:
   queue[0]: 5
   queue[1]: 3
   queue[2]: 7
   queue[3]: 5
   queue[4]: 44
   queue[5]: 7
   queue[6]: 8
   queue[7]: 89
   ```
   ### On a given full numbered Queue, enqueue is performed
   ```
   Error: Queue overflow!! Cannot add any element
   ```
4. ### PrintQ()
   ### PrintQ is also a helper function that traverses and prints out the content of the Queue. code for this:
   ```typescript
   printQ() {
      this.queue.forEach((item, index) => {
         console.log(`queue[${index}]: ${item}`);
      });
   }
   ``` 

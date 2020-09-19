# Set Data Structure

## Defination

<br/>

### In computer science, a set is an abstract data type that can store unique values, without any particular order. Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them.

```typescript
class Sets<T> {
  private set: T[];
}
```

<br/>

## Operations

1. ### has()

   ###

   ```typescript
   has(item: T) {
     return (this.set.indexOf(item) !== -1)
   }
   ```

  <br/>

2. ### values()

   ###

   ```typescript
   values() {
     return this.set;
   }
   ```

   ### Example for this:

   ### On a given Numbered Queue : 5-3-7-5-44-7-8, dequeue is performed

   ```

   ```

   ### On a given empty numbered Queue, dequeue is performed

   ```

   ```

3. ### add()
   ###
   ```typescript
   add(item: T) {
      if (!this.has(item)) {
        this.set.push(item);
      return true
      }
     return false
   }
   ```
   ### Example for this:
   ###
   ```
   
   ```
   ###
   ```
   
   ```
4. ### 
   ### 
   ```typescript
   remove(item: T) {
    if (this.has(item)) {
      const index: number = this.set.indexOf(item);
      this.set.splice(index, 1);
      return true
    }
    return false
   }
   ```

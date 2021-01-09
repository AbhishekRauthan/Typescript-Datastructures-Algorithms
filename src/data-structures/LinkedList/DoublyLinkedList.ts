interface DLNode<T> {
  value: T,
  prev: DLNode<T> | null
  next: DLNode<T> | null;
}

/**
 * Doubly Linked List is a data structure that is simillar to Linked List but contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.
 */
export default class DoublyLinkedList<T> {
  private head: DLNode<T>;
  private tail: DLNode<T>;
  private len: number;

  /**
 * Intialize Linked list with a value
 * @param val Any value of type T
 */
  public constructor(val: T) {
    this.head = {
      value: val,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.len = 1;
  }

  /**
   * Added a Node to end of doubly linked list and makes it the tail of linked list
   * @param val Any value of type T for last node
   */
  public append(val: T) {
    const newNode: DLNode<T> = {
      value: val,
      prev: null,
      next: null
    }
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.len++;
  }

  /**
 * Added a Node to front of doubly linked list and makes it head of linked list 
 * @param val Any value of T for front Node
 */
  public prepend(val: T) {
    const newNode: DLNode<T> = {
      value: val,
      prev: null,
      next: null
    }
    this.head.prev = newNode
    newNode.next = this.head;
    this.head = newNode;
    this.len++;
  }

  /**
  * A helper function that returns node at a given index 
  * @param index index of the node
  */
  gotoIndex(index: number): DLNode<T> {
    let counter = 0;
    let currentNode: DLNode<T> = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  /**
 * @returns content of Doubly Linked List as an array 
 */
  public printList() {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
 * Inserts a Node at a given index. 
 * If index <= 0 ; then prepend the Node
 * if index >= len ; then appemd the Node 
 * @param val Any value of T for Node
 * @param index index at which node is to be inserted
 */
  public insert(val: T, index: number) {
    if (index >= this.len) {
      this.append(val);
    } else if (index <= 0) {
      this.prepend(val);
    } else {
      const newNode: DLNode<T> = {
        value: val,
        prev: null,
        next: null
      };
      const leader = this.gotoIndex(index - 1)
      let holdPointer = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = holdPointer;
      holdPointer.prev = newNode;
      this.len++;
    }
  }

  /**
 * Removes a Node at a given index
 * @param index index of the node which is to be removed
 */
  public remove(index: number) {
    const leader = this.gotoIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.len--;
  }
}

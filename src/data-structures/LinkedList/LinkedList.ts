interface LNode<T> {
  value: T,
  next: LNode<T> | null;
}

/**
 *  Linked List is a linear data structure, in which the elements are not stored at contiguous memory locations.
 * 
 * Linked List consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
 */
export default class LinkedList<T> {
  private head: LNode<T>;
  private tail: LNode<T>;
  private len: number;

  /**
   *  Linked List is a linear data structure, in which the elements are not stored at contiguous memory locations.
   * 
   * Linked List consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
   * 
   * @constructor
   * Intialize Linked list with a value
   * @param val Any value of type T
   */
  public constructor(val: T) {
    this.head = {
      value: val,
      next: null
    }
    this.tail = this.head;
    this.len = 1;
  }

  /**
   * Added a Node to end of linked list and makes it the tail of linked list
   * @param val Any value of type T for last node
   */
  public append(val: T) {
    const newNode: LNode<T> = {
      value: val,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.len++;
  }

  /**
   * Added a Node to front of linked list and makes it head of linked list 
   * @param val Any value of T for front Node
   */
  public prepend(val: T) {
    const newNode: LNode<T> = {
      value: val,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.len++;
  }

  /**
   * A helper function that returns node at a given index 
   * @param index index of the node
   */
  gotoIndex(index: number): LNode<T> {
    let counter = 0;
    let currentNode: LNode<T> = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  /**
   * @returns content of Linked List as an array 
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
      const newNode: LNode<T> = {
        value: val,
        next: null
      };
      const leader = this.gotoIndex(index - 1)
      let holdPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdPointer;
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

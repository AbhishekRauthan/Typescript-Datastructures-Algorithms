interface DLNode<T> {
  value: T,
  prev: DLNode<T> | null
  next: DLNode<T> | null;
}

class DoublyLinkedList<T> {
  private head: DLNode<T>;
  private tail: DLNode<T>;
  private len: number;

  constructor(val: T) {
    this.head = {
      value: val,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.len = 1;
  }

  append(val: T) {
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

  prepend(val: T) {
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

  gotoIndex(index: number): DLNode<T> {
    let counter = 0;
    let currentNode: DLNode<T> = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  printList() {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.forEach((node: T) => {
      console.log(node)
    })
  }

  insert(val: T, index: number) {
    if (index >= this.len) {
      this.append(val)
    }
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

  remove(index: number) {
    const leader = this.gotoIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.len--;
  }
}

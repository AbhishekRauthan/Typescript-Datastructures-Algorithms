interface LNode<T> {
  value: T,
  next: LNode<T> | null;
}

export default class LinkedList<T> {
  private head: LNode<T>;
  private tail: LNode<T>;
  private len: number;

  constructor(val: T) {
    this.head = {
      value: val,
      next: null
    }
    this.tail = this.head;
    this.len = 1;
  }

  append(val: T) {
    const newNode: LNode<T> = {
      value: val,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.len++;
  }

  prepend(val: T) {
    const newNode: LNode<T> = {
      value: val,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.len++;
  }

  gotoIndex(index: number): LNode<T> {
    let counter = 0;
    let currentNode: LNode<T> = this.head;
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

  remove(index: number) {
    const leader = this.gotoIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.len--;
  }
}

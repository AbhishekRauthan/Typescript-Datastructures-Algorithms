interface DLNode<T> {
    value: T;
    prev: DLNode<T> | null;
    next: DLNode<T> | null;
}
/**
 * Doubly Linked List is a data structure that is simillar to Linked List but contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.
 */
export default class DoublyLinkedList<T> {
    private head;
    private tail;
    private len;
    /**
   * Intialize Linked list with a value
   * @param val Any value of type T
   */
    constructor(val: T);
    /**
     * Added a Node to end of doubly linked list and makes it the tail of linked list
     * @param val Any value of type T for last node
     */
    append(val: T): void;
    /**
   * Added a Node to front of doubly linked list and makes it head of linked list
   * @param val Any value of T for front Node
   */
    prepend(val: T): void;
    /**
    * A helper function that returns node at a given index
    * @param index index of the node
    */
    gotoIndex(index: number): DLNode<T>;
    /**
   * @returns content of Doubly Linked List as an array
   */
    printList(): T[];
    /**
   * Inserts a Node at a given index.
   * If index <= 0 ; then prepend the Node
   * if index >= len ; then appemd the Node
   * @param val Any value of T for Node
   * @param index index at which node is to be inserted
   */
    insert(val: T, index: number): void;
    /**
   * Removes a Node at a given index
   * @param index index of the node which is to be removed
   */
    remove(index: number): void;
}
export {};
//# sourceMappingURL=DoublyLinkedList.d.ts.map
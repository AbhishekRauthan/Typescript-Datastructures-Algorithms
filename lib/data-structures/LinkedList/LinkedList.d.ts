interface LNode<T> {
    value: T;
    next: LNode<T> | null;
}
/**
 *  Linked List is a linear data structure, in which the elements are not stored at contiguous memory locations.
 *
 * Linked List consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
 */
export default class LinkedList<T> {
    private head;
    private tail;
    private len;
    /**
     * Intialize Linked list with a value
     * @param val Any value of type T
     */
    constructor(val: T);
    /**
     * Added a Node to end of linked list and makes it the tail of linked list
     * @param val Any value of type T for last node
     */
    append(val: T): void;
    /**
     * Added a Node to front of linked list and makes it head of linked list
     * @param val Any value of T for front Node
     */
    prepend(val: T): void;
    /**
     * A helper function that returns node at a given index
     * @param index index of the node
     */
    gotoIndex(index: number): LNode<T>;
    /**
     * @returns content of Linked List as an array
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
//# sourceMappingURL=LinkedList.d.ts.map
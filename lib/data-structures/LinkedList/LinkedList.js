"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Linked List is a linear data structure, in which the elements are not stored at contiguous memory locations.
 *
 * Linked List consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
 */
var LinkedList = /** @class */ (function () {
    /**
     * Intialize Linked list with a value
     * @param val Any value of type T
     */
    function LinkedList(val) {
        this.head = {
            value: val,
            next: null
        };
        this.tail = this.head;
        this.len = 1;
    }
    /**
     * Added a Node to end of linked list and makes it the tail of linked list
     * @param val Any value of type T for last node
     */
    LinkedList.prototype.append = function (val) {
        var newNode = {
            value: val,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.len++;
    };
    /**
     * Added a Node to front of linked list and makes it head of linked list
     * @param val Any value of T for front Node
     */
    LinkedList.prototype.prepend = function (val) {
        var newNode = {
            value: val,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.len++;
    };
    /**
     * A helper function that returns node at a given index
     * @param index index of the node
     */
    LinkedList.prototype.gotoIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    /**
     * @returns content of Linked List as an array
     */
    LinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Inserts a Node at a given index.
     * If index <= 0 ; then prepend the Node
     * if index >= len ; then appemd the Node
     * @param val Any value of T for Node
     * @param index index at which node is to be inserted
     */
    LinkedList.prototype.insert = function (val, index) {
        if (index >= this.len) {
            this.append(val);
        }
        else if (index <= 0) {
            this.prepend(val);
        }
        else {
            var newNode = {
                value: val,
                next: null
            };
            var leader = this.gotoIndex(index - 1);
            var holdPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdPointer;
            this.len++;
        }
    };
    /**
     * Removes a Node at a given index
     * @param index index of the node which is to be removed
     */
    LinkedList.prototype.remove = function (index) {
        var leader = this.gotoIndex(index - 1);
        var unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.len--;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map
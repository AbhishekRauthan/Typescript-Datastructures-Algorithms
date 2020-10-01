"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList = /** @class */ (function () {
    /**
   * Intialize Linked list with a value
   * @param val Any value of type T
   */
    function DoublyLinkedList(val) {
        this.head = {
            value: val,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.len = 1;
    }
    /**
     * Added a Node to end of doubly linked list and makes it the tail of linked list
     * @param val Any value of type T for last node
     */
    DoublyLinkedList.prototype.append = function (val) {
        var newNode = {
            value: val,
            prev: null,
            next: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.len++;
    };
    /**
   * Added a Node to front of doubly linked list and makes it head of linked list
   * @param val Any value of T for front Node
   */
    DoublyLinkedList.prototype.prepend = function (val) {
        var newNode = {
            value: val,
            prev: null,
            next: null
        };
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.len++;
    };
    /**
    * A helper function that returns node at a given index
    * @param index index of the node
    */
    DoublyLinkedList.prototype.gotoIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    /**
   * Prints content of Doubly Linked List
   */
    DoublyLinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        array.forEach(function (node) {
            console.log(node);
        });
    };
    /**
   * Inserts a Node at a given index.
   * If index <= 0 ; then prepend the Node
   * if index >= len ; then appemd the Node
   * @param val Any value of T for Node
   * @param index index at which node is to be inserted
   */
    DoublyLinkedList.prototype.insert = function (val, index) {
        if (index >= this.len) {
            this.append(val);
        }
        else if (index <= 0) {
            this.prepend(val);
        }
        else {
            var newNode = {
                value: val,
                prev: null,
                next: null
            };
            var leader = this.gotoIndex(index - 1);
            var holdPointer = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = holdPointer;
            holdPointer.prev = newNode;
            this.len++;
        }
    };
    /**
   * Removes a Node at a given index
   * @param index index of the node which is to be removed
   */
    DoublyLinkedList.prototype.remove = function (index) {
        var leader = this.gotoIndex(index - 1);
        var unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.len--;
    };
    return DoublyLinkedList;
}());
exports.default = DoublyLinkedList;

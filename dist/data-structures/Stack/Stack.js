"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    /**
     * Intialize the stack with optional length
     * @param len if undifined maxLength is set to 10
     */
    function Stack(len) {
        this.length = 0;
        this.maxLength = len ? len : 10;
        this.stack = new Array(this.maxLength);
    }
    /**
     * Returns true if stack is empty, else returns false
     */
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
     * Returns true if stack is full, else returns false
     */
    Stack.prototype.isFull = function () {
        return this.length === this.maxLength;
    };
    /**
     * Returns index if pushing item to stack is successfull, else returns false
     * @param newItem item to be pushed of type T
     */
    Stack.prototype.push = function (newItem) {
        if (this.isFull()) {
            return false;
        }
        else {
            var index = this.stack.push(newItem);
            return index;
        }
    };
    /**
     * Returns the poped element if is successfull, else returns false
     */
    Stack.prototype.pop = function () {
        if (this.isFull()) {
            return false;
        }
        else {
            var popedItem = this.stack.pop();
            this.printStack();
            return popedItem;
        }
    };
    /**
     * Returns the topmost item in stack
     */
    Stack.prototype.top = function () {
        return this.stack[this.length - 1];
    };
    /**
     * Prints the Stack in format stack[{index}]: {item}
     */
    Stack.prototype.printStack = function () {
        this.stack.forEach(function (item, index) {
            console.log("stack[" + index + "]: " + item);
        });
    };
    return Stack;
}());
exports.default = Stack;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * set is a data structure that can store any number of unique values in any order you so wish.
 *
 * Set’s are different from arrays in the sense that they only allow non-repeated, unique values within them
 */
var Sets = /** @class */ (function () {
    function Sets() {
    }
    /**
     * Returns true if set has given item, else returns false
     * @param item - Item to check if it is set
     */
    Sets.prototype.has = function (item) {
        return (this.set.indexOf(item) !== -1);
    };
    /**
     * Returns the whole set
     */
    Sets.prototype.values = function () {
        return this.set;
    };
    /**
     * Adds a given item to set if set doesn't have item already
     * Returns index of item, else returns false
     * @param item - Item to add to set
     */
    Sets.prototype.add = function (item) {
        if (!this.has(item)) {
            var index = this.set.push(item);
            return index;
        }
        return false;
    };
    /**
     * Removes a given item from set if set does have item already,
     * returns index of item, else returns false
     * @param item - Item to be removed from set
     */
    Sets.prototype.remove = function (item) {
        if (this.has(item)) {
            var index = this.set.indexOf(item);
            this.set = this.set.splice(index, 1);
            return index;
        }
        return false;
    };
    /**
     * Returns the length of set
     */
    Sets.prototype.size = function () {
        return this.set.length;
    };
    /**
     * Returns a brand new Set which contain elements from both Sets
     * (one which is calling the func and another set which is passed as an argument)
     * @param otherSet - Another Set of Type T
     */
    Sets.prototype.union = function (otherSet) {
        var union = new Sets();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            union.add(e);
        });
        secondSet.forEach(function (e) {
            union.add(e);
        });
        return union;
    };
    /**
   * Returns a brand new Set which contain elements which are common in both Sets
   * (one which is calling the func and another set which is passed as an argument)
   * @param otherSet - Another Set of Type T
   */
    Sets.prototype.intersection = function (otherSet) {
        var intersection = new Sets();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersection.add(e);
            }
        });
        return intersection;
    };
    /**
   * Returns a brand new Set which contain elements which the other set do not contain
   * (one which is calling the func and another set which is passed as an argument)
   * @param otherSet - Another Set of Type T
   */
    Sets.prototype.difference = function (otherSet) {
        var difference = new Sets();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                difference.add(e);
            }
        });
        return difference;
    };
    /**
   * Returns a boolean value true if set(func calling) is subset of other set
   * @param otherSet - Another Set of Type T
   */
    Sets.prototype.isSubsetOf = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    };
    /**
   * Prints the Set in format set[{index}]: {item}
   */
    Sets.prototype.getSet = function () {
        return this.set;
    };
    return Sets;
}());
exports.default = Sets;
//# sourceMappingURL=Set.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = /** @class */ (function () {
    function Graph() {
        this.adList = new Map();
    }
    Graph.prototype.addNode = function (node) {
        this.adList.set(node, []);
    };
    Graph.prototype.addEdge = function (origin, destination) {
        this.adList.get(origin).push(destination);
        this.adList.get(destination).push(origin);
    };
    Graph.prototype.bfs = function (start, find) {
        var visited = new Set();
        var queue = [start];
        while (queue.length > 0) {
            var origin = queue.shift(); // mutates the queue
            var destinations = this.adList.get(origin);
            for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
                var destination = destinations_1[_i];
                if (destination === find) {
                    return true;
                }
                if (!visited.has(destination)) {
                    visited.add(destination);
                    queue.push(destination);
                }
            }
        }
        return false;
    };
    Graph.prototype.dfs = function (start, find, visited) {
        if (visited === void 0) { visited = new Set(); }
        visited.add(start);
        var destinations = this.adList.get(start);
        for (var _i = 0, destinations_2 = destinations; _i < destinations_2.length; _i++) {
            var destination = destinations_2[_i];
            if (destination === find) {
                return true;
            }
            if (!visited.has(destination)) {
                this.dfs(destination, find, visited);
            }
        }
        return false;
    };
    return Graph;
}());
exports.default = Graph;
//# sourceMappingURL=Graph.js.map
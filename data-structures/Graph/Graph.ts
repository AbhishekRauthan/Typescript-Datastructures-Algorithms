export default class Graph<K> {
  public adList: Map<K, K[]>

  constructor() {
    this.adList = new Map<K, K[]>()
  }

  public addNode(node: K) {
    this.adList.set(node, []);
  }

  public addEdge(origin: K, destination: K) {
    this.adList.get(origin).push(destination);
    this.adList.get(destination).push(origin);
  }

  public bfs(start: K, find: K) {
    const visited = new Set();
    const queue = [start]
    while (queue.length > 0) {
      const origin = queue.shift(); // mutates the queue
      const destinations = this.adList.get(origin);
      for (const destination of destinations) {
        if (destination === find) {
          return true
        }
        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        }
      }
    }

    return false;
  }

  public dfs(start: K, find: K, visited = new Set()) {
    visited.add(start);
    const destinations = this.adList.get(start);
    for (const destination of destinations) {
      if (destination === find) {
        return true;
      }
      if (!visited.has(destination)) {
        this.dfs(destination, find, visited);
      }
    }
    return false
  }
}
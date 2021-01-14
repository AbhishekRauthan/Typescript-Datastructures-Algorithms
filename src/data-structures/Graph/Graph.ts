/**
 * A Graph is a non-linear data structure consisting of nodes and edges. 
 * 
 * The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.
 */
export default class Graph<K> {
  private adList: Map<K, K[]>

  /**
 * A Graph is a non-linear data structure consisting of nodes and edges. 
 * 
 * The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.
 * 
 * @constructor 
 * Initialize graph with a new Map(Adjacency List) of type K,K[]
 */
  constructor() {
    this.adList = new Map<K, K[]>()
  }

  /**
   * @property returns Adjacency List
  */
  public get adlist() {
    return this.adList;
  }

  /**
   * add Node to Adjacency List with an empty array 
   * @param node 
   */
  public addNode(node: K) {
    this.adList.set(node, []);
  }

  /**
   * 
   * @param origin 
   * @param destination 
   */
  public addEdge(origin: K, destination: K) {
    this.adList.get(origin).push(destination);
  }

  /**
   * The Breadth First Search (BFS) traversal is an algorithm, which is used to visit all of the nodes of a given graph.
   * 
   * In this traversal algorithm one node is selected and then all of the adjacent nodes are visited one by one.
   * @param start 
   * @param find 
   */
  public bfs(start: K, find: K) {
    const visited = new Set<K>();
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
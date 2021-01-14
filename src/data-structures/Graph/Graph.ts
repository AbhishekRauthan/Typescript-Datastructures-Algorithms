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
   * add an edge to graph going from origin to destination
   * @param origin start Node
   * @param destination destination Node
   */
  public addEdge(origin: K, destination: K) {
    this.adList.get(origin).push(destination);
  }

  /**
   * The Breadth First Search (BFS) traversal is an algorithm, which is used to visit all of the nodes of a given graph.
   * 
   * In this traversal algorithm one node is selected and then all of the adjacent nodes are visited one by one.
   * @param start starting Node
   * @param find Node that is to be found
   * @returns Resultant Array containing all nodes traversed from origin to result or false to tell that bfs failed to find the connection
   */
  public bfs(start: K, find: K) {
    const visited = new Set<K>();
    const result: K[] = [start];
    const queue = [start]
    while (queue.length > 0) {
      const origin = queue.shift(); // mutates the queue
      const destinations = this.adList.get(origin);
      for (const destination of destinations) {
        if (destination === find) {
          result.push(destination);
          return result
        }
        if (!visited.has(destination)) {
          visited.add(destination);
          result.push(destination);
          queue.push(destination);
        }
      }
    }

    return false;
  }

  public dfs(start: K, find: K, visited = new Set()) {
    visited.add(start);
    const result: K[] = [start];
    const destinations = this.adList.get(start);
    for (const destination of destinations) {
      if (destination === find) {
        result.push(destination);
        return true;
      }
      if (!visited.has(destination)) {
        result.push(destination);
        this.dfs(destination, find, visited);
      }
    }
    return false
  }
}
const g = new Graph<number>();

g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);
g.addNode(6);

g.addEdge(1, 5);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 1);
g.addEdge(4, 2);
g.addEdge(5, 3);
g.addEdge(5, 4);
g.addEdge(6, 6);


console.log(g.dfs(1, 4));
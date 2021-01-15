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
  public getAdlist() {
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

  /**
   * In this algorithm, one starting vertex is given, and when an adjacent vertex is found,
   * it moves to that adjacent vertex first and tries to traverse in the same manner.
   * 
   * TODO: redo dfs for correct behavior
   * @param start starting Node
   * @param find final Node 
   */
//   public dfs(start: K, find: K, visited = new Set()) {
//     visited.add(start);
//     const result: K[] = [start];
//     const destinations = this.adList.get(start);
//     for (const destination of destinations) {
//       console.log(destination);
//       if (destination === find) {
//         console.log(destination, "inside find");

//         result.push(destination);
//         return result;
//       }
//       if (!visited.has(destination)) {
//         console.log(destination, "inside !visited");

//         result.push(destination);
//         this.dfs(destination, find, visited);
//       }
//     }
//     return false
//   }
};
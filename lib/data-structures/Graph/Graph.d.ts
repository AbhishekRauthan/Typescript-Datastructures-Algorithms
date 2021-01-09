export default class Graph<K> {
    adList: Map<K, K[]>;
    constructor();
    addNode(node: K): void;
    addEdge(origin: K, destination: K): void;
    bfs(start: K, find: K): boolean;
    dfs(start: K, find: K, visited?: Set<unknown>): boolean;
}
//# sourceMappingURL=Graph.d.ts.map
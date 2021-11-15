export type edgeParameter = [
  vertexFrom: string,
  vertexTo: string,
  weight?: number,
  bidirectional?: boolean
];
type edge = [vertexFrom: string, vertexTo: string, weight: number];

export default class Graph {
  edges: edge[];
  vertices: string[];

  constructor(edges: edgeParameter[] = [], allEdgesBiDirectional = false) {
    this.edges = [];
    this.vertices = [];
    edges.forEach((edge) => this.addEdge(edge, allEdgesBiDirectional));
  }

  addEdge(edge: edgeParameter, allEdgesBiDirectional = false): void {
    this.edges = [...this.edges, [edge[0], edge[1], edge[2] || 1]];

    if (edge[3] || allEdgesBiDirectional)
      this.edges = [...this.edges, [edge[1], edge[0], edge[2] || 1]];

    this.vertices = [...new Set([...this.vertices, edge[0], edge[1]])];
  }
}

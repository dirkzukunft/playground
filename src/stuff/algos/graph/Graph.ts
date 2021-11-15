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

  constructor(edges: edgeParameter[]) {
    this.edges = [];
    this.vertices = [];
    edges.forEach((edge) => this.addEdge(edge));
  }

  addEdge(edge: edgeParameter): void {
    this.edges = [...this.edges, [edge[0], edge[1], edge[2] || 1]];
    if (edge[3]) this.edges = [...this.edges, [edge[1], edge[0], edge[2] || 1]];

    this.vertices = [...new Set([...this.vertices, edge[0], edge[1]])];
  }
}

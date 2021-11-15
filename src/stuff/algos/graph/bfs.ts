// const graph: simpleUnweightedGraph = {
//   vertex1: ['vertex3', 'vertex4'],
//   vertex2: ['vertex3'],
//   vertex3: ['vertex1', 'vertex2', 'vertex7'],
//   vertex4: ['vertex1', 'vertex2', 'vertex3'],
//   vertex5: ['vertex6', 'vertex2'],
//   vertex6: ['vertex5', 'vertex7'],
//   vertex7: ['vertex5', 'vertex6'],
//   vertexNoEdges: [],
//   vertexUnconnected: ['vertexNoEdges'],
// };
// console.log(bfs(graph, 'vertex1'));

import { simpleUnweightedGraph } from './types';

export default function bfs(graph: simpleUnweightedGraph, start: string): string[] {
  const visited: string[] = [];
  const queue: string[] = [start];

  while (queue.length) {
    const node = queue.shift();
    if (node && node in graph && !visited.includes(node)) {
      visited.push(node);
      queue.push(...graph[node]);
    }
  }

  return visited;
}

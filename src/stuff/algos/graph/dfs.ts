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
// console.log(dfs(graph, 'vertex1'));

import { simpleUnweightedGraph } from './types';

export default function dfs(graph: simpleUnweightedGraph, start: string): string[] {
  const visited: string[] = [];
  const stack: string[] = [start];

  while (stack.length) {
    const node = stack.shift();
    if (node && node in graph && !visited.includes(node)) {
      visited.push(node);
      stack.unshift(...graph[node]);
    }
  }

  return visited;
}

// Rekursive Variante:
//
// export default function dfs(graph: simpleUnweightedGraph, start: string): string[] {
//   const visited: string[] = [];

//   _dfs(graph, start, visited);
//   return visited;
// }

// function _dfs(graph: simpleUnweightedGraph, node: string, visited: string[]): void {
//   visited.push(node);

//   graph[node].forEach((edgeTo) => {
//     if (!visited.includes(edgeTo)) _dfs(graph, edgeTo, visited);
//   });
// }

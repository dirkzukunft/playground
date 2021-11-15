import { simpleUnweightedGraph } from './types';

export default function isDAG(graph: simpleUnweightedGraph): boolean {
  let foundEdge;

  do {
    foundEdge = false;

    Object.keys(graph).forEach((node) => {
      if (graph[node].length === 0) {
        foundEdge = true;
        delete graph[node];

        for (const [key, edges] of Object.entries(graph)) {
          if (edges.includes(node)) graph[key].splice(edges.indexOf(node), 1);
        }
      }
    });
  } while (foundEdge);

  return Object.keys(graph).length === 0;
}

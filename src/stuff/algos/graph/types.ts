// simpleUnweightedGraph: {node: [...edgesTo]}

export type simpleUnweightedGraph = {
  [key: string]: string[];
};

// simpleWeightedGraph: {node: [...{edgeTo, weight}]}

export type simpleWeightedGraph = {
  [key: string]: [{ edgeTo: string; weight: number }];
};

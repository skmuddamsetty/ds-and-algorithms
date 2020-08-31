class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // removing all edges and vertex itself
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((item) => {
      this.removeEdge(vertex, item);
    });
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (item) => item !== v1
    );
  }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Dallas', 'Hong Kong');
g.addEdge('Dallas', 'Los Angeles');
g.addEdge('Los Angeles', 'Hong Kong');
// g.removeEdge('Tokyo', 'Dallas');
// console.log(g.adjacencyList);
g.removeVertex('Hong Kong');
console.log(g.adjacencyList);

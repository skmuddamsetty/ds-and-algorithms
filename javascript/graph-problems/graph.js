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

  dfs_recursive(vertex) {
    const results = [];
    const visited = {};
    this.dfs_recursive_helper(vertex, results, visited);
    return results;
  }

  dfs_recursive_helper(vertex, results, visited) {
    if (!vertex) {
      return;
    }
    visited[vertex] = true;
    results.push(vertex);
    this.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        this.dfs_recursive_helper(neighbor, results, visited);
      }
    });
  }

  dfs_iterative(vertex) {
    const results = [];
    const visited = {};
    this.dfs_iterative_helper(vertex, results, visited);
    return results;
  }

  dfs_iterative_helper(vertex, results, visited) {
    let stack = [vertex];
    let temp;
    while (stack.length) {
      // shift or pop
      // it just changes the order of the nodes that it processes
      temp = stack.pop();
      if (!visited[temp]) {
        results.push(temp);
        visited[temp] = true;
        stack.push(...this.adjacencyList[temp]);
      }
    }
  }

  bfs_iterative(vertex) {
    const results = [];
    const visited = {};
    this.bfs_iterative_helper(vertex, results, visited);
    return results;
  }

  bfs_iterative_helper(vertex, results, visited) {
    let stack = [vertex];
    let temp;
    while (stack.length) {
      // shift or pop
      // it just changes the order of the nodes that it processes
      // using shift here because we have to process the items in first come first serve process
      temp = stack.shift();
      if (!visited[temp]) {
        results.push(temp);
        visited[temp] = true;
        stack.push(...this.adjacencyList[temp]);
      }
    }
  }
}

// let g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addVertex('Hong Kong');
// g.addVertex('Los Angeles');

// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Tokyo', 'Hong Kong');
// g.addEdge('Dallas', 'Tokyo');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Dallas', 'Hong Kong');
// g.addEdge('Dallas', 'Los Angeles');
// g.addEdge('Los Angeles', 'Hong Kong');
// // g.removeEdge('Tokyo', 'Dallas');
// // console.log(g.adjacencyList);
// g.removeVertex('Hong Kong');
// console.log(g.adjacencyList);

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.adjacencyList);

console.log(g.dfs_recursive('A'));
console.log(g.dfs_iterative('A'));
console.log(g.bfs_iterative('A'));

// undirected
class Graph {
  constructor (){
    this.adjacencyList = {}
  }
  addVertex(name){
    if(!this.adjacencyList[name]) this.adjacencyList[name] = []
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v!== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v!== vertex1)
  }
  removeVertex(name) {
    for(let i = 0; i < this.adjacencyList[name].length; i++) {
      const adjacentVertex = this.adjacencyList[name].pop()
      this.removeEdge(name, adjacentVertex)
    }
    delete this.adjacencyList[name]
  }
}
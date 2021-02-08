class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert (value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while(true){
        if(value === current.value) return undefined
        if(value < current.value){
          if(current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if(value > current.value){
          if(current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(value) {
    if(this.root === null) return false
    let current = this.root
    let found = false
    while(!found && current) {
      if(value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if(!found) return false
    return current
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(14)
tree.insert(7)
tree.insert(2)
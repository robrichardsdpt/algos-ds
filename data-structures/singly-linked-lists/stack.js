// can use an array because it is efficient with pop() and push()
// no reindexing

// linked list
class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val){
    const newNode = new Node(val)
    if(!first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp =this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop(){
    if(!first) return null
    let removed = this.first
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.next
    this.size--
    return removed.value
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
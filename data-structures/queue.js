// array can use push and unshift, but you need to reindex

// linked list
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  // enqueue works like push
  enqueue(val){
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  // dequeue works like shift
  dequeue(){
    if(!first) return null
    let removed = this.first
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
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
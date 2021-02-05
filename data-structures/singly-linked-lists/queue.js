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
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
    return this
  }
  // dequeue works like shift
  dequeue(){
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
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if(!this.head) return undefined
    let current = this.head
    let prev = current
      while(current.next) {
        prev = current
        current = current.next
      }
      this.tail = prev
      this.tail.next = null
      this.length --
      if(this.length === 0) {
        this.head = null
        this.tail = null
      }
      return current
  }
  shift() {
    if(!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
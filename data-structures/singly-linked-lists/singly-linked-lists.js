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
  unshift(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head     
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if(index >= this.length || index < 0) return undefined
    counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, value) {
    let getValue = this.get(index)
    if(getValue) {
      getValue.value = value
      return true
    }
    return false
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
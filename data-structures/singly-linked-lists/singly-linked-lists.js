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
  insert(index, value) {
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    let getPrevValue = this.get(index - 1)
    const newNode = new Node(value)
    let temp = getPrevValue.next
    getPrevValue.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  remove(index) {
    if(index < 0 || index > this.length) return false
    if(index === 0) return !!this.shift()
    if(index === 0) return !!this.pop()
    let prevValue = this.get(index-1)
    let temp = prevValue.next
    prevValue.next = temp.next
    this.length --
    return true
  }

}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
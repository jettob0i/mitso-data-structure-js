
const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head !== null) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
    return null;
  }

  getUnderlyingList() {
    return this.head;
  }
};

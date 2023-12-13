module.exports = class Stack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    this.storage.push(element);
  }

  peek() {
    return this.storage.length > 0 ? this.storage[this.storage.length - 1] : undefined;
  }

  pop() {
    return this.storage.pop();
  }
};

const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class QueueComponent {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (this.length === 0) {
      return null;
    } else {
      return this.first;
    }
  }

  enqueue(value ) {
    const newComponent = new QueueComponent(value);

    if (this.length === 0) {
      this.first = newComponent;
      this.last = newComponent;
    } else {
      this.last.next = newComponent;
      this.last = newComponent;
    }

    this.length += 1;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } else {
      const removeComponent = this.first;
      this.first = this.first.next;
      this.length -= 1;

      return removeComponent.value;
    }
  } 
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue('hi');
// console.log(queue.getUnderlyingList())
// queue.getUnderlyingList();
console.log(queue.last.next)

module.exports = {
  Queue
};

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  addIfEmptyList(key, value) {
    let currentNode = new Node(key, value);
    this.head = currentNode;
    this.tail = currentNode;
  }

  addToHead(key, value) {
    if (!this.head) {
      this.addIfEmptyList(key, value);
    } else {
      let currentNode = new Node(key, value);
      currentNode.next = this.head;
      this.head = currentNode;
    }

    this.size ++;
  }
  
  addToTail(key, value) {
    if (!this.tail) {
      this.addIfEmptyList(key, value);
    } else {
      let currentNode = new Node(key, value);
      currentNode.prev = this.tail;
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
    this.size ++;
  }

  removeHead() {
    if (list.head === null) return null;
    this.head = this.head.next;
  }

  removeNode(key) {
    let currentNode;
    //traverse the linked list - find the node w/ matching key
    // set targetNode.prev.next = targetNode.next
    // set targetNode.next.prev = targetNode.prev
    // set tail to targetNode
  }

}

let listA = new LinkedList;
listA.addToTail('a',1);
listA.addToTail('b',2);
console.log(listA);




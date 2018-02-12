const removeNodes = (list, target) => {
  let dummyHead = {
    value: null,
    next: list,
  };

  let currentNode = dummyHead.next;
  let previousNode = dummyHead;

  while (currentNode) {
    if (currentNode.value === target) {
      previousNode.next = currentNode.next;
    } else {
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return dummyHead.next;
}

let listA = {
  value: 3, next: {
    value: 7, next: {
      value: 10, next: {
        value: 3, next: {
          value: 5, next: null
          }
        }
      }
    }
  };

console.log(
  removeNodes(listA, 7)
  //removeNodes(listA, 3)
);


// STRATEGY
//  Iterate through the linked list.  When a node's value is equal to the target value,
// remove the node and set the previous node's next property to removed node's next property.


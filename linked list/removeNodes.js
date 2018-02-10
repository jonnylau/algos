let removeNodes = (list, target) => {
  let dummyHead = {value: null, next: list};
  let current = dummyHead;
  let previous = dummyHead;

  while (current) {
    if (current.value === target) {
      previous.next = current.next;
      current.next = null;
      current = previous.next;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return dummyHead.next;
};

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
  // removeNodes(listA, 7),
  removeNodes(listA, 3)
);


// STRATEGY
//  Iterate through the linked list.  When a node's value is equal to the target value,
// remove the node and set the previous node's next property to removed node's next property.


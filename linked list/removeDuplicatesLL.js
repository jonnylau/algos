const removeDuplicates = (list) => {
  let map = {};
  let dummyHead = {
    value: null,
    next: list
  }

  let prevNode = dummyHead;
  let currNode = list;

  while (currNode) {
    if (map[currNode.value]) {
      prevNode.next = currNode.next;
      currNode = prevNode.next;
    } else {
      map[currNode.value] = 1;
      prevNode = prevNode.next;
      currNode = currNode.next;
    }
  }
  return dummyHead.next;
}

// STRATEGY
// use a hash map.  key (value) === 1; remove the node
// keep track of last node and currentNode
// last node's next -> currentNode's next

let listA = {
  value: 1, next: {
    value: 2, next: {
      value: 3, next: {
        value: 4, next: {
          value: 5, next: {
            value: 1, next: {
              value: 4, next: null
            }
          }
        }
      }
    }
  }
};

const printValues = (list) => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

console.log(
  printValues(
    removeDuplicates(listA)
  )
)
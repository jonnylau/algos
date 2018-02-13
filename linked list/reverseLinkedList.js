const reverseLL = (list) => {
  let newHead = {
    value: null,
    next: null,
  };
  let currentNode = list;

  while(currentNode) {
    let holder = currentNode.next;
    currentNode.next = newHead;
    newHead = currentNode; 
    currentNode = holder;
  }
  
  // let checkList = newHead;

  // while(checkList) {
  //   console.log(checkList.value);
  //   checkList = checkList.next;
  // }

  return newHead;
}

// STRATEGY
// make a holder for next node
// currentNode's next is newHead
// newHead points to currentNode
// currentNode = holder;

let listA = {
  value: 1, next: {
    value: 2, next: {
      value: 3, next: {
        value: 4, next: {
          value: 5, next: null
          }
        }
      }
    }
  };

console.log(
  reverseLL(listA)
)
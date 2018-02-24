let A = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        }
      }
    }
  }
}
const printList = (list) => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

const swap = (head,n) => {
  let storeHead = head;
  let storeHeadNext = head.next;

  let targetNode = head;
  let targetNodePrev = null;

  for (let i = 0; i < n-1; i++) {
    targetNodePrev = targetNode;
    targetNode = targetNode.next;
  }
  // console.log(storeHead.value, storeHeadNext.value, targetNodePrev.value, targetNode.value)
  
  storeHead.next = targetNode.next;
  targetNode.next = storeHeadNext;
  targetNodePrev.next = storeHead;
  
  printList(targetNode);
  //return targetNode;
}

// console.log(swap(A,3));
console.log(swap(A, 4));



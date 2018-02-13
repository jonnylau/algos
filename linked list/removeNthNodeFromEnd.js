var removeNthFromEnd = (head, n) => {
  let dummyHead = {
      val: null,
      next: head,
  }
  
  let target = dummyHead;
  let last = dummyHead;
  let i = 0;

  while (last) {
    if (i >= n+1) target = target.next;
    last = last.next;
    i++;
  };

  target.next = target.next.next;
  
  // console.log(target);
  return dummyHead.next;
};

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
    removeNthFromEnd(listA,2)
    )

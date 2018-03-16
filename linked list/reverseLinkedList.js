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

const reverseLL = (list) => {
  let newListHead = null;

  while (list) {
    let next = list.next;
    list.next = newListHead;
    newListHead = list;
    list = next;
  }
  return newListHead;
}

console.log(
  reverseLL(listA)
);
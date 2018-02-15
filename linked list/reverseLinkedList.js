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

// console.log(
//   reverseLL(listA)
// )

var reverseList = function (head) {
  let newHead = null;
  while (head) {
    let storeNext = head.next;

    head.next = newHead;
    newHead = head;
    head = storeNext;
  }
  return newHead;
};

console.log(reverseList(listA));
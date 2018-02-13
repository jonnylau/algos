// given an unsorted LL, return sorted LL
// STRATEGY -> make a new LL.  As you traverse the original list, iterate through the new LL, and if it's less than the current
// node's value, insert it at that point.

const insertSort = (list) => {
  let newList = {
    value: null,
    next: null,
  }
  let newHead = newList;

  while (list) {
    let nextInList = list.next;
    // initialize
    if (!newHead.next) {
      list.next = null;
      newList.next = list;
      break;
    }
    // list value is < newList value
    while (newList) {
      let prevNode = newList;
      let currNode = newList.next;
      if (list.value <= currNode.value) {
        list.next = currNode.next;
        prevNode.next = list;
        newList = newHead;
      } else {
        newList = newList.next;
      }
    }
    newList = newHead;
    list = nextInList;
  }
  return newList;
}
// TRANSFORMATION
// 100  NL: 100
// 2  NL: 2, 100
// 30  NL: 2, 100
    // (30 > 2, iterate)
    // (30 < 100, insert)
// 1 NL : 2,30,100
//   1,2,30,100

let listA = {
  value: 100, next: {
    value: 2, next: {
      value: 30, next: {
        value: 1, next: {
        }
      }
    }
  }
};
console.log(
  insertSort(listA)
);
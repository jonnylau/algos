// given an unsorted LL, return sorted LL
// STRATEGY -> make a new LL.  As you traverse the original list, iterate through the new LL, and if it's less than the current
// node's value, insert it at that point.

const insertSort = (list) => {
  let originalList = list.next;
  let newList = list;
  let newListHead = list;

  newList.next = null;
  
  while (originalList) {
    let nextOriginalList = originalList.next;
    // console.log(newList);

    while(newList) {
      let nextNewList = newList.next;
      
      if (originalList.value <= newList.value) {
        originalList.next = newList;
        if (newList === newListHead) newListHead = originalList;
      } else if (!newList.next) {
        originalList.next = null;
        newList.next = originalList;
        break;
      } else if (originalList.value >= newList.value && originalList.value <= newList.next.value) {
        originalList.next = newList.next;
        newList.next = originalList;
        break;
      }
      newList = nextNewList;
    }
    newList = newListHead;
    originalList = nextOriginalList;
  }
  return newListHead;
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
      value: 300, next: {
        value: 4, next: null
      }
    }
  }
};
console.log(
  insertSort(listA)
);
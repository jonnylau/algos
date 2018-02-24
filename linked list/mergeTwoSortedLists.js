const printList = (list) => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

let A = {
  value: 4,
  next: {
    value: 8,
    next: {
      value: 15,
      next: {
        value: 19,
        next: null,
      }
    }
  }
}

let B = {
  value: 7,
  next: {
    value: 9,
    next: {
      value: 10,
      next: {
        value: 16,
        next: null,
      }
    }
  }
}


const mergeTwoSortedLists = (a,b) => {
  let newListHead, newListTail = null;
  
  while(a || b) {
    if (!a) {
      newListTail.next = b;
      break;
    }
    if (!b) {
      newListTail.next = a;
      break;
    }

    let lessor;
    a.value <= b.value ? lessor = a : lessor = b;
    lessor === a ? a = a.next : b = b.next;
    // console.log(lessor.value);

    lessor.next = null;
    if (!newListHead) newListHead = lessor;
    if (newListTail) newListTail.next = lessor;
    newListTail = lessor;
  }
  printList(newListHead);
  //return newListHead;
}

mergeTwoSortedLists(A,B);
// traverse the lists (if either list NOT null)
// compare the head values of the two lists
// sotre lessor list's next value 
// the lessor's head's next will point to newlist's head

// STRATEGY:  create a new list.  Iterate through each list at the same time.  Choosing the lessor of the two.  Remove
// the head of the lessor tail and add it ot the tail of the new list

// TRANSFORMATION
//  4-8-15-19-22-null
//  7-9-10-16-null
// null

//  8-15-19-22-null
//  7-9-10-16-null
//  4-null

//  8-15-19-22-null
//  9-10-16-null
//  4-7
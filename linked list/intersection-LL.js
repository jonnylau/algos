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

let B = {
  value: 10,
  next: {
    value: 20,
    next: A.next.next.next.next,
      }
}

let C = {
  value: 1,
  next: null,
}
let D = {
  value: 2,
  next: null,
}
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let startA = headA;
  let startB = headB;

  let countA = 0;
  let countB = 0;

  while (headA) {
    countA++;
    headA = headA.next;
  }
  while (headB) {
    countB++;
    headB = headB.next;
  }

  let countDiff = Math.abs(countA - countB);

  let largerList, smallerList;
  if (countA >= countB) {
    largerList = startA;
    smallerList = startB;
  } else {
    largerList = startB;
    smallerList = startA;
  }

  for (let i = 0; i < countDiff; i++) {
    largerList = largerList.next;
  }
  while (smallerList) {
    if (smallerList === largerList) return smallerList;
    smallerList = smallerList.next;
    largerList = largerList.next;
  }
  return null;
};

console.log(
  getIntersectionNode(A,B),
  //getIntersectionNode(C,D)
)
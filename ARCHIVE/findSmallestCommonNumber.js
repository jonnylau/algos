const array1 = [
6,
7,
10,
25,
30,
63,
64,
];


const array2 = [
-1,
4,
5,
6,
7,
8,
50
];

const array3 = [
1,
6,
10,
14,
];

const findSmallestCommonNumber = (a, b, c) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (a[i]) {
    console.log(a[i],b[j],c[k]);
    
    if (b[j] === a[i] && c[k] === a[i]) {
      return a[i];
    }
    else if (b[j] < a[i]) {
      j += 1;
    }
    else if (c[k] < a[i]) {
      k += 1;
    } else if (b[j] > a[i] || c[k] > a[i]) {
      i += 1;
    }
  }
  return -1;
};

console.log(
  findSmallestCommonNumber(array1, array2, array3)
);

// STRATEGY 
// THEYRE ALL SORTED ARRAYS
// 
// three pointers
// if any of the pointers are < the target value 
  // advance the pointers and reassess.  If any of the other two pointers are greater than the target pointer.
  // then advance the target pointer.



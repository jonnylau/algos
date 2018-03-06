// STRATEGY
// iterate through the first array
  // iterate through the second array
  // if we find a match
    // iterate forward in both arrays
      // push into the holder array if matching elements
      // replace output array if holder > output length;


// if no match, then we choose between max of top and left
  

//        a - b - c - d - a - f 
//    0   0   0   0   0   0   0
// a  0   1   1   1   1   1   1
// c  0   1   1   2   2   2   2
// b  0   1   2   2   2   2   2
// c  0   1   2   3   3   3   3
// f  0   1   2   3   3   3   4

const findLongestCommon = (a,b) => {
  let dpArr = [[]];
  // constrcut 2X2 matrix
  for (let cols = 0; cols <= a.length; cols++) {
    dpArr[0].push(0);
  }
  for (let row = 0; row < b.length; row ++) {
    dpArr.push([0]);
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      // if they match
      if (b[i] !== a[j]) {
        dpArr[i + 1][j + 1] = Math.max(dpArr[i + 1][j], dpArr[i][j + 1]);
      } else if (b[i] === a[j]){
        // if they do match
        dpArr[i + 1][j + 1] = dpArr[i][j] + 1;
      }
    }
  }
  console.log(dpArr);
  let row = dpArr.length-1;
  let col = dpArr[0].length-1;

  let output = [];
  
  while (col > 0 && row > 0) {
    let current = dpArr[row][col];
    let left = dpArr[row][col-1];
    let up = dpArr[row-1][col];

    if (current > left && current > up) {
      output.push(a[col-1]);
      row -=1;
      col -=1;
    } else if (left > up) {
      col -=1;
    } else {
      row -=1;
    }
  }
  return output.reverse().join('');
}

let a = ['a', 'b', 'c', 'd', 'a', 'f'];
let b = ['a', 'c', 'b', 'c', 'f'];
console.log(
  findLongestCommon(a,b)
);

// let x = [[]];
// x[0][0] = 1;
// console.log(x);


// NAIVE
// let a = [2,3,4,5,6,'a','b','c','d'];
// let b = ['x', 'x', 'x', 'x', 'a', 'b', 'c', 'd', 2, 3, 4, 5, 6,'y','y','y'];

// const findLongestCommonSubsequence = (a,b) => {
//   let output = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (a[i] === b[j]) {
//         holder = [];
//         aSubStart = i;
//         bSubStart = j;

//         while (a[aSubStart] === b[bSubStart]) {
//           holder.push(a[aSubStart]);
//           aSubStart += 1;
//           bSubStart += 1;
//         }
//         //console.log(holder)
//         if (holder.length > output.length) {
//           output = holder.slice();
//         }
//       }
//     }  
//   }
//   return output
// }

// console.log(
//   findLongestCommonSubsequence(a,b)
// )
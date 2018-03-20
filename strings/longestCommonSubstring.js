let string1 = '12abcza';
let string2 = 'zabc123';
// output -> 'abcd'

const lcs = (str1, str2) => {
  let dpArr = [];

  for (let row = 0; row <= str2.length; row++) {
    let createRow = [];
    for (let col = 0; col <= str1.length; col++) {
      createRow.push(0);
    }
    dpArr.push(createRow);
  }

  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j< str1.length; j++) {
      if (str2[i] === str1[j]) {
        dpArr[i+1][j+1] = dpArr[i][j] + 1;
      }
    }
  }

   const findIndexLongestString = (dpArr) => {
    let max = 0;
    let maxCol;
    let maxRow;
    let longestString = '';

    for (let row = 1; row < dpArr.length; row ++) {
      for (let col = 1; col < dpArr[0].length; col++) {
        if (dpArr[row][col] > max) {
          max = dpArr[row][col];
          maxCol = col;
          maxRow = row;
        }
      }
    }
    while (dpArr[maxRow][maxCol] > 0) {
      longestString += string1[maxRow]
      maxRow -= 1;
      maxCol -= 1;
    }
    return longestString.split('').reverse().join('');
  }

  return findIndexLongestString(dpArr);
}

console.log(lcs(string1,string2));

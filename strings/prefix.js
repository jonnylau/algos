// KMP

// iterate through the array of letters once building an array as you go
// i @ 0 j@ 1
// if they match, add 1 immediately to the left output array pos
  // advance j and i
// otherwise reset i = output[i - 1] and test again
// until arr[j] === arr[i], set i[j] = output[i];

let testString = 'aabaabaaa';

const prefixKMP = (string) => {
  let arr = string.split('');
  let prefixArr = [0];
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === arr[i]) {
      // console.log('match', i, j)
      prefixArr[j] = prefixArr[j - 1] + 1; 
      i++;
      console.log(i,j)
    } else {
      
      while (arr[i] !== arr[j]) {
        // we reset i to be the last position in the prefixArray
        i = prefixArr[i - 1] || 0;
        console.log('not equal', i, j)
        // if they match, we set prefixArr to be 1 + length of last prefix
        if (arr[i] === arr[j]) {
          prefixArr[j] = prefixArr[i] + 1;
        }
        // if last prefix position is 0 (no prefix), then we set arr[j] to 0
        if (i === 0) {
          prefixArr[j] = 0;
          break;
        }
      }
      // console.log('no match j increment')
    }
  }
  return prefixArr;
}

const substringSearchKMP = (searchString, pattern) => {
  let prefixArr = prefixKMP(pattern);
  let counter = 0;

  const searchForPattern = (searchString, pattern, prefixArr) => {
    // iterate through the searchString
    let j = 0;
    for (let i = 0; i < searchString.length; i++) {
      if (searchString[i] === pattern[j]) {
        j++;
      } else {
        while (searchString[i] !== pattern[j]) {
          if (j === 0) break;
          else {
            j = prefixArr[j] - 1;
          }
        }
      }
      if (j === prefixArr.length -1) counter += 1;
    }
  }
  searchForPattern(searchString, pattern, prefixArr);
  return counter;
}
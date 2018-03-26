let testString = 'aacaagtttacaagc';

let makeSA = (string) => {
  let split = string.split('');
  let suffixArr = [];
  let lcpArr = [];

  for (let i = 0; i < string.length; i++) {
    let word = string.substring(i, string.length);
    suffixArr.push(word);
  }

  suffixArr.sort();
  console.log(suffixArr)

  for (let i = 0; i < suffixArr.length -1; i++) {
    let word1 = suffixArr[i];
    let word2 = suffixArr[i + 1];
    let shorterWord = Math.min(word2.length, word1.length);
    console.log(word1, word2, shorterWord)

    let count = 0;

    for (let j = 0; j < shorterWord; j++) {
      if (word1[j] === word2[j]) {
        count++;
      } else {
        lcpArr.push(count);
        break;
      }

      if (j === shorterWord) lcpArr.push(count);
    }
  }
  console.log(lcpArr)
  //find the index of max in LCP and value
  // index is the index of the word in the suffixArr
  // value is the longest repeating substring
  let longestPrefixIndex;
  let longestPrefixLength = 0;

  for (let i = 0; i < lcpArr.length; i++) {
    if (lcpArr[i] > longestPrefixLength) {
      longestPrefixLength = lcpArr[i];
      longestPrefixIndex = i;
    }
  }
  return suffixArr[longestPrefixIndex].substring(0,longestPrefixLength); 
}
console.log(
  makeSA(testString)
)

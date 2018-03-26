let testString = 'aacaagtttacaagc';
// output -> 'acaag'

let makeSA = (string) => {
  let suffixArr = [];
  let lcpArr = [];
  
  // create a suffix array containing all indexPos of the input string 
  for (let i = 0; i < string.length; i++) {
    suffixArr.push(i)

  }
  // sort the suffix array alphabetically
  // to line up suffixes to be adjacent to ones they are most common to
  suffixArr.sort( (a,b) => {
    if (string.substring(a) < string.substring(b)) return -1;
    if (string.substring(a) > string.substring(b)) return 1;
    return 0;
  });

  // CHECK THE SUFFIX ARRAY
  // for (index of suffixArr) {
  //   console.log(string.substring(index));
  // }

  //create an lcpArray by finding the lcp for each word and the word(s) next to it in the LCP
  for (let i = 0; i < suffixArr.length -1; i++) {
    let word1 = string.substring(suffixArr[i]);
    let word2 = string.substring(suffixArr[i + 1]);
    let shorterWordLength = Math.min(word2.length, word1.length);

    let count = 0;

    for (let j = 0; j < shorterWordLength; j++) {
      if (word1[j] === word2[j]) {
        count++;
      } else {
        lcpArr.push(count);
        break;
      }

      if (j === shorterWordLength) lcpArr.push(count);
    }
  }
  // CHECK THE LCP ARRAY
  // console.log(lcpArr);

  // find the index of max in LCP and value
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

  // return the longest repeated prefix
  let startIndexLRS = suffixArr[longestPrefixIndex];
  let endIndexLRS = startIndexLRS + longestPrefixLength;

  return string
    .substring(startIndexLRS, endIndexLRS);
}


console.log(
  makeSA(testString)
)

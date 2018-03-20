// NAIVE IMPLEMENTATION
//  does not account for overlapping substrings
const findSubSequence = (string) => {
  let strArr = string.split('');
  let store = {};
  let subStrs = [];

  const addToStore = (subStr) => {
    store[subStr] = (store[subStr] || 0) + 1; 
  }

  for (let i = 0; i < strArr.length; i++) {
    let subString = strArr[i];
    for (let j = i + 1; j < strArr.length; j++) {
      subString += strArr[j];
      addToStore(subString);
    }
  }
  for (sub in store) {
    store[sub] > 1 ? subStrs.push(sub) : null;
  }
  return subStrs;
}

console.log(findSubSequence('banana'));
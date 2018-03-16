const sortByFreq = (array) => {
  let store = {};
  for (num of array) {
    store[num] = (store[num] || 0) + 1;
  }
  // console.log(store);
  return a.sort((a, b) => {
    if (store[a] !== store[b]) {
      return store[a] - store[b];
    } else {
      return a - b;
    }
  })
}

a = [1,1,1,2,3,4,8,8,8,8,8,2,2,5,6,7,8,9];
console.log(
  sortByFreq(a)
);
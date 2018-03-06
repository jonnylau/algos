let a = [3,1,5,6,4,2]

const split = (array) => {
  let output = [];
  let i = 0;
  let holder = [];
  
  while (i <= array.length) {
    
    if (!holder.length || array[i] > holder[holder.length-1]) {
      holder.push(array[i]);
      i++;
    } else {
      output.push(holder);
      holder = [];
    }
  }
  return output;
}

const sortPair = (a,b) => {
  let output = [];
  let i = 0;
  let j = 0;
  
  while(output.length < a.length + b.length) {
    // or this... while (a[i] !== undefined || b[j] !== undefined)
    if (a[i] < b[j] || j === b.length) {
      output.push(a[i]);
      i += 1;
    } else {
      output.push(b[j]);
      j += 1;
    }
  }
  return output;
}

const mergeSort = (array) => {
  let sortedSubArr = split(array);
  console.log(sortedSubArr);
  // take two and return a sorted array until we have merged all pairs
  while(sortedSubArr.length > 1) {
    // console.log('made it into while', sortedSubArr.length)
    let currentHalf = [];
    for (let i = 0; i < Math.floor(sortedSubArr.length/2); i++) {
      // console.log('sorting pair')
      currentHalf.push(sortPair(sortedSubArr[2*i], sortedSubArr[2*i+1]));
    }
    console.log(currentHalf)
    sortedSubArr = currentHalf;
    currentHalf = [];
  }
  // reset sortedSubArr to all resulted merges
  return sortedSubArr;
}

mergeSort(a);
// sortPair([4],[2,10,15,50]);


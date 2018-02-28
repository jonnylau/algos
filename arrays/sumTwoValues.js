const input = [5,7,1,2,8,4,3];


// STRATEGY 1
// keep an hashmap for every number
// iterate through the array 
//  test if the (target - current) number has been visited (in hashmap)
//  an add numbers to the hashmap if they don't exist
const sumTwoValues = (array, target) => {
  let holder = {};
  for (number of array) {
    let isKey = target - number;
    if (holder[isKey]) return [number, isKey];
    holder[number] = holder[number] || 1;
  }
  return null;
}
// console.log(
//   sumTwoValues(input, 10)
// );

// STRATEGY 2
// sort the array
// compare [0] and [length-1]
//      if sum < target => move left pointer right
//      if sum > target => move right pointer left

const sumTwoValues_sort = (array, target) => {
  let sortedArray = array.sort();
  let low = 0;
  let high = array.length-1;

  while (low !== high) {
    if (array[high] + array[low] < target) {
      low += 1;
    } else if (array[high] + array[low] > target) {
      right -= 1;
    } else if (array[high] + array[low] === target) {
      return [array[low], array[high]];
    }
  }
}

console.log(sumTwoValues_sort(input, 10));

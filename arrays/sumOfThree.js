let arr = [5,4,2,6,1,3,7];

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length -1;
  let mid = Math.floor([arr.length - 1]/2);

  while (low <= high) {
    if (arr[mid] === target) return true;
    if (arr[mid] < target) {
      high = mid -1;
    }
    if (arr[mid] > target) {
      low = mid + 1;
    }
    mid = Math.floor((high - low) / 2);
  }
  return false;
}

const findThree = (array, targetSum) => {
  let sorted = array.sort( (a,b) => {
    return a - b;
  }); 
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(arr[i], arr[j]);
      let findDifference = targetSum - (array[i] + array[j]);
      if (binarySearch(arr, findDifference)) {
        return [array[i], array[j], findDifference]
      }
    }
  }

}
console.log(
  findThree(arr, 12)
)
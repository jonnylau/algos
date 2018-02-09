const binarySearch = (array, target) => {
  
  let low = 0;
  let high = array.length -1;

  while (high >= low) {
    let mid = Math.min( low + (high - low) / 2);
    if (array[mid] === target) {
      return mid;
    } 
    if (target < array[mid]) {
      high = mid - 1;
    }
    if (target > array[mid]) {
      low = mid + 1;
    }
  } 
  return -1;
}

console.log(
  binarySearch([5, 10, 15, 20, 25, 30, 45], 10),
  binarySearch([5, 10, 15, 20, 25, 30, 45], 2),
  binarySearch([5, 10, 15, 20, 25, 30, 45], 3),
  binarySearch([5, 10, 15, 20, 25, 30, 45], 5),
  binarySearch([5, 10, 15, 20, 25, 30, 45], 45)
);

// Strategy -> set a low, high and midpoint.  Low and High initialized to zero and array.length -1.
// if the number found at midpoint is less than the target number, move the high to be one position to the left of midpoint.
// vice versa
//  move the midpoint in both cases.

// transformation -> finding 7
// [5, 10, 15, 20, 25, 30, 45]
// 0 | low = 0, high = 6, mid = 3  checking 20
// 1 | low = 0, high = 2, mid = 1  checking 10
// 2 | low = 0, high = 0, mid = 0   checking 5
// 3 | low = 0, high = -1, mid = -1  return -1

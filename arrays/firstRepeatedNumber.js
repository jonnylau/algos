// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number. (See examples below to see what we mean here by the "first" duplicate).
// If there are no such elements, return -1.
// Note: Your solution should be O(n) runtime and O(1) space.

// Strategy: use current number to switch the signs of the number at array[number].  Everytime you see a number,
// look up it's position in the array.  If the number is negative, then return the original number.

const firstRepeatedNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    let currentNum = Math.abs(array[i]);
    let flagNum = currentNum -1;
    if (array[flagNum] < 0) {
      return currentNum;
    } else {
      array[flagNum] *= -1;
    }
  }
  return -1;
}

console.log(
  firstRepeatedNumber([2, 3, 3, 1, 5, 2]),
  firstRepeatedNumber([2, 3, 4, 1, 5, 2]),
  firstRepeatedNumber([2, 3, 4, 1, 5, 6])
);

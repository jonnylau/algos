const searchRotatedArray = (array, target) => {
  let start = 0;
  let end = array.length -1;
  // console.log(target);

  const search = (array, start, end, target) => {

    let mid = start + Math.floor( (end - start) / 2 );
    console.log(start, mid, end)

    if (array[mid] === target) {
      return mid;
    }
    
    // LEFT ORDERED:  if target is between an ordered left side -> normal BST -> else: move pointers right
    if (target <= array[mid] &&
        target >= array[start]) {
      return search(array, start, mid - 1, target);
    } 
    else if ( array[mid] > array[start]) {  
      return search(array, mid + 1, end, target);
    }
    // RIGHT ORDERED
    else if (target >= array[mid] &&
             target <= array[end]) {
      return search(array, mid + 1, end, target);
    }
    else if (array[end] > array[mid]) {
      return search(array, start, mid - 1, target) 
    }
  }
  const addTwo = (target) => {
    return target + 2;
  }
  
  return search(array, start, end, target);
}

console.log(
  searchRotatedArray([2,3,4,5,6,7,1], 1),
  searchRotatedArray([20,30,40,50,60,70,1,2,3,4,5,6], 2),
  searchRotatedArray([2,3,4,5,6,7,1], 1),
  searchRotatedArray([2,3,4,5,6,7,1], 1),
);
// STRATEGY: ONE PART IS ALWAYS GOING TO BE ORDERED CORRECTLY
  // NORMAL BST IF THE TARGET NUMBER IS BETWEEN THE MIN/MAX & MID
  // IF IT'S IN UNSORTED PORTION -> 

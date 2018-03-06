const input = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 20, 20, 50, 50, 50, 50, 50, 50, 50, 50, 50,100, 200];
const input1 = [1,2,3,3,4,5,5,5,5,5,5,5,5,6];

const findHighLow = (array, target) => {
  const findLow = (array, target) => {
    let low = 0;
    let mid = Math.floor((array.length -1) /2);
    let high = array.length -1;
    
    while (array[mid] !== target || array[mid-1] === array[mid]) {
      console.log(array[low], array[mid], array[high]);
      // move right
      if (array[mid] < target) {
        console.log('move right');
        low = mid +1;
        mid = Math.floor((high+low) / 2);
      } else if (array[mid] > target || (array[mid] === target && array[mid - 1] === array[mid])) {
        // move left
        console.log('move left');
        high = mid - 1;
        mid = Math.floor((high+low) /2 );
      }
    }
    return mid;
  }
  const findHigh = (array, target) => {
    let low = 0;
    let mid = Math.floor((array.length - 1) / 2);
    let high = array.length - 1;

    while (array[mid] !== target || array[mid + 1] === array[mid]) {
      console.log(array[low], array[mid], array[high]);
      // move right
      if (array[mid] < target || (array[mid] === target && array[mid + 1] === array[mid])) {
        console.log('move right');
        low = mid + 1;
        mid = Math.floor((high + low) / 2);
      } else if (array[mid] > target) {
        // move left
        console.log('move left');
        high = mid - 1;
        mid = Math.floor((high + low) / 2);
      }
    }
    return mid;
  }
  let low,
      high;

  low = findLow(array,target);
  high = findHigh(array, target);
  return [low,high];
}

console.log(
  findHighLow(input1, 5)
)
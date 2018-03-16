const partition = (arr, i, j) => {
  let low = i;
  let high = j;

  let pivotValue = arr[low];

  while (i < j) {
    // find point where going up, all numbers less than are to the left
    // and all numbers greater are to the right
    while (i < high && pivotValue >= arr[i]) {
      // walk i up to index where arr[i] > PV
      i++;
    }
    while (arr[j] > pivotValue) {
      // walk j down to index where arr[j] < PV
      j--;
    }

    if (i < j) {
      // swap the arr[i] & arr[j] to get them to be on the right side

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = arr[i];
    } else {
      // if i has moved past j
      break;
    }
  }

  arr[low] = arr[j];
  arr[j] = pivotValue;

  return j;
}

const quick_sort_Initilize = (arr, start, end) => {
  if (end > start) {
    let pivot_index = partition(arr, start, end);
    quick_sort_Initilize(arr, start, pivot_index - 1);
    quick_sort_Initilize(arr, pivot_index + 1, end);
    return arr;
  }
}

const quick_sort = (arr) => {
  quick_sort_Initilize(arr, 0, arr.length - 1);
}

let a = [5, 1, 10, 2, 4, 3];
quick_sort(a);
a;

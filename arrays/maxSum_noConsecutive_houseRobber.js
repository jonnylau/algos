let testArray = [1, 2, 100, -5, -3, -9, 10];

const maxSum = (array) => {
  let output = [0,0];
  for (let i = 0; i < array.length; i++) {
    if ((output[i] + array[i]) > output[i+1]) {
      output.push(array[i] + output[i]);
    } else {
      output.push(output[i+1]);
    }
  }
  return output[output.length -1];
}
console.log(
  maxSum(testArray)
  );
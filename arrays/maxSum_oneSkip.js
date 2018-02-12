let testArray = [1, 2, 100, -5, -3, -9, 10];

const maxSum = (array) => {
  let output = [0, 0];
  
  for (let i = 0; i < testArray.length; i++) {
    let greaterOfLastTwo = Math.max(output[i], output[i+1]);
    output.push(array[i] + greaterOfLastTwo);  
  }
  return Math.max(output[output.length-1], output[output.length-2]);
};

console.log(
  maxSum(testArray)
);
const numRows = 4;

const pascalsTriangle = (numRows) => {
  if (numRows < 1) return null;

  let output = [[1]];

  for (let i = 1; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      let left = output[i - 1][ j-1 ] || 0;
      let right = output[i - 1][j] || 0;
      row.push(left + right);
    }
    output.push(row);
  }
  return output;
}

console.log(
pascalsTriangle(4)
)
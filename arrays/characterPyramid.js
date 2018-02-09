const characterPyramid1 = (levels) => {
  const output = [];
  const baseLen = levels * 2 - 1;
  const midPoint = Math.floor(baseLen / 2);

  let leftBound = midPoint;
  let rightBound = midPoint;

  for (let j = 0; j < levels; j++) {
    
    let currentLevel = [];
    
    for (let i = 0; i < baseLen; i++) {

      if ( i >= leftBound && i <= rightBound) {
        currentLevel.push(true);
      } else {
        currentLevel.push(false);
      }
    }

    output.push(currentLevel);
    leftBound -= 1;
    rightBound += 1;

  }
  return output;
}

// PART1
// [
//   [false, false, true, false, false],
//   [false, true, true, true, false],
//   [true, true, true, true, true],
// ]

const makePyramid = (levels, symbol) => {
  const nested = characterPyramid1(levels);
  let output = '';

  for (level of nested) {
    for (place of level) {
      place === true ? output += symbol : output += ' ';
    }
    output += '\n'
  }
  return output;
}

console.log(makePyramid(4, '*'));
// PART 2
//   *
//  ***
// *****

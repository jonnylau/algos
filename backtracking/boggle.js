//  It is simple backtracking algorithm
class Boggle {
  constructor(grid, dictionary) {
    this.grid = grid;
    this.dictionary = dictionary;
    this.covered = [];

    for (let i = 0; i < this.grid.length; i++) {
      let coveredRow = [];
      for (let j = 0; j < this.grid.length; j++) {
        coveredRow.push(false);
      }
      this.covered.push(coveredRow);
    }
  }
  
  findAdjacentPositions(row,col) {
    let output = [];
    let rowBegin = Math.max(0,row - 1);
    let colBegin = Math.max(0,col - 1);
    let rowEnd = Math.min(this.grid.length -1, row + 1);
    let colEnd = Math.min(this.grid.length -1, col + 1);
    
    for (let i = rowBegin; i <= rowEnd; i++){
      for (let j = colBegin; j <= colEnd; j++) {
        if (i === row && j === col) continue;
        if (!this.covered[i][j]) {
          output.push([i,j]);
        }
      }
    }
    console.log(output);
    return output;
  }
  
  processLetter(row,col,buildWord, foundWords) {
    if (this.dictionary.indexOf(buildWord) !== -1) {
      foundWords.add(buildWord);
    }

    let adjacentLetters = this.findAdjacentPositions(row,col);
    
    for (let i = 0; i < adjacentLetters.length; i++) {
      let xPos = adjacentLetters[i][0];
      let yPos = adjacentLetters[i][1]
     
      buildWord += this.grid[xPos][yPos];
      this.covered[xPos][yPos] = true;
      this.processLetter(xPos, yPos, buildWord, foundWords);
      // found all the letters
        // need to backtrack
      buildWord = buildWord.slice(0,buildWord.length -1);
      this.covered[xPos][yPos] = false;
    }
  }

  findWords() {
    let foundWords = new Set([]);
    for (let i = 0; i < this.grid.length -1; i++) {
      for (let j = 0; j < this.grid.length - 1; j++) {
        let buildWord = '';
        this.processLetter(i, j, buildWord, foundWords);        
      }
    }
    return foundWords;
  }
 
}


let testBoard = [['c', 'a', 't'], ['r', 'r', 'e'], ['t', 'o', 'n']];
let testDictionary = ['cat', 'cater', 'art', 'toon', 'moon','not','eat','ton'];
let boggle = new Boggle(testBoard,testDictionary);

console.log(boggle.findWords());
class Boggle {
  constructor(board) {
    this.board = board;
    this.allWords = new Set;
    this.visited = [];

    for (let i = 0; i < this.board.length; i++) {
      let row = [];
      for (let j = 0; j < this.board.length; j++) {
        row.push(false);
      }
      this.visited.push(row);
    }
  }

  findAdjacents(i, j) {
    let adjacents = [];
    let minRow = Math.max(i - 1, 0);
    let maxRow = Math.min(i + 1, this.board.length - 1);
    let minCol = Math.max(j - 1, 0);
    let maxCol = Math.min(j + 1, this.board.length - 1);

    for (let row = minRow; row <= maxRow; row++) {
      for (let col = minCol; col <= maxCol; col++) {
        if (row === i && col === j) {
          continue;
        } else if (this.visited[row][col] === false) {
          adjacents.push([row, col]);
        }
      }
    }
    return adjacents;
  }

  findWordsFromPos(row, col, buildWord) {
    let adjacents = this.findAdjacents(row, col);

    for (let adjacent of adjacents) {
      let adjacentIndexRow = adjacent[0];
      let adjacentIndexCol = adjacent[1];
      buildWord += this.board[adjacentIndexRow][adjacentIndexCol];
      if (!this.allWords.has(buildWord)) {
        this.allWords.add(buildWord);
      }

      this.visited[adjacentIndexRow][adjacentIndexCol] = true;
      this.findWordsFromPos(adjacentIndexRow, adjacentIndexCol, buildWord);

      buildWord = buildWord.slice(0, buildWord.length - 1);
      this.visited[adjacentIndexRow][adjacentIndexCol] = false;
    }
  }

  findAllWords(target) {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board.length; col++) {
        let buildWord = '';
        this.findWordsFromPos(row, col, buildWord,target);   
      }
    }
  }

  printBoard() {
    console.log(this.board);
  }
}

const testBoard = [
  ['a', 'b'],
  ['c', 'd']
]

let boggle1 = new Boggle(testBoard);
boggle1.findAllWords();
console.log(
  boggle1.allWords
);
const rps = (rounds) => {
  const options = ['rock', 'paper', 'scissors'];
  const output = [];

  let inner = (currentRound) => {
    
    for (let i = 0; i < options.length; i++) {
      currentRound.push(options[i]);
      if (currentRound.length === rounds) {
        output.push(currentRound.slice());
      } else {
        inner(currentRound);
      }
      currentRound.pop();
    }
  }
  inner([]);
  return output.length;
}

// console.log(
//   rps(4),
// );


// transformation
// [r]
// ...
// [r,r,r,r]  -> push a copy to output remove last item added
// [r,r,r]    -> iterate to next item in the array

const rps1 = (rounds) => {
  const options = ['rock', 'paper', 'scissors'];
  let output = [];

  const makeCombos = (round) => {

    for (let i = 0; i < options.length; i++) {
      round.push(options[i]);
      // console.log(round, rounds, round.length);

      if (round.length === rounds) {
        output.push(round.slice());
        // if a round is complete, we push to the output.  Then we continue through the loop (next option)
        // and pop the last option Line 50
      }
      if (round.length < rounds) {
        makeCombos(round);
      }
      round.pop();
    }
  }
  makeCombos([]);
  return output;
}
console.log(
  rps1(4)
)
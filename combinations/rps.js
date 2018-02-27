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

console.log(
  rps(4),
);


// transformation
// [r]
// ...
// [r,r,r,r]  -> push a copy to output remove last item added
// [r,r,r]    -> iterate to next item in the array
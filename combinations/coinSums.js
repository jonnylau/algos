let coinSums = (denominations, amount) => {
  let solution = [];
  for (let i = 0; i < amount + 1; i++) {
    solution[i] = 0;
  }
  
  solution[0] = 1;
  
  for (let j = 0; j < denominations.length; j++) {
    for (let i = denominations[j]; i < amount + 1; i++) {
      solution[i] += solution[i - denominatinos[j]];
    }
  }
  return solution[solution.length -1];
}


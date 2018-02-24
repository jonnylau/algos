let treeA = {
  value: 10,
  left: {
    value: 7,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null,
    }
  },
  right: {
    value: 20,
    left: {
      value: 15,
      left: null,
      right: null,
    },
    right: {
      value: 40,
      left: null,
      right: null,
    }
  }
};

const levelOrder = (tree) => {
  let level = 1;
  let output = {}

  let currentLevel = [tree];
  let nextLevel = [];

  if (!tree) return output;
  
  while(currentLevel.length > 0) {
    let currentNode = currentLevel.shift()
    output[level] = (output[level] || []).concat(currentNode.value);

    if (currentNode.left) nextLevel.push(currentNode.left);
    if (currentNode.right) nextLevel.push(currentNode.right);

    if (currentLevel.length === 0) {
      let tempEmpty = currentLevel;
      currentLevel = nextLevel;
      nextLevel = tempEmpty;
      level += 1;
    }
  }
  return output;
}
console.log(
  levelOrder(treeA)
)
//STRATEGY BFS ->
// Have a current LEVEL and Next Level queue.  When there is something in the current level queue, add it's left and right in, then remove it from stack
// when there is nothing, switch the stacks

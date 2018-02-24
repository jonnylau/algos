const getAllNodeValuesDFS = (bst, output) => {
  if (!bst) {
    return [];
  }
  return [bst.value]
    .concat(getAllNodeValuesDFS(bst.left))
    .concat(getAllNodeValuesDFS(bst.right))
}

const getAllNodeValuesBFS = (bst) => {
  if (!bst) return [];
  
  let output = [bst.value]
  let queue = [bst.left, bst.right];
  
  while(queue.length > 0) {
    if(queue[0]) {
      output.push(queue[0].value);
      if (queue[0].left) queue.push(queue[0].left)
      if (queue[0].right) queue.push(queue[0].right)
    }
    queue.shift()
  }
  return output;
}



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

console.log(
  getAllNodeValuesDFS(treeA),
  getAllNodeValuesBFS(treeA)
)
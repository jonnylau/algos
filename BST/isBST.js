//STRATEGY

// traverse down leftside of a tree, adding to the stack as you go.  And reset the tree to it's left node.
// when !Tree, pop off the last tree.  reset tree to popped's right.
// KEY: 2 situations.  
//  1. you traversed left and !tree -> pop off the last tree on stack and reset tree to pop-ed right
//  2. you traversed right (^above) and !tree ->  ^^ same

//    50
//   25  75

// PATTERN : stack has a tree, or tree is not !

// stack [50] tree -> 25
// stack [50,25] tree -> 25.left
// stack [50] tree ->  25.right
// stack [] tree -> 50.right




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


const isBST = (tree) => {
  let stack = [];
  let output = [];

  while(tree || stack.length > 0) {
    if (tree) {
      stack.push(tree);
      tree = tree.left;
      continue;
    }
    output.push(stack[stack.length-1].value);
    tree = stack[stack.length-1].right;
    stack.pop()
  }
  return output;
}
console.log(
  isBST(treeA)
)

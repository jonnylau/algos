// STRATEGY -> think of the leaf as the basecase

//      10
//   7      20
// 5   9  15  40

// reduce the target by current value
// base case is a leaf (no left or right)
//   return target === 0 (T/F)
// testing left || right will preserve true value when results bubble up 

  // TESTING FOR 22
//         Result
//     L    ||    R
// T ||  F    F || F

//         Result
//     T    ||    F
// T ||  F    F || F

//         T
//     T    ||    F
// T ||  F    F || F




const hasPathSum = (tree, target) => {
  if (!tree) return false;
  
  target -= tree.value;
  if (!tree.left && !tree.right) return target === 0;
  return hasPathSum(tree.left, target) || hasPathSum(tree.right, target);
};

// INNER RECURSIVE
const hasPathSumA = (tree, target) => {
  if (!tree) return false;
  let output = false;

  const inner = (tree, target) => {
    if (!tree) return;
    target -= tree.value;

    if (!tree.left && !tree.right) {
      target === 0 ? output = true : output = output || false;
    }

    let children = [tree.left, tree.right];
    children.forEach((branch) => {
      return inner(branch, target);
    })
  }

  inner(tree, target);
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
// pathSums are 22, 26, 45, 70

// console.log(
//   hasPathSumA(treeA, 70),
//   hasPathSumA(treeA, 45),
//   hasPathSumA(treeA, 22),
//   hasPathSumA(treeA, 26),
//   hasPathSumA(treeA, 90)
// );

console.log(
  hasPathSum(treeA, 70),
  hasPathSum(treeA, 45),
  hasPathSum(treeA, 22),
  hasPathSum(treeA, 26),
  hasPathSum(treeA, 90)
);


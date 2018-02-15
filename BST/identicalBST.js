const identical = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;

  if (tree1 && tree2) {
    return (tree1.value === tree2.value &&
            identical(tree1.left, tree2.left) &&
            identical(tree1.right, tree2.right)
            )
  } else {
  // needed if one tree exists and the other doesnt
    return false;
  }
};
//strategy
// KEY TIP -> BASE CASE: LEAF (leaf is a tree, where left and right are null)
// Tree is identical when it's 1. value, and it's 2. left and 3. right branches are the same
// base case:  hitting a leaf -> current leaf's values are the same and both branches === null
// we can use an or operator (true && false) => false
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

let treeB = {
  value: 10,
  left: {
    value: 7,
    left: {
      value: 5,
      left: {
        value: 200,
        left: null,
        right: null
      },
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
      value: 70,
      left: null,
      right: null,
    }
  }
};

let treeC = {
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

// A,C -> true
// A,B -> false (mismatched lengths)

console.log(
  identical(treeA, treeB),
  identical(treeA, treeC)
  )
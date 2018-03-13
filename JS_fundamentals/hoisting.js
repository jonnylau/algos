
var foo = "bar";

function bar() {
  var foo = "baz";

  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  baz();
}

bar();
foo; 		// "bar"
bam; 		// "yay"
baz(); 		// Error!

// WHAT IS HOISTED ?
  // function declarations and variable declarations are hoisted.

// COMPILATION
// 1 - global scope - foo VAR is declared
// 3 - global scope - bar FUNC is declared
// 4 - bar scope - foo VAR is declared
// 6 - bar scope - baz FUNC is declared
// 6 - baz scope - foo PARAMETER is declared

// EXECUTION
// 1 - LHS ref to foo -> assignment
// 13 - RHS ref to bar -> execute
  //  4 LHS ref to foo -> found in scope-> assignment as 'baz'
  // 10 RHS ref to baz -> execute
  //  7 LHS ref to foo -> found in scope-> assignment to 'bam'
  //  8 LHS ref to bam -> not found -> go up
  //                      bar scope not found -> go up
  //                      global scope not found -> auto register var bam
// 14 - RHS ref to foo -> found -> 'bar' 
// 15 - RHS ref to bam -> found -> 'yay'
// 16 - RHS ref to baz -> not in global scope -> Error 
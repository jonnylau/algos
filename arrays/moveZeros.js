let moveZeros = (array) => {
  let read = 0;
  let write = 0;
  while (read < array.length) {
    if (array[read] === 0) read += 1;
    else {
      array[write] = array[read];
      write += 1;
      read += 1;
    }
  }
  while (write < array.length) {
    array[write] = 0;
    write ++;
  }
  return array;
}

let array = [0,3,4,5,0,9,3,1,0];

console.log(
  moveZeros(array)
)

// STRATEGY : ITERATE AND REPLACE WITH THE NEXT CHARACTER IF IT'S NOT ZERO (DUPLICATE THEN REPLACE LOOP).
//            USE POINTERS TO UPDATE THE READ (SKIPPING THE ZEROS)
//            WHEN READ EXCEEDS ARRAY LENGTH, FILL IN THE REST OF THE ARRAY @ WRITE INDEX WITH ZEROS            
/*

[0,3,4,5,0,9,3,1,0]; R-0 W-0 SKIP READ

[3,3,4,5,0,9,3,1,0]; R-1 W-0 WRITE INCREMENT BOTH

[3,4,4,5,0,9,3,1,0]; R-2 W-1 WRITE INCREMENT BOTH

[3,4,5,5,0,9,3,1,0]; R-3 W-2 WRITE INCREMENT BOTH

[3,4,5,5,0,9,3,1,0]; R-4 W-3  SKIP READ

[3,4,5,9,0,9,3,1,0];   R-5 W-3  WRITE INCREMENT BOTH

[3,4,5,9,3,9,3,1,0];   R-6 W-4  WRITE INCREMENT BOTH
[3,4,5,9,3,1,3,1,0];   R-7 W-5  WRITE INCREMENT BOTH
[3,4,5,9,3,1,3,1,0];   R-8 W-6  SKIP
 ---OUT OF BOUNDS ---
[3,4,5,9,3,1,0,0,0];   W-6

*/

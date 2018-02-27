const isPalindrome = (number) => {
  let copy = number;
  let remainder = 0;
  let reversed = 0;

  while (copy > 0) {
    remainder = copy % 10;
    reversed = reversed * 10 + remainder;
    copy = (copy - remainder) / 10;
  }

  return reversed === number;
}

// STRATEGY
// build a reversed number based on the remainder of input modulo 10.  While copy of number > 0
// the copy is updated to be itself less the remainder of (input % 10) /10.  and the reversed number
// will be itself * 10 + remainder (input % 10)


// naive
const isPalindromeN = (number) => {
  
  if (number < 0) return false;


  const digitArray = number.toString().split('');
  const len = digitArray.length - 1;

  for (let i = 0; i < digitArray.length; i++) {
    if (digitArray[i] !== digitArray[len - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(1337));
console.log(isPalindrome(73237));
console.log(isPalindrome(-1337));

a


var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  let output = '';
  let toThrees = [];
  let place = false;

  let start = this;

  // split number into groups of threes
  while (start !== 0) {
    let remainder = start % 1000;
    toThrees.push(remainder);
    start = (start - remainder) / 1000;
    place = place * 1000 || 1;
  }
  
  // iterate through groups of three
  for (let i = toThrees.length - 1; i >= 0; i--) {
    let num = toThrees[i];

    while (num !== 0) {
      if (num > 100) {
        // if the number is 3 digits long
        let remainder = num % 100;
        let hundred = (num - remainder) / 100;
        output += (numbersToWords[hundred] + ' hundred ');
        num = remainder;
      } else if ( num < 100 && num > 10) {
        // if the number is two digits long  
        if (num < 20) {
          output += (numbersToWords[num] + ' ');
          num = 0;
        } else {
          // if the number is one digit
          let remainder = num % 10;
          let ten = (num - remainder);
          output += (numbersToWords[ten] + ' ');
          num = remainder;
        }
      } else {
        output += (numbersToWords[num] + ' ');
        num = 0;
      } 
    }

    // tack on the place
    if (numbersToPlace[place] && toThrees[i] !== 0) {
      output += (numbersToPlace[place] + ' ');
    }
    
    // update the place
    place /= 1000;

  }
  return output;
}

// (100).toEnglish();
let num = 18;
console.log(num.toEnglish())
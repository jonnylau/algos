const sampleIP = ['2001:0db8:0000:0000:0000:ff00:0042:8329', '3:0db8:0:01:F:ff0:0042:8329', '12.0.246.95']

// input
// output
//  check if IPV4 vs IPV6 or neither

// strategy
// split the string into an array
  // if string.length === 4 then check if each item is a valid number or string character
  // return IPV4 or false
// split the string based on colons => array of substings
  // if length !== 8, return false
// iterate through strings
  // split each substring into an array of chars
    // it must have one character
    // all characters must be a integer or a letter

    // if v4check output.push (ipv4)
    // elseif v6check output.push(ipv6)
    // else output.push(neither)

const testIP = (ips) => {
  const validChar = /[a-zA-Z0-9]/i
  const output = [];
  
  const v4Check = (ip) => {
    let split = ip.split('.');
    if (split.length !== 4) return;
    for (num of split) {
      let toInt = parseInt(num, 10);
      if (typeof toInt !== 'number' || toInt < 0 || toInt > 255) {
        return false;
      }
    }
    return true;
  }

  const v6Check = (ip) => {
    let setArray = ip.split(':');
    if (setArray.length !== 8) return false;
    
    for (set of setArray) {
      let splitSet = set.split('');
      for (char of splitSet) {
        if (!char.match(validChar)) return false;
        }
      }
    return true;
  }

  for (ip of ips) {
    if (v4Check(ip)) output.push('v4');
    else if (v6Check(ip)) output.push('v6');
    else output.push('neither');
  }
  return output;
}


console.log(
  testIP(sampleIP),
);

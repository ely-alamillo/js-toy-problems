// Write a function balancedBrackets that accepts a string and
// returns true ifthe parentheses are balanced and false otherwise.

const balancedBrackets = str => {
  let line = str.split('');
  const stack = [];
  let ans = true;
  const open = {'(': ')', '{': '}', '[': ']'};
  const close = {')': true, '}': true, ']': true};
  
  line.forEach((item) => {
    if (open[item]) {
      stack.push(item);
    } else if (close[item]) {
      if (open[stack.pop()] !== item) ans = false;
    }
  });
  return ans && stack.length === 0;
};

console.log(balancedBrackets('[({})]'));   // true
console.log(balancedBrackets('[](){}')); // true
console.log(balancedBrackets('[(]{)}')); // false

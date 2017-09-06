// An Armstrong number is an n-digit number that is equal to the sum of the n'th
// powers of its digits. Determine if the input numbers are Armstrong numbers.
// Return either true or false .

// For example with the number 153 there are 3 digits so you would add together
// the cubed values of all the digits like this: 1^3 + 5^3 + 3^3 === 153

const isArmstrongNumber = (n) => {
  const len = n.toString().length;
  let temp = n;
  let a, count = 0;

  while (temp > 0) {
    a = temp % 10;
    count += Math.pow(a, len);
    temp = parseInt(temp / 10);
  }
  if (count === n) {
    return true;
  }
  return false;
}

console.log(isArmstrongNumber(153)) // --> true
console.log(isArmstrongNumber(370)) // --> true
console.log(isArmstrongNumber(265)) // --> false
console.log(isArmstrongNumber(157)) // --> false

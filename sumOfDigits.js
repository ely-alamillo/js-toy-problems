// Write a function called sumOfDigits that given a positive integer, returns the sum of its digits.
// Assume all numbers will be positive.

const sumOfDigits = (number) => {
  let sum = 0;
  const digits = (number + '')
  const digitsArray = digits.split('').map(num => parseInt(num));
  sum = digitsArray.reduce((sum, num) => {
    return sum + num;
  });
  return sum;
};

console.log(sumOfDigits(123)); // --> 5
console.log(sumOfDigits(5325149)); // --> 29

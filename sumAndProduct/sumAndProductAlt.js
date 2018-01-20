/**
 * Given a sum and a product, find two numbers, x and y, where x + y === sum, and x * y === product. You will return this in an array. x and y exist in [0, 1000] (that is, from 0 to 1000, inclusive).

    For example, calling sumAndProduct(6, 9) should return [3, 3] because 3 + 3 === 6, and 3 * 3 === 9.
    sumAndProduct(13, 12) should return [1, 12] because 1 + 12 === 13, and 1 * 12 === 12.

    Please make sure to return your array such that x <= y in the format [x, y].

*/

function sumAndProduct(sum, product) {
    const array = [];
    let greatest = null;
    if (sum >= product) greatest = sum;
    else greatest = product;
    
    for (let i = 0; i <= greatest; i++) {
      for (let j = 0; j <= greatest; j++) {
        if (i + j === sum && i * j === product) {
          array.push(i,j)
          return array
        }
      }
    }
    return null;
  }

console.log(sumAndProduct(6, 9)) // -> [3, 3]
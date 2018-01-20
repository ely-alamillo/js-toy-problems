/**
 * Given a sum and a product, find two numbers, x and y, where x + y === sum, and x * y === product. You will return this in an array. x and y exist in [0, 1000] (that is, from 0 to 1000, inclusive).

    For example, calling sumAndProduct(6, 9) should return [3, 3] because 3 + 3 === 6, and 3 * 3 === 9.
    sumAndProduct(13, 12) should return [1, 12] because 1 + 12 === 13, and 1 * 12 === 12.

    Please make sure to return your array such that x <= y in the format [x, y].

*/

function sumAndProduct(sum, product) {
    for (let i = 0; i <= sum / 2; i++) {
      if (i * (sum - i) === product) return [i, (sum - i)];
    }
    return null;
}

console.log(sumAndProduct(6, 9)) // -> [3, 3]
/**
 * Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.

Sort an array of integers using the merge sort algorithm.

First divide the list into its smallest unit (arrays with a single item in them)

Then compare each element with the adjacent list and combine them in the proper order.

Repeat until the entire array is sorted.

Example: 
 - Input: [1, 6, 3, 2, 4, 7]
 - Expected Output: [1, 2, 3, 4, 6, 7];

[1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]

[1, 6, 3][2, 4, 7]

[1][6, 3][2][4, 7]

[1][6][3][2][4][7]

[1, 3][6][2][4][7]

[1, 3][6][2, 4][7]

[1, 3, 6][2, 4][7]

[1, 3, 6][2, 4, 7]

[1, 2, 3, 4, 6, 7] 
*/

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const right = arr.slice(middle);
    const left = arr.slice(0, middle);
    
    return merge( mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    
    while (indexLeft < left.length && indexRight < right.length){
      if (left[indexLeft] < right[indexRight]){
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
  
const list = [1, 6, 3, 2, 4, 7];
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
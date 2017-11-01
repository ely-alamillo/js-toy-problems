/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {
  let high = nums.length - 1;
  let low = 0;
  let middle;

  while (low < high) {
    middle = Math.floor((low + high) / 2);
    if (target === nums[middle]) return middle;
    else if (target > nums[middle]) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return 'not found';
};

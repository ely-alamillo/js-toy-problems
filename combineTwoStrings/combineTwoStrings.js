/**
 * Given three strings, str1, str2, str3. str3 is said to be a shuffle of str1 and str2 if it can be formed
 * by interleaving the characters of str1 and str2 in such a manner that it maintains left to right ordering
 * from each string. Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid shuffle since it preserves
 * the character ordering of the two strings. 
 * 
 * So, given these three strings, write a function that detects whether str3 is a valid shuffle of str1 and str2.
*/

function checkString (str1, str2, str3) {
    // recursive, did not undestand very well
    // var paths = {};
  
    // // Check the string lengths are the same to begin
    // if ((str1 + str2).length !== str3.length) {
    //   return false;
    // }
  
    // function findPath (str1, str2, path) {
    //   if (path.length === str3.length) { return paths[path] = true; }
  
    //   // Find the next path from the first character of either strings
    //   str1 && findPath(str1.substr(1), str2, path + str1.substr(0, 1));
    //   str2 && findPath(str1, str2.substr(1), path + str2.substr(0, 1));
    // }
    // findPath (str1, str2, '')
    // return str3 in paths;
    
    // iterative, understood much better
    let str1Position = str1.length - 1;
    let str2Position = str2.length - 1;
    let str3Position = str3.length - 1;
    
    while (str3Position >= 0) {
      if (str3[str3Position] === str2[str2Position]) str2Position--;
      else if (str3[str3Position] === str1[str1Position]) str1Position--;
      else return false
      str3Position--
    }
    return true;
}
  
console.log(checkString ('abc', 'def', 'dabecf')); // --> True
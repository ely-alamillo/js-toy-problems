// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const strCompression = (string) => {
  function stringCompression(string) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[(i + 1)]) {
      count++;
    } else {
      arr.push(string[i]);
      arr.push(count);
      count = 1;
    }
  }
  if (arr.concat('').length < string.length) {
    return arr.join('');
  }
  return string;
};
  // not working
  // const strMap = {};
  // const strArray = str.split('')
  // strArray.forEach((letter) => {
  //   if (strMap[letter]) {
  //     strMap[letter] += 1;
  //   } else {
  //     strMap[letter] = 1;
  //   }
  // });
  //
  // const newString = JSON.stringify(Object.entries(strMap));
  // const re = /[^(\w\d)*]/g
  // const rem = newString.replace(re, '');
  //
  //
  // if (rem.length < string.length) {
  //   return `compressed string: ${rem}`;
  // }
  //
  //
  //   return `compression not necessary: ${string}`;
}
const str = 'aaabbbccc'
const str1 = 'aabbcc'
console.log(strCompression(str));

console.log(strCompression(str1));

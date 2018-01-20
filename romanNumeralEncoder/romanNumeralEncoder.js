/**
 * 
    Define a function that takes in a positive integer, and returns the Roman Numeral representation of that number.  

    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000 

    Example: romanNumeralize(1990) should return 'MCMXC'.  
*/

function romanNumeralize(number) {
    var roman =  {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
    str = "";

    for (var i of Object.keys(roman) ) {
      var q = Math.floor(number / roman[i]); // takes out # of times letter goes into number ex. 1990/1000 -> 1
      number -= q * roman[i] // removes letter from # ex 1990 - M -> 990
      str += i.repeat(q); // appends letter to string # of times it went in # ex 1990/1000 -> gives us only 1 M
    }
    return str;
}
console.log(romanNumeralize(1990)); // -> MCMXC
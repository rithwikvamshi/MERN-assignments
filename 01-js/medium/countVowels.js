/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str=str.toLowerCase();
    let arr = str.split("");
    console.log(arr);
    let count=0;
    let ovewl=['a', 'e', 'i', 'o', 'u']
    for(let i=0;i<arr.length;i++){
      if(ovewl.indexOf(arr[i])!=-1){
        count++;
      }
    }
    return count;
}

module.exports = countVowels;
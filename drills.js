'use strict';
// 1. Dog Playmate
//
//  1) O(1) because someone responds and we are not searching one by one.
//
//  2) O(n) because you go through the guests one by one asking for a playmate.
//
//
//
// 2. Even or odd
//
// O(1) because it takes the same time to complete regardless of the input size
//
//
//
//
// 3. Are you here?
//
// Polynomial O(n^k) because it is a nested loop.  Function compares two arrays
// and returns true if there is a match in any values between the two.
//
//
//
// 4. Doubler
//
// Linear O(n) because it is proportional to the size of the input.
//
//
//
// 5. Naive search
//
// Also linear.  Looping through an array until a match is found.
//
//
//
// 6. Creating pairs
//
// Polynomial O(n^k) because it is a nested loop. It runs rasied to the power of
// how many levels of looping there are
//
//
// 7. Compute the sequence
//
// Complexity is linear O(n).  This function is the Fibonacci sequence, where every number is the
// sum of it's two previous numbers.  Compute(0) = 0 & compute(1) = 1;
//
//
//
// 8. An efficient search
//
// This algorithm is logarithmic O(log(n)).  It's cutting the problem in half in each round,
// therefore minimizing the size of the input.
//
//
// 9. Random element
//
// Constant O(1) because it's just one step regardless of the input size.
//
//
//
// 10. What am I?
// This algorithm is linear O(n) because it will run proportional to the size of the input.
// This function determines if the input (n) is a prime number, because it returns true only if it is not divisible by any other number than itself or 1
//
//
//
// 11. Tower of Hanoi
//
//
// function toh(n, src, dst, tmp) {
//   if(n === 1) {
//     console.log(`Move from ${src} to ${dst}`);
//   } else {
//     toh(n-1, src, tmp, dst);
//     toh(1, src, dst, tmp);
//     toh(n-1, tmp, dst, src);
//   }
// }
//
// toh(3, 'A', 'C', 'B');
//
//
// 12. Iterative Versions
//
// function countingSheep(num) {
//   let x = num
//
//   do {
//     if (x === 0) {
//       console.log(`All sheep jumped over the fence`);
//       return
//     }
//     console.log(`${x}: Another sheep jumped over the fence`);
//     x--;
//   } while (x >= 0);
//
// }
// countingSheep(5)
//
// Iterative: Linear time O(n). Runs proportional to the size of the input
//
// function powerCalculator(base, exponent) {
//   if (exponent < 0) {
//     console.log('The exponent should be equal to or larger than 0');
//     return
//   }
//   if (exponent === 1) {
//     return base
//   }
//   let runningTotal = base
//   for (var i = 1; i < exponent; i++) {
//     runningTotal = runningTotal * base
//   }
//   return runningTotal
// }
// console.log(powerCalculator(2, 3))
//
// Linear time O(n). The running time is proportional to the size of the 'exponent' input
//
// function reverseString(string) {
//   let newString = ''
//   for (var i = 0; i < string.length; i++) {
//     newString += string.slice(string.length - (1 + i), string.length - i)
//   }
//   return newString
// }
// console.log(reverseString('Hi Tauhida'))
//
// Iterative: Linear time 0(n). The running time is proportional to the string length
//
//
// function triangularNumber(n) {
//   let triNum= n;
//
//   for(let i=1; i<n; i++){
//     triNum += n-i;
//   }
//   return triNum;
// }
//
// console.log(triangularNumber(4));
//
// Iterative: Linear time 0(n). The running time is proportional to the string length
//
// function stringSplitter(string, separator){
//   let newString = '';
//   for(let i=0; i<string.length; i++){
//     if(string[i] !== separator){
//       newString += string[i];
//     }
//   }
//   return newString;
// }
//
// console.log(stringSplitter('abcd,ac,bdadc,sa', ','));

// Just in case we wanted to split on a multi-character seprator:
//
// function stringSplitter(string, separator){
//    let newStringArray = string.split(separator)
//    let newString = ''
//    for(let i=0; i<newStringArray.length; i++){
//      newString += newStringArray[i]
//    }
//    return newString;
//  }
//
//  console.log(stringSplitter('abcd,ac,sabdadc,sa', 'sa'));
//
// Iterative: Linear time 0(n). The running time is proportional to the string length
//
// function fibonacci(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     if (i === 1) {
//         result.push(1);
//     }
//     else if (i == 2) {
//         result.push(1);
//     }
//     else {
//         result.push(result[i - 2] + result[i - 3]);
//     }
//   }
//   return result;
// }
//
// console.log(fibonacci(11));
// Iterative: Linear time 0(n). The running time is proportional to the string length
//
// function factorial(num){
//   let factNum = num;
//
//   for (let i=1; i < num; i++){
//     factNum *= (num - i);
//   }
//
//   return factNum;
// }
//
// console.log(factorial(5));
//
// Iterative: Linear time 0(n). The running time is proportional to the string length

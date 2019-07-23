// 1. Dog Playmate

//  1) O(1) because someone responds and we are not searching one by one.

//  2) O(n) because you go through the guests one by one asking for a playmate.



// 2. Even or odd

// O(1) because it takes the same time to complete regardless of the input size




// 3. Are you here?

// Polynomial O(n^k) because it is a nested loop.  Function compares two arrays 
//and returns true if there is a match in any values between the two.



// 4. Doubler

// Linear O(n) because it is proportional to the size of the input.



// 5. Naive search

// Also linear.  Looping through an array until a match is found.



// 6. Creating pairs

// Polynomial O(n^k) because it is a nested loop. It runs rasied to the power of 
//how many levels of looping there are


// 7. Compute the sequence

// Complexity is linear O(n).  This function is the Fibonacci sequence, where every number is the 
//sum of it's two previous numbers.  Compute(0) = 0 & compute(1) = 1;



// 8. An efficient search

// This algorithm is logarithmic O(log(n)).  It's cutting the problem in half in each round, 
//therefore minimizing the size of the input.


// 9. Random element

// Constant O(1) because it's just one step regardless of the input size.



// 10. What am I?

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

console.log(isWhat(2));
console.log(isWhat(3));
console.log(isWhat(5));
console.log(isWhat(7));

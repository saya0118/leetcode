// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
   for (let i = 0; i < s.length/2; i++) {
          if (s[i] !== s[s.length-i-1]) {
              return false;
          }
      }
      return true;
  };

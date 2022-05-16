// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2

var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if(needle === haystack) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
          return i;
        }
      }
    
      return -1;
};
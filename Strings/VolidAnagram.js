// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    if(s.split('').sort().join('') === t.split('').sort().join('')){
        return true
    }
    return false
};
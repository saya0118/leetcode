// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example:
// Input: nums = [1,2,3,1]
// Output: true

// Solution:
var containsDuplicate = function (nums) {
  if (nums == null || nums.length == 0) return false;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i+1; j < nums.length; ++j) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
}
return false;
};

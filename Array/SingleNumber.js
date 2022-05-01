// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Solution
var singleNumber = function (nums) {
  return nums
    .sort()
    .filter((elem) => nums.indexOf(elem) === nums.lastIndexOf(elem));
};

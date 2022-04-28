// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Solution

var rotate = function (nums, k) {
  for (let i = 1; i <= k; i += 1) {
    const poppedNum = nums.pop();
    nums.unshift(poppedNum);
  }

  return nums;
};

// pop method is removing the last element of array and return removed element
// unshift method is adding new element in the begining of array

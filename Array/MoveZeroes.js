// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    for(var i = nums.length; i--;){
          if(nums[i]===0){
              nums.splice(i,1)
              nums.push(0);
          }
      }
  };

// var moveZeroes = function(nums) {
//     var len = nums.length;
//     var lastZeroIndex = -1;
//     for (var i = 0; i < len; i++) {
//       if (nums[i] === 0 && lastZeroIndex === -1) {
//         lastZeroIndex = i;
//       } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
//         swap(nums, i, lastZeroIndex);
//         lastZeroIndex += 1;
//       }
//     }
//   };
  
//   var swap = function(arr, i, j) {
//     var tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// };
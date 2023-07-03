// Given an array, rotate the array 
// to the right by k 
// steps, where k is non-negative.

// Example 1: 

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */




//my code : this is doesn't work when input nums.length = 1
 var rotate = function(nums, k) {
    var tmp = [];
    for(let i = nums.length - k; i < nums.length; i++){
        tmp.push(nums[i]);
    }
    
    for(let i = tmp.length-1; i >= 0 ; i--){
        nums.unshift(tmp[i]);
    }
    
    for(let i = 0; i < k; i++){
        if(nums.length == 1){break;}
        nums.pop();
    }


    return nums;
 }
 //test
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1], 2));

///////////////////////////////////////////////////////////////////////////

// my other code : using js methods
// it works, but exceeds time limits,,,,
var rotate = function(nums, k) {
    for(let i = nums.length - k; i < nums.length; i++){
       nums.unshift(nums.pop());
   }
   return nums;
};
//test
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1], 2));

///////////////////////////////////////////////////////////////////////////


// answer code : mathic solution
var rotate = function(nums, k) {

    // Create a new array of the same length as 'nums'.
    var a = new Array(nums.length);

    // add approprate value in a.
    for(let i = 0; i < nums.length; i++){
        a[(i+k) % nums.length] = nums[i];
    }
    // overwrite nums with a
    for(let i = 0; i < nums.length; i++){
        nums[i] = a[i];
    }
    return nums;

};
//test
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1], 2));

///////////////////////////////////////////////////////////////////////////

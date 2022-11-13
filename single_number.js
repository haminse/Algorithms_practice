// Given a non-empty array of integers nums, 
// every element appears twice except for one. 
// Find that single one.

// You must implement a solution with a linear 
// runtime complexity and use only constant extra 
// space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice 
// except for one element 
// which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */

//  Input: nums = [4,1,2,1,2]
//  Output: 4
 
////////////////////////////////////////////////////////////////////
 
//My codes
var singleNumber = function(nums) {
     lst = []
     for(let i = 0; i < nums.length; i++){
        //if lst has no num[i], append it
         if(lst.includes(nums[i]) == false){
             lst.push(nums[i]);
         }else{ //if lst has already num[i], find num[i] in lst and del it
             for(let k = 0; k < lst.length; k++) {
               if(lst[k] === nums[i])  {
                 lst.splice(k, 1);
                 k--;
               }
             }
         }
         
     }
     return lst.pop();
 }

 //test
 console.log(singleNumber([4,1,2,1,2]) == 4); //true

//review of my code
//  there's dobule for loop, so it tooks long time so far.
//  I think I can unite seeking num[i] process with lsk[k] === nums[i]

///////////////////////////////////////////////////////////////////////////

// other way
// 2*sum(set(nums)) - sum(nums) <- it's easy in python!
var singleNumber_2 = function(nums) {
    let num_sums = 0, set_sums = 0;
    const set = new Set(nums); // make nums as string

    // sum nums
    for (let i of nums){
        num_sums += i;
    }
    // sum set
    for (let j of set) {
        set_sums += j;
    }

    // return 2*set_sums - num_sums;
    return 2*set_sums - num_sums;
}

 //test
 console.log(singleNumber_2([4,1,2,1,2]) == 4); //true
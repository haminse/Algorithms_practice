// Example 1: Given an array of positive integers nums
// and an integer k, find the length of the longest 
// subarray whose sum is less than or equal to k.
// k보다 작은 합의 최대 길이 부분집합 길이 찾기
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findLength = function(nums, k) {
     let cur = 0, left = 0,ans = 0;
     for(let right = 0; right < nums.length; right++){
        cur += nums[right];
        while(cur > k){
            cur -= nums[left];
            left++;
        }
        ans = Math.max(ans, right - left + 1)
     }
     return ans;
 }


//test
let k = 8
let nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]

console.log(findLength(nums, k) == 4) //true


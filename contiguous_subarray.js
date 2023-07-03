// Given an array of positive integers nums and an integer k, 
// return the number of contiguous subarrays where the product 
// of all the elements in the subarray is strictly less than k.

// For example, given the input nums = [10, 5, 2, 6], k = 100, 
// the answer is 8. The subarrays with products less than k are:

// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

// Key idea: Whenever you see a problem asking for the number of subarrays, 
// think of this: at each index, how many valid subarrays end at this index? 
// Let's split the 8 subarrays by their ending indices:

// [10]
// [5], [10, 5]
// [2], [5, 2]
// [6], [2, 6], [5, 2, 6]

// Do you notice a pattern? For each index, the number of subarrays ending at that index is the length 
// of the window after reaching that index. For any given ending index right, a subarray could start at any index between left and right, 
// which is a total of right - left + 1 (the window size) starting indices.

// // For example, after reaching the 2, the product is too large, so we remove the 10. Now, the window is valid, 
// and it has a length of 2. That means that there are 2 valid subarrays that end here.

// // We can use this idea to solve the problem. Do a normal sliding window with the constraint of the product being less than k, and at each index, 
// add the length of the window (right - left + 1) to the answer.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    var left = 0, right = 0, ans = 0, cur = 1;
    for(right; right < nums.length; right++){
        cur *= nums[right];

        while(cur >= k && left <= right){ // have to add condition left <= right, to right can chase left when left > right
            cur /=nums[left];
            left++;
        }
        ans += right - left + 1;
        // console.log(ans);
    }
    return ans;
 }

 console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100) == 8); //true
 console.log(numSubarrayProductLessThanK([1,2,3], 0) == 0); //true


// left = 3
// right = 0
// cur = 1/6
// ans = 0


//  1
//  3
//  5
//  8
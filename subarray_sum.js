// Example 4: Given an integer array nums and an integer
// k, find the sum of the subarray with the largest sum 
// whose length is k.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// My code //

// main idea : starting window 0 to k, every one step, 0+1 and k +1 and calculate it
 var findBestSubarray = function(nums, k) {
    var ans = 0, left = 0, right = 0, cur = 0;
    
    //move window til nums.length
    while(right < nums.length){
        //sum the all elements in window and store in cur
        for(right; right < k; right++){
            cur += nums[right];
        };
        // check the max value
        ans = Math.max(ans, cur);
        // move window (one step)
        left++;
        right++;
        // init the cur
        cur = 0;
    }
    return ans;
 }

 //test
 var nums = [3, -1, 4, 12, -8, 5, 6];
 var k = 4;
 console.log(findBestSubarray(nums, k));
 console.log(findBestSubarray(nums, k) == 18); // true



 // problem of my code //
// It has duplicated sum process
// each step, no need to sum everything again 
// -> next step : just minus the first value and add next value
// in original value



//answer code//
var findBestSubarray = function(nums, k) {
    var ans = 0, left = 0, cur = 0;    

    //sum the all elements in window and store in cur at first k elements
    for(let right = 0; right < k; right++){
        cur += nums[right];
    };

    //copy cur value in ans
    ans = cur;

    //start moving window after first k elements
    for(let right = k; right < nums.length; right++){ // right start with k, done at last point of nums
        ans -= nums[left] + nums[right]; // minus first value, add next of last value
        left++; // move left
        ans = Math.max(ans, cur) //compare max value
    }
    
    return ans;
 }

  //test
  var nums = [3, -1, 4, 12, -8, 5, 6];
  var k = 4;
  console.log(findBestSubarray(nums, k));
  console.log(findBestSubarray(nums, k) == 18); // true


// Example 2: Given a sorted array of unique integers and a target integer, 
// return true if there exists a pair of numbers that sum to target, 
// false otherwise. This problem is similar to Two Sum.

// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] 
// and target = 13, return true because 4 + 9 = 13.

var checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let summ = nums[left] + nums[right];
        if(summ == target){
            return true;
        }
        if(summ > target){
            right--;
        }
        else{
            left++;
        }

    }
    return false;

}
//test
console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15,], 13));
console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15, 100], 13));
console.log(checkForTarget([1, 6, 8, 11], 13));



// Example 2: You are given a binary substring s
// (a string containing only "0" and "1"). 
// An operation involves flipping a "0" into a "1". 
// What is the length of the longest substring containing 
// only "1" after performing at most one operation?

// For example, given s = "1101100111", 
// the answer is 5. If you perform the operation 
// at index 2, the string becomes 1111100111.


/**
 * @param {string} s
 * @return {number}
 */
var findLength = function(s) {
    let left = 0, right = 0; curr = 0, ans = 0;

    for(right; right < s.length; right++){
        if(s[right] == 0){curr++;}

        if(curr == 2){
            ans = Math.max(ans, right - left)
            left = right;
            curr = 0;
        }

        


    }
    return ans
}

//test for my code
var s = "1101100111";
console.log(findLength(s) == 5);
console.log(findLength(s));


var s2 = "1101110011"
console.log(findLength(s2) == 6);
console.log(findLength(s2));

var s3 = "1101110111"
console.log(findLength(s3) == 7); // fail in this case,,
console.log(findLength(s3));


//main idea :
// if there's two 0s in the substring,
// break to making a substring and 
// compare with the max length of substring


//answer code
var findLength = function(s) {
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] == "0") {
            curr++; // if there's 0, curr++
        }
        
        while (curr > 1) { //if curr became 2, execute this code til crr become 1 again
            if (s[left] == "0") { //del the 0 in the substring in substring
                curr -= 1;
            }
            left++; // move left pointer 
        }
        
        ans = Math.max(ans, right - left + 1); //compare with max value
    }
    
    return ans;
}

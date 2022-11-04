// Example 4: 392. Is Subsequence.

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s abcde
 * @param {string} t ac
 * @return {boolean}
 */

/*
pseudo

init pointer1, pointer2 = 0
while t.length
compare first var
if same, both pointer move next
if not same, only s pointer move

if s reach the end, but t is not yet -> false

when input finished the while loop -> true (that means we reached end of the t)
*/
 var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(j < s.length){
      if(i == s.length && j != t.length){
         return false;
      }
      if(s[i] == t[j]){
         i++;
         j++;
      }else{
         i++;
      }
      
    }
    return true;    
 }

//test
console.log(isSubsequence("abcde", "ac")); // true
console.log(isSubsequence("abcde", "tac")); // false
console.log(isSubsequence("abcde", "abcde")); // true
console.log(isSubsequence("abcde", "bced")); // false




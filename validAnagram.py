# Question
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word 

# or phrase, typically using all the original letters exactly once.


# First Attemtion : use replace method.
def isAnagram(s: str, t: str):
    string = ''
    for i in s:
        if i in t:
            string += i
            t = t.replace(i, '', 1)
    return True if string == s and len(t) == 0 else False

# Second Attemtion : let's not use the replace method
# let's use dict as a counter
def isAnagram(s: str, t: str):
    dic1 = {}
    dic2 = {}
    for i in s:
        if i in dic1:
            dic1[i] +=1
        else:
            dic1[i] = 1
    for i in t:
        if i in dic2:
            dic2[i] +=1
        else:
            dic2[i] = 1
    return dic1 == dic2
                
# Attemtion 3 : make it to dict comprehension
# but need to use count method,, and it spent a lot of runtime,,
class Solution:
    def isAnagram(s: str, t: str):
        return {i: s.count(i) for i in s} == {i: t.count(i) for i in t}
    


# Assertion
assert isAnagram('anagram', 'gnarama') == True
assert isAnagram('a', 'ab') == False

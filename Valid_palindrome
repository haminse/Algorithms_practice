#Question
# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.


# 1st Attemtion
# two pointer method
def isPalindrome(s: str):
    s = list(filter(str.isalnum, s.lower()))
    left = 0
    right = len(s)-1
    while left <= right:
        if s[left] != s[right]:
            return False
        right -= 1
        left += 1
    return True

# 2nd Attemtion
# use empty arr
# use [::-1] that can return the reverse list(pythonic!)
def isPalindrome(s: str):
    arr = ''
    for i in s.lower():
        if i.isalnum():
            arr += i
    return arr == arr[::-1]


# Assertion
assert isPalindrome('A man, a plan, a canal: Panama') == True
assert isPalindrome('amafasdafs') == False
assert isPalindrome('0P') == False
assert isPalindrome(' ') == True


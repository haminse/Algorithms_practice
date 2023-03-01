# Question
# Given an integer array nums, 
# return true if any value appears at least twice in the array, 
# and return false if every element is distinct.

# First attemtion -> it worked but got Runtime error.
# Too high time complexity since it has to run 'if i in arr' every iterations.
def containsDuplicate(nums):
    arr = []
    for i in nums:
        if i in arr:
            return True
        else:
            arr.append(i)
    return False

# Second attemtion -> Use set type in python
# set eliminate the duplication automatically.
# if there are some duplicate value, the length of set(num) will be smaller than the original
def containsDuplicate(nums):
    return len(set(nums)) < len(nums) # if duplicate, it become shorter than original len, so will return True. else, False


# Third attemtion - >sort first, check the ascending values
def containsDuplicate(nums):
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False

# Fourth attemtion -> use dict
def containsDuplicate(nums):
    d = dict()
    for n in nums:
        if n in d:
            d[n] += 1 # if there is n already, +1 in value.
        else:
            d[n] = 1 # if there is no n, create the key with n and initialize the value as an 1
    for v in d.values(): #check the duplicate value in dict
        if v > 1:
            return True
        
    return False

# assertion
assert containsDuplicate([1,1,1,1,1]) == True
assert containsDuplicate([1,12,1,12]) == True
assert containsDuplicate([1,3,2,4,5]) == False
assert containsDuplicate([-100,4,10000,1,100]) == False

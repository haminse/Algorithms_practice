
# Question
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# First Attemtion : It accepted but not working in some cases
def twoSum(self, nums, target):
    left = 0
    right = 1
    while left < right:
        if (nums[left] + nums[right]) == target:
            return [left, right]
        if right == len(nums)-1:
            right = left + 1
            left +=1
        right +=1


# Second attemtion  : Bruth force
def twoSum(nums, target):
    for left in range(len(nums)): # left = 0
        right = left + 1
        while right < len(nums):
            if nums[left] + nums[right] == target:
                return [left, right]
            right +=1    


# assertion
assert twoSum([1,2,6,4,10,3], 4) == [0,5] 
assert twoSum([1,2,3], 4) == [0,2] 

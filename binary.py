# Question
# Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.

# 1st Attemtion : two pointer
# Time limit exceeded
# need to optimze it

def search(nums, target):
    # set the initial value
    low = 0
    high = len(nums) -1
    while low <= high:
        mid = low + int((high-low)/2) # this will keep mid index 
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            high = mid+1
        elif nums[mid] < target:
            low = mid
    return -1


# Second Attemtion : optimize the codes
def search(nums, target):
    # set the initial value
    low, high = 0, len(nums)
    while low < high:
        mid = low + (high-low)//2 # this will keep mid index 
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid
    return -1

# What I learned?
# two pointer can be a solution in Binary search 
# if I set like high = len(nums) -1, it looks reasonable since it is last index of arr, 
# but it cause mid can not set at exact middle point -> cause more time!!
# +, we can do low = mid + 1 when target is bigger than mid, since we dont have to check the previous mid again!

assert search([-1,0,3,5,9,12], 9) == 4




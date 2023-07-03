# Question
# Given a list of integers, count and return the number of times each value appears as an array of integers.
# For this exercise, always return a frequency array with 100 elements.
a = '63 54 17 78 43 70 32 97 16 94 74 18 60 61 35 83 13 56 75 52 70 12 24 37 17 0 16 64 34 81 82 24 69 2 30 61 83 37 97 16 70 53 0 61 12 17 97 67 33 30 49 70 11 40 67 94 84 60 35 58 19 81 16 14 68 46 42 81 75 87 13 84 33 34 14 96 7 59 17 98 79 47 71 75 8 27 73 66 64 12 29 35 80 78 80 6 5 24 49 82'
a = list(map(lambda x : int(x), a.split()))

def countingSort(arr):
    # Write your code here
    result = [0]*(100)
    for i in arr:
        result[i] += 1
    return result

# Assertion
assert countingSort(a) == [2, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 3, 2, 2, 0, 4, 4, 1, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 1, 2, 0, 1, 2, 2, 3, 0, 2, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 2, 3, 0, 1, 2, 0, 1, 2, 1, 1, 4, 1, 0, 1, 1, 3, 0, 0, 2, 1, 2, 3, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 3, 1, 0]

# What I learned?

# We can use Alternative sorting with this.
# make empty list about len =  max(arr) + 1
# and get arr for frequency
# if got [1,0,3,1], which means one 0, zero 1, three 2, and one 3, it means [0,2,2,2,3] (sorted!)
# Then how to convert?
t = [1,0,3,1]
ans = [0,2,2,2,3]

def alter_sort(t):
    arr = []
    for index, val in enumerate(t):
        # print(index, val)
        for i in range(val):
            arr.append(index)
    return arr
assert alter_sort(t) == ans
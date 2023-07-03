# Question
# return abs diff of sum of each diagonal values
def diagonalDifference(arr):
    # Write your code here
    d1, d2 = 0, 0
    for i in range(len(arr)):
        d1 += arr[i][i]
        d2 += arr[i][len(arr)-1-i]

    return abs(d1 - d2)

# Assertion
arr = [[1,2,2],[1,2,3],[1,2,3]]
assert diagonalDifference(arr) == 1
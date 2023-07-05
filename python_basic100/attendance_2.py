n = int(input())

arr = list(map(int, input().split()))


#solution 1
for i in arr[::-1]:
    print(i, end = " ")

#solution 2
for i in range(n-1,-1,-1):
    print(arr[i], end = " ")

# note
# in terms of memory, solution 1 spend more memory than solution 2
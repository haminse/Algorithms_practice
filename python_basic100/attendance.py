# 10
# 1 3 2 2 5 6 7 4 5 9


n = int(input())
arr = list(map(int, input().split()))
rst_arr = [0]*23

for num in arr:
    rst_arr[num-1] +=1

for i in rst_arr:
    print(i, end = " ")
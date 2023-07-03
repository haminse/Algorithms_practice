n = int(input())

for i in range(1, n+1):
    left = i%10
    if left == 3 or left == 6 or left == 9:
        print('X', end = ' ')
    else:
        print(i, end = ' ')
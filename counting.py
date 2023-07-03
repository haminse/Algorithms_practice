lim = int(input())
num, cnt = 0, 0
while True:
    if num >= lim:
        break
    cnt += 1
    num += cnt
print(cnt)
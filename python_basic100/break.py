n = int(input())
cnt, rst = 0, 0
while True:
  cnt +=1
  rst += cnt
  if rst >= n:
    break
print(rst)
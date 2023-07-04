# a,d,n = map(int, input().split())

# print(a + (n-1)*d)



# geometric progression
# a,r,n = map(int, input().split())

# print(a*r**(n-1))


# sequence
a,m,d,n = map(int, input().split())
rst = a
for _ in range(n-1):
    rst = rst*m + d

print(rst)
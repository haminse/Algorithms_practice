# sound file
h,b,c,s = map(int, input().split())
print(f"{round(h*b*c*s/8/1024/1024,1)} MB")


#picture file
w, h, b = map(int, input().split())
num = w*h*b/8/1024/1024
print(f"{num:.2f} MB")
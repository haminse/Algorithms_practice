# Question
# convert AMPM time to 24hour time format
def timeConversion(s):
    ampm = s[-2:]
    hour = s[:2]
    other = s[2:-2]
    # print(ampm, hour, other)
    if ampm == 'PM':
        if hour == '12':
            pass
        else:
            hour = int(hour) + 12
    else:
        if hour == '12':
            hour = '00'
    return (str(hour)+other)

# Assertion
s= '12:05:45AM'
assert timeConversion(s) == '00:05:45'
            
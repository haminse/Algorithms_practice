# Question
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
# determine if the input string is valid.
# An input string is valid if:
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# First attemtion : Using stack - manually processed every exception cases
# Too many if statements to deal with exception
def isValid(s):
    stack = []
    for i in s:
        if i in ['(', '{', '[']:
            stack.append(i)
        else:
            if len(stack) == 0: # if the stack is empty but ), }, ] are show up
                return False
            elif i == ')' and stack[-1] == '(':
                stack.pop()
            elif i == '}' and stack[-1] == '{':
                stack.pop()
            elif i == ']' and stack[-1] == '[':
                stack.pop()
            else:
                return False

    return True if len(stack) == 0 else False

# Second attemtion
# using dic -> reduce cases within 3
def isValid(s):
    dic = {'(' : ')','{' : '}','[' : ']',}   
    stack = []
    for i in s:
        if i in dic:
            stack.append(i)
        elif len(stack) > 0 and i == dic[stack[-1]]:
            stack.pop()
        else:
            return False
    return len(stack) == 0

# assertion
assert isValid('{}[]()') == True
assert isValid('([{}])') == True
assert isValid('{}]()') == False
assert isValid(']') == False
assert isValid('[{]}') == False





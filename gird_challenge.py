# Question
# Given a square grid of characters in the range ascii[a-z], 
# rearrange elements of each row alphabetically, ascending. Determine 
# if the columns are also in ascending alphabetical order, top to bottom. 
# Return YES if they are or NO if they are not.

# Answer
def gridChallenge(grid):
    # Write your code here
    
    # sorting + making empty string list
    for index, row in enumerate(grid):
        grid[index] = ''.join(sorted(row))
        col_strings = [''] * len(grid[0])
    print(grid)
    print(col_strings)

    # unite the chars in the same col
    for row in grid:
        for i, letter in enumerate(row):
            col_strings[i] += letter
    print(col_strings)

    # check the ascending in each colums        
    for col_string in col_strings:
        if ''.join(sorted(col_string)) != col_string:
            return 'NO'
    return 'YES'

# Assertion
grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
assert gridChallenge(grid) == 'YES'

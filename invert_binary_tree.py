# Question
# Given the root of a binary tree, invert the tree, and return its root.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


b = TreeNode()
b.val = 1

c = TreeNode()
c.val = 3

a = TreeNode()
a.val = 2
a.left = b
a.right = c

def invertTree(root):
    if root == None:
        return None
    
    #value exchange
    # tmp_left = root.left
    # root.left = root.right
    # root.right = tmp_left

    #value exchange 2
    root.left, root.right = root.right, root.left

    #recursive
    invertTree(root.left)
    invertTree(root.right)

    return root

# What I learned?
# for tree, usually recursive method is used.
# don't forget, when u use recursive in Class instance, 
# need to use self.functionName to use class method!
# in python, u can swap the value like a,b = b,a

# Assertion
Inverted_tree = invertTree(a)
assert Inverted_tree.left.val == 3
assert Inverted_tree.right.val == 1

#Question
# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1: ListNode, list2: ListNode):
    init_node = ListNode()
    cur = init_node #pointer
    while list1 and list2: # run until list1 and list2 are not empty
        if list1.val < list2.val : # if list1 1st node < list2 1st node
            cur.next = list1 # link list1 to after cur node
            list1 = list1.next # delete the first node in list1
        else: # if list1 1st node >= list2 1st node
            cur.next = list2  # link list2 to after cur node
            list2 = list2.next # delete the first node in list2
        cur = cur.next # move cur pointer to next node
    
    #after while loop : one of the linked list is done(empty)
    cur.next = list1 if list1 else list2 # if list1 still have value, link the all the left list1 nodes to cur.next
    return init_node.next # return the init node's next node : Real header node

# What should I keep in mind here?

# 1. IN linked list obj, list.val means always the first node's value in the list
# 2. we can delete the first node with list = list.next
# 3. usually needs pointer and dummy nodes!
# 4. cur = cur.next : this is how we moving cur pointer to next node
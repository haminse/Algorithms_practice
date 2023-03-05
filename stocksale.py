#Question
# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

# 1st Attemtion :Bruth Force
# Check every cases
# Time limit Exceeded Error
# O(n2) complexity. too much.
def maxProfit(prices):
    profit = 0
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            temp_profit = prices[j] - prices[i]
            if temp_profit > 0 and temp_profit > profit:
                profit = temp_profit
    return profit
           
# 2nd attemtion -> using min max function
    # Sudo code
    #init the min_price = 1st day price , max_profit = 0
    #for price in Prices[1:]: # start with 2nd day
    #cur_profit = price - min_price
    #min_price = min(min_price, price)
    #max_profit = max(cur_profit, max_profit)

def maxProfit(prices):
    #initialize states
    min_price = prices[0] # set min stock price as first day
    maxProfit = 0 # set the max profit as 0
    
    #loop over each valid selling day
    for price in prices[1:]: # start from 2nd day

        #calculate the maximum profit for the current selling day
        curMaxProfit = price - min_price # temporal selling price
        
        #update the states
        min_price = min(min_price,price) # update the min price compare with previous price, current price
        maxProfit = max(maxProfit,curMaxProfit) # update the max profit with maxProfit and curMaxProfit
    
    return maxProfit

#Assertion
assert maxProfit([7,1,5,3,6,4]) == 5
assert maxProfit([7,6,4,3,1]) == 0


# What I learned?
# with a = max(a, b), we can keep update a to max value while looping



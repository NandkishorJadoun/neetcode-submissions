class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for index, price in enumerate(prices):
            if index == 0:
                continue
            if prices[index] > prices[index - 1]:
                profit += prices[index] - prices[index-1]

        return profit 

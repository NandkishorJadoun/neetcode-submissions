class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        nums.sort()
        min = 1

        for num in nums:
            if min == num:
                min += 1

        return min
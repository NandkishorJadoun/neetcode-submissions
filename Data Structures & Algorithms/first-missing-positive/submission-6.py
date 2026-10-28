class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for index, num in enumerate(nums):
            if num < 0:
                nums[index] = 0

        for num in nums:
            if num == 0:
                continue

            index = abs(num) - 1

            if(index < len(nums)):
                if(nums[index] > 0):
                    nums[index] *= -1
                elif (nums[index] == 0):
                    nums[index] = -1 * len(nums)

        for i in range(1, len(nums) + 1):
            index = i - 1
            if(nums[index]>=0):
                return i

        return len(nums) + 1

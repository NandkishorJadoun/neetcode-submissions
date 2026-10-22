class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = k = 0
        j = len(nums) - 1

        while i <= j:
            if nums[i] == val:
                nums[i], nums[j] = nums[j], nums[i]
                j -= 1
            else:
                k += 1
                i += 1

        return k
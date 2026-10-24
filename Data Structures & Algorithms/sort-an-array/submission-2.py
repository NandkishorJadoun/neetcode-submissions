class Solution:
    def merge(self, left, right):
        result = []
        i = j = 0

        while i < len(left) and j < len(right):
            if left[i] > right[j]:
                result.append(right[j])
                j += 1
            else:
                result.append(left[i])
                i += 1
        
        result.extend(left[i:])
        result.extend(right[j:])
        return result

    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) == 1:
            return nums

        mid = len(nums) // 2

        left = nums[:mid]
        right = nums[mid:]

        return self.merge(self.sortArray(left), self.sortArray(right))
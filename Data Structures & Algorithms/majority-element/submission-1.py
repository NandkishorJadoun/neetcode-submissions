class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hashmap = {}
        for i, num in enumerate(nums):
            hashmap[num] = hashmap.get(num, 1) + 1
            
        for i, num in enumerate(hashmap):
            if hashmap[num] > len(nums)/2:
                return num
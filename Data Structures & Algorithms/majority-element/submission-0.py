class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hashmap = {}
        for i, num in enumerate(nums):
            if num in hashmap:
                hashmap[num] += 1
            else: 
                hashmap[num] = 1
            
        for i, num in enumerate(hashmap):
            if hashmap[num] > len(nums)/2:
                return num
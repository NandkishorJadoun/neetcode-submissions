class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        hash_map = {}
        for index in range(len(nums)):
            diff = target - nums[index]
            if(diff in hash_map):
                return [hash_map.get(diff), index]
            hash_map.setdefault(nums[index], index)
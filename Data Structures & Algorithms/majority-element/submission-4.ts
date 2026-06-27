class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums.sort()
        const midIndex = Math.floor((nums.length - 1) / 2)
        return nums[midIndex]
    }
}

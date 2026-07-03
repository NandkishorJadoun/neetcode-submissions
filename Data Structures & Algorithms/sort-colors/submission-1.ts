class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {

        let left = 0, right = nums.length - 1, index = 0

        while (index <= right) {
            if (nums[index] === 0) {
                [nums[left], nums[index]] = [nums[index], nums[left]]
                left++
            } else if (nums[index] === 2) {
                [nums[right], nums[index]] = [nums[index], nums[right]]
                right--
                index--
            }
            index++
        }
    }
}

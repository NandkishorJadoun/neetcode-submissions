class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = nums.length
        let first = 0
        let last = nums.length - 1

        while (first <= last) {
            if (nums[first] === val) {
                [nums[first], nums[last]] = [nums[last], nums[first]]
                last -= 1
                k -= 1
            } else {
                first += 1
            }
        }

        return k
    }
}

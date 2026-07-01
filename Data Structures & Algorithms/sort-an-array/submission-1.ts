class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    merge(left: number[], right: number[]): number[] {
        const result = []
        while (left.length > 0 && right.length > 0) {
            if (left[0] > right[0]) {
                result.push(right.shift())
            } else {
                result.push(left.shift())
            }
        }

        result.push(...left, ...right)
        return result
    }

    sortArray(nums: number[]): number[] {
        if (nums.length <= 1) {
            return nums
        }

        const mid = Math.floor(nums.length / 2)
        const left = nums.slice(0, mid)
        const right = nums.slice(mid)

        return this.merge(this.sortArray(left), this.sortArray(right))
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const hasZero = nums.includes(0)
        const hasTwoZeros = nums.indexOf(0) !== nums.lastIndexOf(0)

        if (hasTwoZeros) {
            const result = new Array(nums.length).fill(0)
            return result
        }

        const product = nums.reduce((a, c) => c ? a * c : a, 1)

        return nums.map(num => {
            if (!hasZero) {
                return product / num
            }
            return !num ? product : 0
        })
    }
}

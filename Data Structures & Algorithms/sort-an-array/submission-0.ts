class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    

    sortArray(nums: number[]): number[] {
        if(nums.length === 1) return nums

        const mid = Math.floor(nums.length/2)
        const left = nums.slice(0, mid)
        const right = nums.slice(mid)

        return this.merge(this.sortArray(left), this.sortArray(right))
    }

    merge(left: number[], right: number[]) : number[]{
        const result = []
        const leftIdx = 0
        const rightIdx = 0

        while(leftIdx < left.length && rightIdx < right.length){
            result.push(left[0] > right[0] ? right.shift() : left.shift())
        }

        return [... result, ... left, ...right ]

    }
}

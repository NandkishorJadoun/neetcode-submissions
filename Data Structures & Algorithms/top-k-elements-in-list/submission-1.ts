class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // save the num frequency in a map
        // sort it based on the frequency
        // then return the sub array of length k

        const map: Record<number, number> = {}

        for (const num of nums) {
            if (!map[num]) {
                map[num] = 0
            }
            map[num] += 1
        }

        const arr = Object.entries(map)
        arr.sort((a, b) => b[1] - a[1])
        const result = arr.slice(0, k)

        return result.map(numArr => +numArr[0])
    }
}

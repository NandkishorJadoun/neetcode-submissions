class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // get the frequency of the num
        const map: Record<string, number> = {}
        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (const num in map) {
            bucket[map[num]].push(+num)
        }

        const result: number[] = []
        for (let i = bucket.length - 1; i > 0; i--) {
            for (const n of bucket[i]) {
                result.push(n);
                if (result.length === k) {
                    return result
                }
            }
        }
    }
}

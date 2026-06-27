class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map()

        strs.forEach((str) => {
            const key = str.split('').sort().join('')

            if (!hashMap.has(key)) {
                hashMap.set(key, [])
            }

            hashMap.get(key).push(str)
        })

        return [...hashMap.values()]
    }
}

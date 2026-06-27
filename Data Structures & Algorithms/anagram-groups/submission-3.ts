class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedArrStr = strs.slice().map(str => str.split('').sort().join(''))
        const hashMap = new Map()

        sortedArrStr.forEach((str, index) => {
            const word = strs[index]
            const hasKeyExist = hashMap.has(str)
            if (hasKeyExist) {
                hashMap.get(str).push(word)
            } else {
                hashMap.set(str, [word])
            }
        })

        return [...hashMap.values()]
    }
}

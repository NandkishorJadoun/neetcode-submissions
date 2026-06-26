class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        // find the length of the smallest word in the array
        // loop through the strs array
        // loop through the each word to length of the smallest word

        let result = strs[0]

        for (const str of strs) {
            for (let i = 0; i < result.length; i++) {
                if (str[i] !== result[i]) {
                    result = result.slice(0, i)
                }
            }
        }

        return result
    }
}

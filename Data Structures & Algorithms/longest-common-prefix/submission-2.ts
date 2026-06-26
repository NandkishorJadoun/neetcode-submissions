class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = strs[0]

        for (const str of strs) {
            for (let i = 0; i < prefix.length; i++) {
                if (str[i] !== prefix[i]) {
                    prefix = prefix.slice(0, i)
                }
            }
        }

        return prefix
    }
}

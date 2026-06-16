class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        // check length if not same, send false
        // create an array with count 0
        // increase the count at the index corresponding to s[i]
        // decrease the count at the index corresponding to t[i]

        if (s.length !== t.length) {
            return false
        }

        const count = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }

        return count.every(val => val === 0)
    }
}

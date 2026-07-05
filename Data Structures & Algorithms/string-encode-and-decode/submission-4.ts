class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) {
            return ""
        }
        
        const lengthStr = strs.map(str => str.length).join(",")
        const wordStr = strs.reduce((sum, str) => sum + str, "")
        return lengthStr + "#" + wordStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []

        if (!str) {
            return result
        }

        const separatorIndex = str.indexOf("#");
        const lengthArr = str.slice(0, separatorIndex).split(",").map(num => +num);
        let wordStr = str.slice(separatorIndex + 1);

        for (const num of lengthArr) {
            result.push(wordStr.slice(0, num))
            wordStr = wordStr.slice(num)
        }

        return result
    }
}

// 5,5#HelloWorld
// ["5,5" , "HelloWorld"]

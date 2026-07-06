class NumMatrix {
    /**
     * @param {number[][]} matrix
     */

    numMatrix: number[][]

    constructor(matrix: number[][]) {
        const ROWS = matrix.length
        const COLUMNS = matrix[0].length

        this.numMatrix = Array.from({ length: ROWS + 1 },
            () => Array.from({ length: COLUMNS + 1 }, () => 0));

        for (let i = 1; i <= ROWS; i++) {
            let prefix = 0
            for (let j = 1; j <= COLUMNS; j++) {
                prefix += matrix[i - 1][j - 1]
                const aboveVal = this.numMatrix[i - 1][j]
                this.numMatrix[i][j] = prefix + aboveVal
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        row1 += 1;
        col1 += 1;
        row2 += 1;
        col2 += 1;

        const bottomRight = this.numMatrix[row2][col2]
        const topRight = this.numMatrix[row1 - 1][col2]
        const leftBottom = this.numMatrix[row2][col1 - 1]
        const topLeft = this.numMatrix[row1 - 1][col1 - 1]
        return bottomRight - topRight - leftBottom + topLeft
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

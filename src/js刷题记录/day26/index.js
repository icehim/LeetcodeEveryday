/**
 * @param {number[][]} grid
 * @return {number}
 * 解题思路:
 * 对二位数组进行遍历，当遍历到值为1时,周长+4,之后找当前遍历对象左右上下是否有相邻的1有的话周长-1,
 * 需要注意的是数组越界的情况,虽然一维数组越界不会报错而是值为undefined,但是,在二维数组中，如果第一个维度越界接着访问第二个维度就会报错!
 *
 */
let islandPerimeter = function (grid) {
    let sum = 0
    for (let i = 0; i < grid.length; i++) {

        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                sum = sum + 4
                if (grid[i][j - 1] === 1) {
                    sum = sum - 1
                }
                if (grid[i][j + 1] === 1) {
                    sum = sum - 1
                }
                if (grid[i + 1]) {
                    if (grid[i + 1][j] === 1) {
                        sum = sum - 1
                    }
                }
                if (grid[i - 1]) {
                    if (grid[i - 1][j] === 1) {
                        sum = sum - 1
                    }
                }
            }
        }
    }
    return sum
};

console.log(islandPerimeter([[1, 0]]))
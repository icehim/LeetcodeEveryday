/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 解题思路
 * 先判断重塑后的新矩阵和原矩阵中的数据个数是否相同，相同的话则可以转换，不同的话返回原始矩阵
 * 之后双for循环遍历将原始矩阵转换为一维数组
 * 之后再次遍历每次遍历时，将数组arr下标从0到c进行切割，切割r-1次实现新矩阵的重塑
 */
let matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat
    let arr = []
    let res = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            arr.push(mat[i][j])
        }
    }
    for (let i = 0; i < r; i++) {
        res.push(...[arr.splice(0, c)])
    }
    return res
};

console.log(matrixReshape([[1], [2], [3], [4]], 2, 2));
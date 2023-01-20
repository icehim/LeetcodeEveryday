/**
 * @param {number} x
 * @return {boolean}
 */
var longestCommonPrefix = function(strs) {

    let minStr = strs[0]
    let result = ''
    for (let i = 1; i < strs.length; i++) {
        if (minStr.length > strs[i].length) {
            minStr = strs[i]
        }
    }

    let temp = ''
    for (let i = 0; i < minStr.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (minStr[i] === strs[j][i] && j === strs.length - 1) {
                result += minStr[i]
            }
        }
    }
    return result
};

//解法错误

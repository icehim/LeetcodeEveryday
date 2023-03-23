let longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]

    let minStr = strs[0]
    let result = ''
    for (let i = 1; i < strs.length; i++) {
        if (minStr.length > strs[i].length) {
            minStr = strs[i]
        }
    }

    for (let i = 0; i < minStr.length; i++) {
        let temp = minStr[i]

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] === temp) {
                temp = strs[j][i]
            } else {
                return result
            }
        }
        result = result + temp
    }
    return result

};

console.log(longestCommonPrefix(["dog", 'dg']));

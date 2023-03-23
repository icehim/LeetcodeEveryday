/**
 * @param {string} s
 * @return {number}
 */

// 思路先以空格分割字符串=>从后往前便利=>返回数组中的非空字符串长度

let lengthOfLastWord = function (s) {
    let arr1 = s.split(' ')
    for (let i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i].length) {
            return arr1[i].length
        }
    }
};

console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));

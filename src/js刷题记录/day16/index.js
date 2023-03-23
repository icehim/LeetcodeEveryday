/**
 * @param {string} columnTitle
 * @return {number}
 * 思路:
 * 1.字符转转为ascii码
 * 2.然后对65取余+1得到A~Z对应1~26
 * 3.然后乘以对应的26的length-1-i次幂
 * 4.累加得到结果
 */
let titleToNumber = function(columnTitle) {
    let length = columnTitle.length
    let col = 0
    for (let i = 0; i < length; i++) {
        col =col+  ((columnTitle[i].charCodeAt(0)%65)+1) * Math.pow(26,length-1-i)
    }
    return col
};
console.log(titleToNumber('ZY'));

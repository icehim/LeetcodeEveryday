/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给a,b字符串分别在前面加上0b代表a,b是二进制数,再用BigInt转成十进制数,a,b相加之后用toString(2)转成二进制
 */
let addBinary = function (a, b) {

    return ((BigInt('0b' + a) + BigInt('0b' + b)).toString(2))
};
console.log(addBinary('1010', '1011'))

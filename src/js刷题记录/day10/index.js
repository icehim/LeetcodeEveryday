/**
 * @param {number[]} digits
 * @return {number[]}
 * 投机取巧一下，先用.join('')把数组转成字符串，再用'+'或者'Number()','toString()'之类方法转成数字之后+1，但是有个问题就是精度丢失!
 * 所以用BigInt()转,然后+1n,用toString去掉BigInt的n,再用split切割字符串转为数组
 *
 */
let plusOne = function (digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('');
    // digits = digits.toString().split('')
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

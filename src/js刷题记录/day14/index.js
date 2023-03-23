/**
 * @param {number[]} nums
 * @return {number}
 * 利用异或运算XOR
 * 异或运算有以下几个特点：
 * 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
 * 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
 * XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 * 将nums中所有的数做异或运算最后的结果为唯一的数字
 */
let singleNumber = function (nums) {
    let res = 0
    for (const num of nums) {
        res = res ^ num
    }
    return res
};
console.log(singleNumber([1]));

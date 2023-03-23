/**
 * @param {number} x
 * @return {number}
 *for循环暴力解
 */
let mySqrt = function (x) {
    if (x === 0) return 0
    if (x === 1) return 1
    for (let i = 1; i <= 46341; i++) {
        if ((i * i) > x) {
            return i - 1
        } else if ((i * i) === x) {
            return i
        }
    }
};
console.log(mySqrt(9));

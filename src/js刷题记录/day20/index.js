/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路:排序看后一个数是不是比前一个数大1,是继续循环，不是返回当前循环的数+1
 *
 */
let missingNumber = function (nums) {
    let length = nums.length
    nums.sort((a, b) => a - b)
    if (nums[0] !== 0) return 0
    for (let i = 0; i < length; i++) {
        if (i + 1 !== nums[i + 1]) {
            return i + 1
        }
    }
};
console.log(missingNumber([0]))
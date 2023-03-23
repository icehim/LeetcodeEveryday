/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路:
 * 排序，去重，当数组长度小于3时返回数组中最后一位，数组长度大于3时返回数组中的倒数第3个数字
 */
let thirdMax = function (nums) {
    nums.sort((a, b) => a - b)
    nums = [...new Set(nums)]
    if (nums.length < 3) {
        return nums[nums.length - 1]
    } else {
        return nums[nums.length - 3]
    }
};

console.log(thirdMax([3, 2, 1]));
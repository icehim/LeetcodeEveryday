/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路符合最大总和的的最优分发一定是排序之后的数组
 * 遍历排序之后的数组，每次遍历下标加2,是为了保证分组,
 * 遍历过程中比较nums[i],nums[i+1]的最小值,并将其累加到sum
 * 最后返回sum
 */
let arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < nums.length; i += 2) {
        sum = sum + Math.min(nums[i], nums[i + 1])
    }
    return sum
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
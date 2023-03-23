/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 * 先对数组进行排序，排完序之后，如果有一个数字出现的次数大于n/2,则元素位于该排序数组的n/2的位置
 */
const majorityElement = function (nums) {
    if (nums.length === 1 || nums.length === 2) return nums[0]

    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

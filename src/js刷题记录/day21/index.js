/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 解题思路:
 * 1. length记录新添加0的前一个数字
 * 2. for循环遍历,找到0的话用push给数字末尾添加0,同时删去当前的0
 * 3. 添加删除操作后数字整体长度不变,给length和i都减去1，使得下一次循环正确
 */
let moveZeroes = function (nums) {

    let length = nums.length

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1)
            i = i - 1
            length = length - 1
        }
    }
    console.log(nums)
};
moveZeroes([0, 0]);
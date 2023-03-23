/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 解题思路
 * 排序、遍历、双指针
 *  固定一个数,剩下两个数进行双指针遍历
 *  Number.MAX_SAFE_INTEGER:在 JavaScript 中最大的安全整数
 *  计算nums[i] + nums[L] + nums[R]的和sum与target的差值
 *  当差值小于上一个差值时将sum赋值给res
 *  比较sum与target的大小,
 *  sum < target L向右移动
 *  sum > target R向左移动
 *  sum = target 说明当前sum与target最近,返回sum
 */
let threeSumClosest = function (nums, target) {
    let length = nums.length
    let res = Number.MAX_SAFE_INTEGER
    nums.sort((a, b) => a - b)
    for (let i = 0; i < length; i++) {
        let L = i + 1
        let R = length - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum < target) {
                L++
            } else if (sum > target) {
                R--
            } else {
                return sum
            }
        }
    }
    return res
};
console.log(threeSumClosest([1, 1, 1, 1], 4));

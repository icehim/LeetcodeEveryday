/**
 * @param {number[]} nums
 * @return {number[][]}
 * 解题思路:
 * 排序,遍历,双指针
 *  首先对数组进行排序,排序之后对数组进行遍历
 *  遍历时，用L指向当前遍历对象的右边，R指向数组末尾,三个数字分别为nums[i],nums[L],nums[R]
 *  计算三个数的和sum,满足条件将其添加到res中
 *  因为i从0开始，并且数组已经排序，
 *  如果nums[i]>0则三个数都大于0,sum肯定无法等于0,结束循环
 *  如果nums[i]===nums[i-1]说明该数字重复，会导致结果重复，跳过该数
 *  当sum===0时，nums[L]===nums[L+1]则会导致结果重复,跳过L++
 *  当sum===0时，nums[R]===nums[R-1]则会导致结果重复,跳过R--
 *  sum<0时,说明左侧偏小,导致和为负数L向右侧移动。
 *  sum>0时,说明右侧变大,导致和为正数R向左侧移动
 */
let threeSum = function (nums) {
    let res = []
    const length = nums.length
    if (nums === null || length < 3) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1
        let R = length - 1
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] === nums[L + 1]) L++
                while (L < R && nums[R] === nums[R - 1]) R--
                L++
                R--
            } else if (sum < 0) {
                L++
            } else if (sum > 0) {
                R--
            }
        }
    }
    return res
};
threeSum([-1, 0, 1, 2, -1, -4]);
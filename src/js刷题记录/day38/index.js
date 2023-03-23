/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 解题思路:排序,固定i和j的位置进行双指针遍历
 */
let fourSum = function (nums, target) {
    //四数之和,nums长度小于4结果为空
    if (nums.length < 4) return []
    let length = nums.length
    //排序,方便控制指针左移还是右移
    nums.sort((a, b) => a - b)
    let res = []
    //i为第一个固定的位置,也是最小值的位置,为了保证4个数的要求，所以i < length - 3
    for (let i = 0; i < length - 3; i++) {
        //遇到重复nums[i]跳过
        if (i > 0 && nums[i] === nums[i - 1]) continue
        //nums经过升序排序,所以nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]是最小的四个数的和,如果这个和比target大,后续的和肯定比target大,所以可以直接跳出循环
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        //nums经过升序排序,nums[i]+nums[length - 1] + nums[length - 2] + nums[length - 3]是当前值加上最大的三个值,这个和比target小说明当前值较小,可以跳过当前值
        if (nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] < target) continue
        //j为第二个固定的位置,也是第二小的值,为了保证四个数的要求,所以j < length - 2
        for (let j = i + 1; j < length - 2; j++) {
            //遇到重复nums[j]跳过
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            //和i类似,排除不可能情况
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
            if (nums[i] + nums[j] + nums[length - 1] + nums[length - 2] < target) continue
            // 固定i和j之后用双指针L和R来进行查找
            let L = j + 1
            let R = length - 1

            while (L < R) {
                let sum = nums[i] + nums[j] + nums[L] + nums[R]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[L], nums[R]])
                    //跳过重复的L
                    while (L < R && nums[L] === nums[L + 1]) {
                        L++
                    }
                    //跳过重复的R
                    while (L < R && nums[R] === nums[R - 1]) {
                        R--
                    }
                    //L和R向内移动寻找下一个值
                    L++
                    R--
                } else if (sum > target) {
                    //sum>target说明R过大,需要向内移动并且跳过重复的R,所以用--R来实现
                    while (L < R) {
                        if (nums[R] !== nums[--R]) break
                    }
                } else {
                    //sum<target说明L过小,需要向内移动并且跳过重复的L,所以用++L来实现
                    while (L < R) {
                        if (nums[L] !== nums[++L]) break
                    }
                }
            }
        }
    }
    return res
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

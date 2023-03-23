/**
 * @param {number[]} nums
 * @return {string[]}
 * 解题思路:从数组下表为0出发，向右遍历，当相邻元素之间的差值大于1时，就找到了一个区间。
 * 遍历过程中，用start和end分别表示区间的起点和终点
 * start < end 时 区间的字符串表示为 'nums[start]->nums[end]'
 * start = end 时 区间表示为 'nums[low]'
 */
let summaryRanges = function (nums) {
    const res = []
    let i = 0;
    const length = nums.length

    while (i < length) {
        const start = i
        i++
        while (i < length && nums[i - 1] + 1 === nums[i]) {
            i++
        }
        const end = i - 1
        const temp = ['' + nums[start]]
        if (start < end) {
            temp.push('->')
            temp.push('' + nums[end])
        }
        console.log(temp)
        res.push(temp.join(''));
        console.log(res)
    }
    return res
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
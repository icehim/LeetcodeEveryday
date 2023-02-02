/**
 * @param {number[]} nums
 * @return {boolean}
 * 解法一:双for循环遍历找是否有相同值
 * 解法二:对数组排序，单for循环比较当前值和下一个值
 * 解法三:用set
 */
let containsDuplicate = function (nums) {

    // 解法一：
    let length = nums.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[j] === nums[i]) {
                return true
            }
        }
    }
    return false

    //解法二:
    // nums.sort((a, b) => a - b)
    // const length = nums.length
    //
    // for (let i = 0; i < length; i++) {
    //     if (nums[i] === nums[i + 1]) {
    //         return true
    //     }
    // }
    // return false

    //解法三:
    // let setNum = new Set(nums)
    // let setList = [...setNum]
    // if (setList.length !== nums.length) {
    //     return true
    // } else return false

    // 简化解法三
    // return [...new Set(nums)].length < nums.length;

};
console.log(containsDuplicate([1, 2, 3, 4, 1, 2]))

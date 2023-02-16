/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路：
 * 用js的api
 * 先将数组用join('')转成字符串之后用split('0')切割,切割之后排序(降序),返回第1个字符串的长度即为最大连续1的个数
 */
// let findMaxConsecutiveOnes = function (nums) {
//     return nums.join('').split('0').sort((a, b) => b.length - a.length)[0].length
// };
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

/*
* 思路2:
* 遍历数组,
* 用count来记录1的值,碰见1,count+1,和max比较大小,碰见0,count重置为0
* 返回max
* */
let findMaxConsecutiveOnes = function (nums) {
    let max = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) count++
        else count = 0
        max = Math.max(max, count)
    }
    return max
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
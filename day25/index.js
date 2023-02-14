/**
 * @param {number[]} nums
 * @return {number[]}
 * 解题思路:使用额外空间返回结果res
 * 利用for循环遍历，遍历次数为数组的长度
 * 由于范围在[1,n],所以i从1开始每次循环在nums中找有没有i,有的话不操作，没有的将i添加到res中
 */
let findDisappearedNumbers = function (nums) {
    let res = []
    let length = nums.length
    for (let i = 1; i <= length; i++) {
        if (!nums.includes(i)) {
            res.push(i)
        }
    }
    return res
};

console.log(findDisappearedNumbers([1, 1]))
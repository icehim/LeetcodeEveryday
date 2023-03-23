/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路:
 * 遍历，之后用set去重
 */
let intersection = function (nums1, nums2) {
    length = nums1.length
    let arr = []
    for (let i = 0; i < length; i++) {
        if (nums2.includes(nums1[i])) {
            arr.push(nums1[i])
        }
    }
    return [...new Set(arr)]
};
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
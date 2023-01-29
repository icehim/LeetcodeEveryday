/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 用splice将nums2把nums[m]~nums[m+n]的值替换，替换之后在.sort排序，数字数组排序需要传参
 */
let merge = function (nums1, m, nums2, n) {
    nums1.splice(m, m + n, ...nums2)
    nums1.sort(function (a, b) {
        return a - b
    })
    console.log(nums1)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

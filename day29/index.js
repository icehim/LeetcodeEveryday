/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路:
 * 先遍历nums1,遍历过程中用.indexOf方法查找nums2中的nums1[i]的下标index,
 * 接着遍历index+1到nums2.length,遍历中如果找到nums2中比nums1[i]大的值将其添加到res[]中同时退出对nums2的遍历。
 * 如果遍历的值等于nums2.length,说明没有比nums1[i]大的值,所以res[]中添加-1
 */
let nextGreaterElement = function (nums1, nums2) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {

        let index = nums2.indexOf(nums1[i])
        let j = index + 1
        for (j; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j])
                break
            }
        }
        if (j === nums2.length) res.push(-1)
    }
    console.log(res)
    return res
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
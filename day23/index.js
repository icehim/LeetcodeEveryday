/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路：
 * 遍历nums1,遍历过程中查找nums2中是否有和nums1相同的值,有的话记录下它在nums2中的下标值,【把nums2中改下标的值写为false,来保证出现次数不一致，取较小值】
 * 同时在返回结果res中添加nums1中遍历的当前值
 */
let intersect = function (nums1, nums2) {
    const res = []


    for (let number of nums1) {
        // indexOf(xxx) =>找xxx,有返回其所在下标，没有返回-1
        const index = nums2.indexOf(number)
        if (index !== -1) {
            nums2[index] = false
            res.push(number)
        }
    }
    return res
};
console.log(intersect([4, 9, 5], [8, 4, 9, 8, 4]));

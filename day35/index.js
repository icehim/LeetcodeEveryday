/**
 * @param {number[]} height
 * @return {number}
 * 解题思路:双指针遍历
 */
let maxArea = function (height) {
    //第一个指针从头开始
    let left = 0
    //第二个指针从尾开始
    let right = height.length - 1
    //最大的面积
    let maxArea = 0
    //遍历条件头<尾
    while (left < right) {
        //计算当前的面积
        const currentArea = (right - left) * Math.min(height[left], height[right])
        //比较当前面积和最大面积的大小,并把大的赋值给最大面积
        maxArea = Math.max(maxArea, currentArea)
        //决定面积大小的因素是两边中小的那一条边,将left和right较小的一方向内移动。因为如果大的向内移动计算出来的面积肯定不如当前的大
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
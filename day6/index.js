/**
 * @param {number[]} nums
 * @return {number}
 */

// 比较当前元素和下一位元素是否重复，重复则删除下一位，循环位置不变，继续与下一个元素比较
// 当前元素和下一个原属不重复，循环位置递增1，移动下一位
let removeDuplicates = function(nums) {

    let step = 0

    for (let i = step; i < nums.length; i=i+step) {
        if (nums[i]===nums[i+1]){
            nums.splice(i+1,1)
            step = 0
        }else{
            step=1
        }
    }
    return nums.length

};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

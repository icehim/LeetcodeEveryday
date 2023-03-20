//时间复杂度O(n²)
// var twoSum = function(nums, target) {
//     var arr = []
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 arr = [i,j]
//             }
//         }
//         if(arr.length===2) break
//     }
//     return arr
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度O(n)
 */
var twoSum = function (nums, target) {
    //用对象存储数字出现的位置
    const data = {}

    for (let i = 0; i < nums.length; i++) {
        //获取目标值的索引
        let targetNumIndex = data[target - nums[i]]
        if (targetNumIndex !== undefined) {
            return [i, targetNumIndex]
        } else {
            data[nums[i]] = i
        }
    }
};
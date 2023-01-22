/**
 * @param {number[]} nums
 * @return {number}
 */
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

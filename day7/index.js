/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    let length = nums.length
    let step = 0
    for (let i = step; i < nums.length; i=i+step) {
        if (nums[i]===val){
            nums.splice(i,1)
            length--
            step=0
        }else step=1
    }
    console.log(nums)
    return length
};
console.log(removeElement([3,2,2,3],3));

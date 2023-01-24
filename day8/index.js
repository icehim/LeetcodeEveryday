/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else if (nums[i] > target) {
            // nums.splice(i, 0, target)
            return i
        }
    }
    return nums.length
};
console.log(searchInsert([1, 3, 5, 6], 7));

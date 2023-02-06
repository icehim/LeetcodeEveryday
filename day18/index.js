/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function (nums, k) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
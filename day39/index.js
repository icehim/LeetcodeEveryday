/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 解题思路:
 * 从低位找一个大一点的数，交换前面一个小一点的数
 * 变大的幅度要尽量小
 * 像[3,2,1]这样递减的,没有下一个排列，无法变大只能反转数组返回.
 * 像[1,5,2,4,3,2]这种该如何变大?
 * 1.从右往左开始遍历,寻找第一个比右邻居小的数nums[i],把这个数换到后面
 * 2.找到i之后接着从右往左，寻找第一个比nums[i]大的数nums[j]，将nums[i]和nums[j]进行交换，nums[j]必定存在,因为i右边单调递增，且nums[i]的右邻居比nums[i]大
 * 3.因为把小的数字交换到了后面，所以i右边的数仍然递增，
 * 4.此时只需要把这个i右边递增的数列头尾交换，并向中间逼近就能得到右边数列的最小值
 */
let nextPermutation = function (nums) {
    //从右向左遍历,i从倒数第二个开始是为了保证有右邻居的存在
    let i = nums.length - 2
    //寻找第一个小于右邻居的数
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    //i>=0说明第一个比右邻居小的数nums[i]存在,从这个数后边找一个比他大的数交换
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    // 对i右边的数进行交换
    // 因为 i 右边的数原来是从右往左递增的，把一个较小的值交换过来之后，仍然维持单调递增特性
    // 此时头尾交换并向中间逼近就能获得 i 右边序列的最小值
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
        [nums[L], nums[R]] = [nums[R], nums[L]]
        L++
        R--
    }
};
nextPermutation([1, 2, 3]);
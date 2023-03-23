/**
 * @param {number[]} candyType
 * @return {number}
 * 解题思路:
 * 糖果种类用set去重，
 * 返回去重后的糖果个数和医生建议吃的个数中较小的一个
 */
let distributeCandies = function (candyType) {
    return Math.min(new Set(candyType).size, candyType.length / 2)
};

console.log(distributeCandies([1, 2, 3, 4]));
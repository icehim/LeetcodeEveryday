/**
 * @param {number[]} score
 * @return {string[]}
 * 解题思路:
 * 用Math.max找解构之后的score中最大的一个数字,并用indexOf找到这个数字在数组中的下标
 * 每找到一个score数组中的最大数后,前三个按"Gold Medal", "Silver Medal", "Bronze Medal"赋值,
 * 后面的按i+1来赋值
 * 每次遍历都需要将找到的数字改写为false
 */
let findRelativeRanks = function (score) {
    // arr:返回题目所需要的名次数组
    let arr = []
    // rank:前三名的数组
    let rank = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    // length:score的遍历长度
    let length = score.length
    for (let i = 0; i < length; i++) {
        // 每次遍历要找到score中最大值的下标
        let index = score.indexOf(Math.max(...score))
        if (i < 3) {
            // 前三次遍历所找到的最大数就是rank中对应的第一二三名
            arr[index] = rank[i]
        } else {
            // 三次之后找到的按'下标+1'确定次序
            arr[index] = `${i + 1}`
        }
        // 每次遍历都需要将找到的数字改写为false,防止影响到后续的遍历
        score[index] = false
    }
    return arr
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
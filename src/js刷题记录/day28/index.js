/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * 解题思路:
 * 计算两次攻击时间的间隔gap,如果中毒持续时间duration>gap,则只累加时间间隔gap,如果中毒持续时间duration<gap,则累加duration,最后需要加一个duration
 */
let findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length === 0) { // 没有攻击发生
        return 0;
    }
    let res = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        const gap = timeSeries[i] - timeSeries[i - 1]; // 时间间隔
        if (duration > gap) { // 覆盖了gap
            res += gap;
        } else {
            res += duration;
        }
    }
    return res + duration; // 补上最后一次攻击的一个duration
};
console.log(findPoisonedDuration([1, 2, 5, 10], 4));
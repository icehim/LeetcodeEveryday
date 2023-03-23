import isBracketsValid from "./isBracketsValid";
// expect()返回被称作“expectation”的对象。toBe()被称作matcher。Jest会对两者进行比较并输出测试结果。

test('()', () => {
    expect(isBracketsValid('()')).toBe(true)
})

test('()[]{}', () => {
    expect(isBracketsValid('()[]{}')).toBe(true)
})
test('([)]', () => {
    expect(isBracketsValid('([)]')).toBe(false)
})
test('(]', () => {
    expect(isBracketsValid('(]')).toBe(false)
})
test('{[]}', () => {
    expect(isBracketsValid('{[]}')).toBe(true)
})
test('{', () => {
    expect(isBracketsValid('{')).toBe(false)
})

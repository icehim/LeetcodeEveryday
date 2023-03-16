/**
 * @param {string} s
 * @return {boolean}
 * 分析测试用例
 * 1.字符串固定
 * 2.成对出现
 * 3.闭合顺序 (最后出现的括号第一个闭合)=》最先出现的括号最后一个闭合
 *
 * 解题思路
 * 算法原理：
 * 1.用栈来模拟括号的顺序
 * 2.可以创建一个对象，建立左右括号的对应关系，key是左括号，value是右括号
 *
 * 算法流程
 * 1.遍历字符串的每一个字符
 * 2.如果是左括号、入栈
 * 3.如果是右括号，判断栈顶的元素和当前右括号是否对应？如果不对应，就return false，如果对应栈顶元素出栈
 * 4.遍历后保证栈内元素的size 为空
 */

let isValid = function (s) {
    const Map = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    const myStack = new Stack()
    //for of 遍历数组的每一项值
    for (let item of s) {
        if (Map[item]) {
            myStack.push(item)
        } else {
            console.log(myStack)
            const last = myStack.pop()//.pop()会返回删除的元素
            if (item !== Map[last]) return false
        }
    }
    return myStack.isEmpty()
};


class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        return this.stack.push(item)
    }

    pop() {
        return this.stack.pop()//移除最后一个元素
    }

    peek() {
        return this.stack[this.getSize() - 1]
    }

    getSize() {
        return this.stack.length
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}

console.log(isValid('([{}])'))

//第一种解法、for遍历
// let isValid = function (s) {
//     if ((s[0] === ')') || (s[0] === '}') || (s[0] === ']') || (s[s.length - 1] === '(') || (s[s.length - 1] === '{') || (s[s.length - 1] === '[')) return false
//     if (s.length % 2 === 1) return false
//
//     let length = s.length / 2;
//
//     for (let i = 0; i < length; i++) {
//         s = s.replace("()", "");
//         s = s.replace("{}", "");
//         s = s.replace("[]", "");
//     }
//
//     return s.length === 0;
// };


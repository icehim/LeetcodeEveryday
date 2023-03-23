# LeetCode笔记

## [1. 两数之和](https://leetcode.cn/problems/two-sum/)

```javascript
//时间复杂度O(n²)
// var twoSum = function(nums, target) {
//     var arr = []
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 arr = [i,j]
//             }
//         }
//         if(arr.length===2) break
//     }
//     return arr
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度O(n)
 */
var twoSum = function (nums, target) {
    //用对象存储数字出现的位置
    const data = {}

    for (let i = 0; i < nums.length; i++) {
        //获取目标值的索引
        let targetNumIndex = data[target - nums[i]]
        if (targetNumIndex !== undefined) {
            return [i, targetNumIndex]
        } else {
            data[nums[i]] = i
        }
    }
};
```

## [9. 回文数](https://leetcode.cn/problems/palindrome-number/)

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString()
    if (x.length % 2 === 0) {
        for (let i = 0; i < x.length / 2; i++) {
            if (x[i] !== x[x.length - 1 - i]) {
                return false
            }
        }
        return true
    } else {
        for (let i = 0; i < (x.length / 2) - 1; i++) {
            if (x[i] !== x[x.length - 1 - i]) {
                return false
            }
        }
        return true
    }
};

```

## [13. 罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i + 1] === 'V') {
            sum += 4
            i++
            continue
        } else if (s[i] === 'I' && s[i + 1] === 'X') {
            sum += 9
            i++
            continue
        }
        if (s[i] === 'X' && s[i + 1] === 'L') {
            sum += 40
            i++
            continue
        }
        if (s[i] === 'X' && s[i + 1] === 'C') {
            sum += 90
            i++
            continue
        }
        if (s[i] === 'C' && s[i + 1] === 'D') {
            sum += 400
            i++
            continue
        }
        if (s[i] === 'C' && s[i + 1] === 'M') {
            sum += 900
            i++
            continue
        }
        if (s[i] === 'I') sum += 1
        if (s[i] === 'V') sum += 5
        if (s[i] === 'X') sum += 10
        if (s[i] === 'L') sum += 50
        if (s[i] === 'C') sum += 100
        if (s[i] === 'D') sum += 500
        if (s[i] === 'M') sum += 1000
    }
    return sum
};
```

## [14. 最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)

```javascript
let longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]

    let minStr = strs[0]
    let result = ''
    for (let i = 1; i < strs.length; i++) {
        if (minStr.length > strs[i].length) {
            minStr = strs[i]
        }
    }

    for (let i = 0; i < minStr.length; i++) {
        let temp = minStr[i]

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] === temp) {
                temp = strs[j][i]
            } else {
                return result
            }
        }
        result = result + temp
    }
    return result

};

console.log(longestCommonPrefix(["dog", 'dg']));
```

## [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)

```javascript
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
```

## [26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

// 比较当前元素和下一位元素是否重复，重复则删除下一位，循环位置不变，继续与下一个元素比较
// 当前元素和下一个原属不重复，循环位置递增1，移动下一位
let removeDuplicates = function (nums) {

    let step = 0

    for (let i = step; i < nums.length; i = i + step) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            step = 0
        } else {
            step = 1
        }
    }
    return nums.length

};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
```

## [27. 移除元素](https://leetcode.cn/problems/remove-element/)

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    let length = nums.length
    let step = 0
    for (let i = step; i < nums.length; i = i + step) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            length--
            step = 0
        } else step = 1
    }
    console.log(nums)
    return length
};
console.log(removeElement([3, 2, 2, 3], 3));
```

## [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/)

```javascript
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
```

## [58. 最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/)

```javascript
/**
 * @param {string} s
 * @return {number}
 */

// 思路先以空格分割字符串=>从后往前便利=>返回数组中的非空字符串长度

let lengthOfLastWord = function (s) {
    let arr1 = s.split(' ')
    for (let i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i].length) {
            return arr1[i].length
        }
    }
};

console.log(lengthOfLastWord('luffy is still joyboy'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
```

## [66. 加一](https://leetcode.cn/problems/plus-one/)

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 * 投机取巧一下，先用.join('')把数组转成字符串，再用'+'或者'Number()','toString()'之类方法转成数字之后+1，但是有个问题就是精度丢失!
 * 所以用BigInt()转,然后+1n,用toString去掉BigInt的n,再用split切割字符串转为数组
 *
 */
let plusOne = function (digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('');
    // digits = digits.toString().split('')
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
```

## [67. 二进制求和](https://leetcode.cn/problems/add-binary/)

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给a,b字符串分别在前面加上0b代表a,b是二进制数,再用BigInt转成十进制数,a,b相加之后用toString(2)转成二进制
 */
let addBinary = function (a, b) {

    return ((BigInt('0b' + a) + BigInt('0b' + b)).toString(2))
};
console.log(addBinary('1010', '1011'))
```

## [69. x 的平方根](https://leetcode.cn/problems/sqrtx/)

```javascript
/**
 * @param {number} x
 * @return {number}
 *for循环暴力解
 */
let mySqrt = function (x) {
    if (x === 0) return 0
    if (x === 1) return 1
    for (let i = 1; i <= 46341; i++) {
        if ((i * i) > x) {
            return i - 1
        } else if ((i * i) === x) {
            return i
        }
    }
};
console.log(mySqrt(9));
```

## [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 用splice将nums2把nums[m]~nums[m+n]的值替换，替换之后在.sort排序，数字数组排序需要传参
 */
let merge = function (nums1, m, nums2, n) {
    nums1.splice(m, m + n, ...nums2)
    nums1.sort(function (a, b) {
        return a - b
    })
    console.log(nums1)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
```

## [136. 只出现一次的数字](https://leetcode.cn/problems/single-number/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 * 利用异或运算XOR
 * 异或运算有以下几个特点：
 * 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
 * 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
 * XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 * 将nums中所有的数做异或运算最后的结果为唯一的数字
 */
let singleNumber = function (nums) {
    let res = 0
    for (const num of nums) {
        res = res ^ num
    }
    return res
};
console.log(singleNumber([1]));
```

## [169. 多数元素](https://leetcode.cn/problems/majority-element/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 * 先对数组进行排序，排完序之后，如果有一个数字出现的次数大于n/2,则元素位于该排序数组的n/2的位置
 */
const majorityElement = function (nums) {
    if (nums.length === 1 || nums.length === 2) return nums[0]

    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
```

## [171. Excel 表列序号](https://leetcode.cn/problems/excel-sheet-column-number/)

```javascript
/**
 * @param {string} columnTitle
 * @return {number}
 * 思路:
 * 1.字符转转为ascii码
 * 2.然后对65取余+1得到A~Z对应1~26
 * 3.然后乘以对应的26的length-1-i次幂
 * 4.累加得到结果
 */
let titleToNumber = function (columnTitle) {
    let length = columnTitle.length
    let col = 0
    for (let i = 0; i < length; i++) {
        col = col + ((columnTitle[i].charCodeAt(0) % 65) + 1) * Math.pow(26, length - 1 - i)
    }
    return col
};
console.log(titleToNumber('ZY'));
```

## [217. 存在重复元素](https://leetcode.cn/problems/contains-duplicate/)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 * 解法一:双for循环遍历找是否有相同值
 * 解法二:对数组排序，单for循环比较当前值和下一个值
 * 解法三:用set
 */
let containsDuplicate = function (nums) {

    // 解法一：
    let length = nums.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[j] === nums[i]) {
                return true
            }
        }
    }
    return false

    //解法二:
    // nums.sort((a, b) => a - b)
    // const length = nums.length
    //
    // for (let i = 0; i < length; i++) {
    //     if (nums[i] === nums[i + 1]) {
    //         return true
    //     }
    // }
    // return false

    //解法三:
    // let setNum = new Set(nums)
    // let setList = [...setNum]
    // if (setList.length !== nums.length) {
    //     return true
    // } else return false

    // 简化解法三
    // return [...new Set(nums)].length < nums.length;

};
console.log(containsDuplicate([1, 2, 3, 4, 1, 2]))
```

## [219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/)

```javascript
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
```

## [228 汇总区间](https://leetcode.cn/problems/summary-ranges/)

```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 * 解题思路:从数组下表为0出发，向右遍历，当相邻元素之间的差值大于1时，就找到了一个区间。
 * 遍历过程中，用start和end分别表示区间的起点和终点
 * start < end 时 区间的字符串表示为 'nums[start]->nums[end]'
 * start = end 时 区间表示为 'nums[low]'
 */
let summaryRanges = function (nums) {
    const res = []
    let i = 0;
    const length = nums.length

    while (i < length) {
        const start = i
        i++
        while (i < length && nums[i - 1] + 1 === nums[i]) {
            i++
        }
        const end = i - 1
        const temp = ['' + nums[start]]
        if (start < end) {
            temp.push('->')
            temp.push('' + nums[end])
        }
        console.log(temp)
        res.push(temp.join(''));
        console.log(res)
    }
    return res
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
```

## [268 丢失的数字](https://leetcode.cn/problems/missing-number/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 * 解题思路:排序看后一个数是不是比前一个数大1,是继续循环，不是返回当前循环的数+1
 *
 */
let missingNumber = function (nums) {
    let length = nums.length
    nums.sort((a, b) => a - b)
    if (nums[0] !== 0) return 0
    for (let i = 0; i < length; i++) {
        if (i + 1 !== nums[i + 1]) {
            return i + 1
        }
    }
};
console.log(missingNumber([0]))
```



































## 346. 数据流中的移动平均值

> **给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。**

**示例：**

```
MovingAverage m = new MovingAverage(3)
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
```

```javascript
/*分析测试用例
* 1.窗口大小固定，并且为整数
* 2.调用next添加数字并且计算平均值
* 3.超过窗口大小，最先添加的数字优先移除(先进先出)
* */

/*解题思路：
* 算法原理
* 1.使用队列添加数字
* 2.通过创建成员变量来保持计算的值
* */

/*算法流程
* 1.新增整数,进入队列操作
* 2.累加整数并保存结果
* 3.如果队列大小超出窗口大小，进行出队操作，并且对成员变量进行减法
* 4.返回平均值
* */

let MovingAverage = function (size) {
    this.windowSize = size
    this.myQueue = new Queue()
    this.sum = 0
}

MovingAverage.prototype.next = function (val) {
    if (this.myQueue.getSize() > this.windowSize) {
        this.sum -= this.myQueue.getHeader()
        this.myQueue.deQueue()
    }
    this.myQueue.enQueue(val)
    this.sum += val
    return this.sum / this.myQueue.getSize()
}

class Queue {
    constructor() {
        this.queue = []
    }

    enQueue(item) {
        return this.queue.push(item)
    }

    deQueue() {
        return this.queue.shift()//第一个元素从数组中删除，并返回第一个元素的值。
    }

    getHeader() {
        return this.queue[0]
    }

    getSize() {
        return this.queue.length
    }

    isEmpty() {
        return this.getSize() === 0
    }
}
```

## [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

![反转链表.drawio (1)](https://cos.icehim.com/typora/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.drawio%20(1).svg)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 分析测试用例
 * 1.确定好一个链表的头节点
 * 2.输入一个反转后的链表
 *
 * 算法原理
 * 1.递归遍历链表
 * 2.遍历的过程中反转next指针
 *
 * 算法流程
 * 1.创建两个变量，一个是未反转的链表指针，另一个时反转后的链表
 * 2.递归遍历未反转的链表
 * 3.修改next指针，并且当前链表指针向前继续遍历，直到next等于null
 *
 */

var reverseList = function(head) {
    let cur = head
    let prev = null
    while (cur){
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return  prev
};
console.log(reverseList([1, 2, 3, 4, 5]));
```

## [144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

递归

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = []
    set(root)
    return res
    function set(tree) {
        //判断根节点是否存在
        if (!tree) return
        //将根节点的值添加到res
        res.push(tree.val)
        //判断、递归左节点
        tree.left && set(tree.left)
        //判断、递归右节点
        tree.right && set(tree.right)
    }
};
```

迭代

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        return this.stack.push(item)
    }

    pop() {
        return this.stack.pop()//移除并返回最后一个元素
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
var preorderTraversal = function(root) {
    //创建一个栈
    let myStack = new Stack()
    let arr = []
    //根节点放入栈中
    root && myStack.push(root)
    //迭代
    while (!myStack.isEmpty()){
        //出栈
        let cur = myStack.pop()
        //将出栈的节点值添加到arr中
        arr.push(cur.val)
        //判断右节点是否存在
        cur.right && myStack.push(cur.right)
        //判断左节点是否存在
        cur.left && myStack.push(cur.left)
    }
    return arr
};
```

## [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []
    set(root)
    return res
    function set(tree) {
        //判断根节点是否存在
        if (!tree) return
        //判断、递归左节点
        tree.left && set(tree.left)
        //将根节点的值添加到res
        res.push(tree.val)
        //判断、递归右节点
        tree.right && set(tree.right)
    }
}
```

## [145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = []
    set(root)
    return res
    function set(tree) {
        //判断根节点是否存在
        if (!tree) return
        //判断、递归左节点
        tree.left && set(tree.left)
        //判断、递归右节点
        tree.right && set(tree.right)
        //将根节点的值添加到res
        res.push(tree.val)
    }
};
```

## [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    set(root,0)
    return res
    function set(tree,count){
        if(!tree)return
        if(!Array.isArray(res[count])) res[count] = []
        res[count].push(tree.val)
        tree.left && set(tree.left,count+1)
        tree.right && set(tree.right,count+1)
    }
};
```

## [700. 二叉搜索树中的搜索](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(val < root.val){
        return root.left? searchBST(root.left,val) : null
    }
    if(val > root.val){
        return root.right? searchBST(root.right,val) : null
    }
    if(val===root.val){
        return root
    }
};
```

## [701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root===null) return new TreeNode(val)
    return searchBST(root,val)
    function searchBST(tree,val){
        if(val < tree.val){ 
            if(tree.left){
                searchBST(tree.left,val)
            }else{
                tree.left = new TreeNode(val)
            }
        }
        if(val > tree.val){
            if(tree.right){
                searchBST(tree.right,val)
            }else{
                tree.right = new TreeNode(val)
            }
        }
        return tree
    }
};
```

## [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/)

```javascript
// 算法原理
// 实现TridNode
// 插入操作
// 1.字符串切割,并且逐步插入每个字母
// 2.可以预设好插入的位置(声明一个26项的数组),并且在当前位置插入新节点
// 搜索操作
// 1.字符串的切割，并且逐步查找每个字母
// 2.判断是否还有子节点
// 3.给每个节点预设结束的标记位
// 前缀查询操作
// 1.字符串的切割，并且逐步查找每个字母
// 2.判断是否还有子节点
// 3.对单词结束位进行判定

// 算法流程
// 插入操作
// 1.遍历每个字符
// 2.计算当前字符的索引位置，以0为起始点，charCodeAt
// 3.如果当前字符的索引位置没有值，就在当前位置创建一个新节点，并且插入到当前位置
// 4.如果对应的索引位置有值，则继续遍历下一个字母
// 5.最后要设定结束标记位

// 搜索操作
// 1.遍历每个字符
// 2.计算当前字符的索引位置，以0为起始点，charCodeAt
// 3.如果对应的索引位置没有值，代表没有需要搜索的字符串，直接返回0
// 4.如果对应的索引位置有值，则继续遍历一个字母
// 5.返回结束标记位

// 前缀查询操作
// 1.遍历每个字符
// 2.计算当前字符的索引位置，以0为起始点，charCodeAt
// 3.如果对应的索引位置没有值，代表没有需要搜索的字符串，直接返回0
// 4.如果对应的索引位置有值，则继续遍历一个字母
// 5.返回true

class TrieNode{
    constructor(){
        // 存储字母的容器
        // .fill(null)填充数组
        this.next = new Array(26).fill(null)
        // 代表当前节点的结束位置
        this.end = 0
        // 代表当前接单的层级信息
        this.path = 0
    }
}
var Trie = function() {
    // 根节点，代表空字符串
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word) return
    let node = this.root
    for(let i = 0;i<word.length;i++){
        // 获取每个字符对应的索引
        let index = word[i].charCodeAt() - 'a'.charCodeAt()
        if(!node.next[index]){
            node.next[index] = new TrieNode()
        }
        node.path+=1
        node = node.next[index]
    }
    node.end +=1
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word) return
    let node = this.root
    for(let i = 0;i<word.length;i++){
        // 获取每个字符对应的索引
        let index = word[i].charCodeAt() - 'a'.charCodeAt()
        if(!node.next[index]){
            return 0;
        }
        node = node.next[index]
    }
    return node.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix) return
    let node = this.root
    for(let i = 0;i<prefix.length;i++){
        // 获取每个字符对应的索引
        let index = prefix[i].charCodeAt() - 'a'.charCodeAt()
        if(!node.next[index]){
            return 0;
        }
        node = node.next[index]
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

## [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var memo = {}
var climbStairs = function (n) {

// 递归的退出条件
    memo[0] = 1
    memo[1] = 1

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 2] + memo[i - 1]
    }
    return memo[n]
};
```

## [343. 整数拆分](https://leetcode.cn/problems/integer-break/)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var memo = {}
var integerBreak = function (n) {
    memo[1] = 1
    for (let i = 2; i <= n; i++) {
        //自下而上的递推
        // 4 1+3 2+2 3+3
        for (let j = 1; j <= i - 1; j++) {
            memo[i] = Math.max(memo[i] || 1, j * (i - j), j * memo[i - j]);
        }
    }
    return memo[n]
};
```

## [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */

var data = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}
let arr = []

function phoneNumber(digits, index, res) {
    //想对digits进行遍历，但是不能使用for循环
    if (index > digits.length - 1) {
        arr.push(res)
        return
    }

    let letterStr = data[digits[index] + '']
    for (let i = 0; i < letterStr.length; i++) {
        // 在循环里面进行递归
        // 保存结果
        phoneNumber(digits, index + 1, res + letterStr[i])
    }
}

var letterCombinations = function(digits) {
    if(digits.length===0) return []
    arr = []
    phoneNumber(digits, 0, '')
    return arr
};
```

## [232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)

```typescript
class MyQueue {
    data: number[]

    constructor() {
        this.data = []
    }

    push(x: number): void {
        this.data.push(x)
    }

    pop(): number {
        return this.data.shift()
    }

    peek(): number {
        return this.data[0]
    }

    empty(): boolean {
        return this.data.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```
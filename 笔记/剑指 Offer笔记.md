# 剑指Offer笔记

## 栈与队列（简单）

### [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)【*】

**JavaScript实现**

```javascript
var CQueue = function () {
    this.stackIn = []//模拟入队
    this.stackOut = []//模拟出队
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stackIn.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stackOut.length !== 0) {
        //stackOut用pop操作退栈来模拟出队
        return this.stackOut.pop()
    } else {
        // 将In栈中的元素全部添加到Out栈中
        while (this.stackIn.length !== 0) {
            this.stackOut.push(this.stackIn.pop())
        }
        // 如果Out栈中有元素弹出，没元素返回-1
        return this.stackOut.length === 0 ? -1 : this.stackOut.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

**Typescript实现**

```typescript
class CQueue {
    stackIn: number[]//入
    stackOut: number[]//出
    constructor() {
        this.stackIn = []
        this.stackOut = []
    }

    appendTail(value: number): void {
        this.stackIn.push(value)
    }

    deleteHead(): number {
        if (this.stackOut.length !== 0) {
            return this.stackOut.pop()
        } else {
            while (this.stackIn.length !== 0) {
                this.stackOut.push(this.stackIn.pop())
            }
            return this.stackOut.length === 0 ? -1 : this.stackOut.pop()
        }
    }
}
```

### [包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)【*】

**JavaScript实现**

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []//主栈
    this.minStack = [Infinity]//辅栈,用来存放主栈stack中每个元素对应的最小值,初始化为无限小
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))//比较辅栈顶元素和插入的x元素哪个小，并将小的那个添加到辅栈
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // 主栈弹出的同时辅栈也弹出
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1]
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

**Typescript实现**

```typescript
class MinStack {
    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = []
        this.minStack = [Infinity]
    }

    push(x: number): void {
        this.stack.push(x)
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    min(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

## 链表（简单）

### [从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

**JavaScript实现**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    var arr = []
    while (head) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
};
```

**Typescript实现**

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reversePrint(head: ListNode | null): number[] {
    let arr: number[] = []

    while (head) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
};
```

### [反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)【*】

**JavaScript实现**

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null// 指向上一个节点
    let curr = head// 指向当前节点
    while (curr) {
        // 定义一个变量保存下一个节点curr.next
        const next = curr.next
        // 反转链表，将当前节点的next指向上一个节点
        curr.next = prev
        // 移动prev
        prev = curr
        // 移动curr
        curr = next
    }
    // 返回反转后的头节点
    return prev
};
```

**Typescript实现**

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode = null
    let curr: ListNode = head
    while (curr) {
        const next: ListNode = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};
```

### [复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)【**】

#### 解法一：迭代 + 哈希表

🧠 解题思路

第一次迭代：利用**哈希表**(Map)，将原节点作为**key**,新节点作为**value**存放到哈希表中

![8.jpg](https://cos.icehim.com/typora/5b578a2e33a4f87536c7fe50f71ac01904ae689b26ee3e2751dac0144f009d77-8.jpg)

第二次迭代：将新链表的next和random指针指向对应的节点

![9.jpg](https://cos.icehim.com/typora/ec904c68195c9e8741e9b3302133f7def57fc4f2a02521985e08cfd92fefc67a-9.jpg)

从上图中我们可以发现，原节点和新节点是一一对应的关系，所以

- map.get(原节点)，得到的就是对应的新节点

- map.get(原节点.next)，得到的就是对应的新节点.next
- map.get(原节点.random)，得到的就是对应的新节点.random

所以，我们只需要再次遍历原链表，然后设置：

- 新节点.next -> map.get(原节点.next)
- 新节点.random -> map.get(原节点.random)
- 这样新链表的next和random都被串联起来了
- 最后，返回map.get(head)，也就是对应的新链表的头节点，就可以解决此问题了。

🍭 JavaScript实现

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head;
    let node = head;
    let map = new Map();

    // 复制原来的节点，存放到map中。map可以存对象类型的键
    while (node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    // 遍历结束之后,将node指向head接着遍历next和random
    node = head;

    //根据node,来获取map里的新节点进行next和random复制操作
    while (node) {
        // 将新节点的next指向下一个新节点，若下一个新节点不存在则指向null
        map.get(node).next = map.get(node.next) || null
        // 将新节点的random指向对应的节点
        map.get(node).random = map.get(node.random);
        node = node.next;
    }
    return map.get(head);
};
```

#### 解法二：迭代＋拼接

🧠 解题思路

**第一步**，根据遍历到的原节点(蓝色)创建对应的新节点(绿色)，每个新创建的节点是在原节点后面，比如下图中原节点**1**不再指向原原节点**2**，而是指向新节点**1**

![5.jpg](https://cos.icehim.com/typora/360dbd3b89c25324287f4cef2c22ba8a20e946891ac887f70703b211893aafa0-5.jpg)

**第二步**，是最关键的一步，用来设置新链表的随机指针

![6.jpg](https://pic.leetcode-cn.com/b531fb496fd478a2db6ba7bc805cda08b825771817dd24cdd616946a89800fbb-6.jpg)

上图中，我们可以观察到这么一个规律

- 原节点1的随机指针指向原节点3，新节点1的随机指针指向的是原节点3的next

- 原节点3的随机指针指向原节点2，新节点3的随机指针指向的是原节点2的next

也就是，原节点i的随机指针(如果有的话)，指向的是原节点j

那么新节点i的随机指针，指向的是原节点j的next

**第三步**，将两个链表分离开，再返回新链表就可以了

![7.jpg](https://cos.icehim.com/typora/9b5c6e99aa89284c8a7b423bc36fec7af39fac3f8bb709e77483e574e02ef1cd-7.jpg)

🍭 JavaScript实现

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head
    // 将原节点的next指向新创建的节点，并且新创建的节点指向原节点的next
    let curr = head
    while (curr) {
        curr.next = new Node(curr.val, curr.next)
        curr = curr.next.next
    }
    curr = head
    // 构建新节点的random指向
    while (curr) {
        if (curr.random !== null) curr.next.random = curr.random.next
        curr = curr.next.next
    }
    // 拆分链表
    curr = head
    let newNode = head.next, res = newNode
    while (curr.next && newNode.next) {
        curr.next = curr.next.next
        newNode.next = newNode.next.next
        curr = curr.next
        newNode = newNode.next
    }
    curr.next = null
    return res
};
```

## 字符串（简单）

### [替换空格【*】](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // 解法一：先以' '分割，在以'%20' 拼接
    // return s.split(' ').join('%20')
    // 解法二: 用replace,但是只能替换一个,所以用replaceAll替换全部
    return s.replaceAll(' ', '%20')
    // 解法三(有失败测试用例): 用encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
    // 百分比编码又被称为URL编码 ' '会被转换为%20
    // return encodeURIComponent(s)
};
console.log(replaceSpace('We are happy.'));
```

### [左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    return s.slice(n) + s.slice(0, n)
};
console.log(reverseLeftWords('lrloseumgh', 6));
```

## 查找算法（简单）

### [数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    // 解法一:排序后遍历
    // nums.sort((a, b) => a - b)
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i - 1] === nums[i]) {
    //         return nums[i]
    //     }

    // 解法二:哈希表
    // 使用普通对象存number类型的属性时,js会自动对number属性进行排序,而哈希表不会
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) return num
        map.set(num, num)
    }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
```

### [在排序数组中查找数字 I【**】](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找适用于排序后的数据
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let count = 0

    // 二分查找,遍历数组中下标为mid的元素,如果该元素的值为target,将mid值赋值给left,并退出循环
    while (left <= right) {
        let mid = (right + left) >> 1
        if (nums[mid] === target) {
            left = mid
            break
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    // 二分查找遍历结束后,nums[left]!==target说明没找到，返回0
    if (nums[left] !== target) return 0
    // 若nums[left]===target说明找到了,
    // 此时从[0 ~ left-1] [left ~ nums.length]这两个区间中找元素值为target的元素,
    // 如果存在,copy左移，left右移同时count+1。
    // 移动后的新元素的值不等于target说明上一个为最后一个，因为nums为排序后的数组。
    let copy = left - 1
    while (copy >= 0 && nums[copy] === target) {
        copy--
        count++
    }
    while (left < nums.length && nums[left] === target) {
        left++
        count++
    }
    return count
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
```

### [0～n-1中缺失的数字【*】](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // 解法一:遍历,用i遍历输入,i和数组中的元素一一对应说明缺少nums.length
    // 有不对应的地方则返回i
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== i) return i
    // }
    // return nums.length

    // 解法二:二分查找
    // let left = 0, right = nums.length - 1
    // while (left <= right) {
    //     let mid = (left + right) >> 1
    //     if (nums[mid] === mid) {
    //         left = mid + 1 //符合nums[mid] === mid 说明mid左半边正确，右半边缺失
    //     }
    //     if (nums[mid] > mid) {
    //         right = mid - 1 //符合nums[mid] > mid 说明mid右半边正确，左半边缺失
    //     }
    //     // 不会有nums[mid] < mid的情况,那样的话数组中只能多出元素，而不是缺少
    // }
    // return left

    // 解法三:利用哈希
    let arr = []
    for (let num of nums) {
        arr[num] = num
    }
    if (arr[nums.length] === undefined) return nums.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) return i
    }
};

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
```

## 查找算法（中等）

### [二维数组中的查找【*】](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length) return false
    // 根据二维数组建立xy坐标轴,以左下角为原点
    let x = matrix.length - 1, y = 0
    // 边界条件x < 0 或者y > matrix[0].length
    while (x >= 0 && y <= matrix[0].length) {
        if (matrix[x][y] === target) {
            return true
        } else if (matrix[x][y] < target) {// 当前数字小于目标值时右移
            y++
        } else {
            x-- //当前数字大于目标值时上移
        }
    }
    return false
};

console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5));
```

### [旋转数组的最小数字【*】](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    // 解法一:
    // 数组是被旋转了的,所以只要有数字小于numbers[0],那么他一定是最小值
    // for (let number of numbers) {
    //     if (number < numbers[0]) return number
    // }
    // return numbers[0]

    // 解法二：
    // 二分查找
    let left = 0
    let right = numbers.length - 1
    while (left <= right) {
        let mid = (left + right) >> 1
        // numbers[mid] > numbers[right]代表最小值一定在mid右侧，left移动到mid+1位置
        if (numbers[mid] > numbers[right]) {
            left = mid + 1
            // numbers[mid] < numbers[right] 代表最小值一定在mid左侧，或者就是middle的位置，将right移动到mid
        } else if (numbers[mid] < numbers[right]) {
            right = mid
        } else {
            // 如果numbers[mid]===numbers[left] || numbers[mid]===numbers[right] 此时只能right递减来找到最小值
            right--
        }
    }
    return numbers[left]
};
console.log(minArray([3, 3, 3, 3, 3, 3, 3, 3, 1, 3]));
```

### [第一个只出现一次的字符【*】](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    // 解法一 调api
    // 遍历字符串 判断当前字符串第一次出现的位置和最后一次出现的索引是否相同,相同的话不重复，不相同的话就重复
    // for (let sElement of s) {
    //     if (s.indexOf(sElement) === s.lastIndexOf(sElement)) return sElement
    // }
    // return ' '

    // 解法二 哈希表
    // let map = new Map()
    // // 将s存入map中,
    // for (let i = 0; i < s.length; i++) {
    //     let curr = s.charAt(i) //返回下标位i位置的字符
    //     // 如果curr存在的话,将map中curr所对应的值设置为false
    //     if (map.has(curr)) {
    //         map.set(curr, false)
    //     } else {
    //         // curr不存在的话设置为true
    //         map.set(curr, true)
    //     }
    // }
    // // 遍历map,第一个value值为true的元素为没有重复的
    // for (let [key, value] of map) {
    //     if (value) {
    //         return key
    //     }
    // }
    // return ' '

    // 解法三:用队列实现
    let map = new Map()
    let queue = []
    // entries()从数组中创建一个可迭代对象， 该对象包含了数组的键值对
    for (let [i, char] of Array.from(s).entries()) {
        if (!map.has(char)) {
            map.set(char, i)
            queue.push([s[i], i])
        } else {
            map.set(char, -1)
            while (queue.length && map.get(queue[0][0]) === -1) {
                queue.shift()
            }
        }
    }
    return queue.length ? queue[0][0] : ' '
};

console.log(firstUniqChar('cabac'));
```

## 搜索与回溯算法（简单）

### [从上到下打印二叉树【*】](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var levelOrder = function (root) {
    // res用来存储结果
    const res = []
    if (!root) return res
    // 声明一个队列
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        // 队列中的节点先进先出
        let firstOut = queue.shift()
        res.push(firstOut.val)
        // 宽度优先,所以树的左子节点先进
        firstOut.left && queue.push(firstOut.left)
        firstOut.right && queue.push(firstOut.right)
    }
    return res
};

```

### [从上到下打印二叉树 II【**】](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 初始化需要返回的结果数组
    const res = []
    // 调用递归函数,
    set(root, 0)
    // 返回
    return res

    /**
     *
     * @param tree  需要递归的节点
     * @param index res的下标相当于二叉树的层数,初始值为根节点从0开始
     */
    function set(tree, index) {
        // 节点不存在退出函数
        if (!tree) return
        // 当res[index]不存在时,对其进行初始化
        if (!Array.isArray(res[index])) res[index] = []
        // 给res[index]添加当前节点的值
        res[index].push(tree.val)
        // 当前节点的左子节点存在时,优先递归,因为是子节点,所以层数index+1
        tree.left && set(tree.left, index + 1)
        // 右子节点存在时,接着递归
        tree.right && set(tree.right, index + 1)
    }
};
```

### [从上到下打印二叉树 Ⅲ【*】](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = []
    set(root, 0)
    for (let i = 0; i < res.length; i++) {
        if (i % 2 === 1) {
            res[i].reverse()
        }
    }
    return res

    function set(tree, count) {
        if (!tree) return
        if (!Array.isArray(res[count])) res[count] = []
        res[count].push(tree.val)
        tree.left && set(tree.left, count + 1)
        tree.right && set(tree.right, count + 1)
    }
};

```

### [26. 树的子结构【**】](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)

```typescript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 解题思路:
 * 1.在树A找和树B的根节点值一样的节点R
 * 2.再判断树A中以R为根节点的子树是不是包含和树B一样的结构
 */
var isSubStructure = function (A, B) {
    let res = false
    if (A && B) {
        if (A.val === B.val) res = treeHasTreeB(A, B)
        if (!res) res = isSubStructure(A.left, B)
        if (!res) res = isSubStructure(A.right, B)
    }
    return res
};
const treeHasTreeB = (R, B) => {
    if (!B) return true //B===null代表B遍历完了,说明R包含和树B一样的结构
    if (!R) return false //R===null代表R遍历完了,但是B还没有遍历完，那B肯定不是R的子结构
    if (R.val !== B.val) return false
    return treeHasTreeB(R.left, B.left) && treeHasTreeB(R.right, B.right) //短路
}
```

## 双指针（简单）

### [18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let curr = head
    while (curr) {
        if (curr.val === val) {
            return curr.next
        }
        if (curr.next && curr.next.val === val) {
            curr.next = curr.next.next
            return head
        }
        curr = curr.next
    }
};
```

### [22. 链表中倒数第k个节点【*】](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 解法一:利用哈希表
 */
var getKthFromEnd = function (head, k) {
    let map = new Map
    let count = 0
    let curr = head
    while (curr) {
        map.set(count++, curr)
        curr = curr.next
    }
    return map.get(count - k + 1)
};

```

```typescript
// 解法二:利用快慢指针，快指针先走k,之后快慢指针一起走，直到快指针为null
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let quick = head, slow = head
    let i = 0
    while (quick) {
        if (i >= k) {
            slow = slow.next
        }
        quick = quick.next
        i++
    }
    return i >= k ? slow : null
};
```

### [25. 合并两个排序的链表【**】](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 需要返回结果的头节点
    const preHead = new ListNode(-1)
    // 需要维护的指针
    let prev = preHead
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 === null ? l2 : l1
    return preHead.next
};
```

### [52. 两个链表的第一个公共节点【**】](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 双指针法，浪漫相遇 遍历完自己的节点后 交换位置继续遍历
    // 最后二者的总步数是一样 相遇时即为所求第一个祖先节点
    // 两个链表长度分别为L1+C、L2+C， C为公共部分的长度，
    // 第一个人走了L1+C步后，回到第二个人起点走L2步；
    // 第2个人走了L2+C步后，回到第一个人起点走L1步。
    // 当两个人走的步数都为L1+L2+C时两个人相遇
    let node1 = headA
    let node2 = headB

    while (node1 !== node2) {
        node1 = node1 ? node1.next : headB
        node2 = node2 ? node2.next : headA
    }
    return node1
};

```

### [21.调整数组顺序使奇数位于偶数前面【*】](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 * 解法一：利用辅助数组
 */
var exchange = function (nums) {
    const res = []
    for (let num of nums) {
        if (num % 2 === 0) {
            res.push(num)
        } else {
            res.unshift(num)
        }
    }
    return res
};

console.log(exchange([1, 2, 3, 4]));
```

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 * 解法二：对2取余数后，利用sort排序
 */
var exchange = function (nums) {
    return nums.sort((a, b) => b % 2 - a % 2)
};

console.log(exchange([1, 2, 3, 4]));
```

```typescript
// 解法三：定义双指针，left从左到右寻找偶数，right从右到左寻找奇数，将找到的偶数和偶数交换位置
// x&1 位运算 等价于 x%2 取余运算，即皆可用于判断数字奇偶性。
function exchange(nums: number[]): number[] {
    let left: number = 0
    let right: number = nums.length - 1

    while (left < right) {
        while (left < right && (nums[left] & 1) === 1) left++   //遇到奇数跳过
        while (left < right && (nums[right] & 1) === 0) right-- //遇到偶数跳过
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
    }
    return nums
};
```

## 搜索与回溯算法（中等）

### [12. 矩阵中的路径【**】](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    /**
     *
     * @param currRow   当前行
     * @param currColumn    当前列
     * @param index 要匹配的当前字符
     * @returns {*|boolean}
     */
    function dfs(currRow, currColumn, index) {
        // 越界情况:超出行列 或者 行列数为负数 或者 当前行列对应的元素和word中的元素不同  的情况下返回false
        if (currRow >= row || currRow < 0 || currColumn >= column || currColumn < 0 || board[currRow][currColumn] !== word[index]) {
            return false
        }
        // 当index下标值为word的最后一个说明找到该路径了  返回true
        if (index === word.length - 1) {
            return true
        }
        // 置空当前元素表明已经被遍历过
        board[currRow][currColumn] = ''
        // 在置空当前元素的情况下继续递归,该元素的上下左右元素看是否有满足于单词的路径，只要有一个满足就行。
        let res = dfs(currRow - 1, currColumn, index + 1) || dfs(currRow + 1, currColumn, index + 1) || dfs(currRow, currColumn - 1, index + 1) || dfs(currRow, currColumn + 1, index + 1)
        // 递归完成之后，将符合条件的字符变回来，以便后续遍历无误
        board[currRow][currColumn] = word[index]
        return res
    }

    // 行数
    let row = board.length
    // 列数
    let column = board[0].length
    // 遍历board中每个元素
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }
    return false
};
```

### [机器人的运动范围【**】](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    // visited用来记录走过的格子，避免重复，初始化二维数组，初始值都为false，默认都没走过。
    const visited = Array(m).fill(0).map(_ => Array(n).fill(false));

    // 用来计算位数和
    function sum(n) {
        let res = 0
        while (n) {
            res += n % 10
            n = Math.floor(n / 10)
        }
        return res
    }

    // dfs
    function dfs(x, y) {
        // 边界条件，位数和大于k  不能移动到方格外    不能重复
        if (sum(x) + sum(y) > k || x >= m || y >= n || visited[x][y]) {
            return 0
        } else {
            // 走过的格子设置为true
            visited[x][y] = true
            // 记录当前格子已经走过，返回当前计数 1 + 后续其他两个方向的总和
            return 1 + dfs(x + 1, y) + dfs(x, y + 1)
        }
    }

    return dfs(0, 0)
};
console.log(movingCount(2, 3, 2));
```

### [34.二叉树中和为某一值的路径【**】](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    let res = []
    if (!root) return res

    /**
     *
     * @param node  递归的节点
     * @param target    经过递归后当前节点值和目标值的差值
     * @param paths 节点添加到路径
     */
    function dfs(node, target, paths) {
        paths.push(node.val)
        // 当前节点没有子节点并且当前节点的值等于差值结束递归
        if (!node.left && !node.right && node.val === target) {
            res.push(paths)
        }
        // path.slice()数组的浅拷贝，供下一次递归使用，每次递归都要减去当前值
        if (node.left) {
            dfs(node.left, target - node.val, paths.slice())
        }
        if (node.right) {
            dfs(node.right, target - node.val, paths.slice())
        }
    }

    dfs(root, target, [])
    return res
};
```

### [36. 二叉搜索树与双向链表【*】](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * 解题思路:中序遍历+递归
 *  二叉搜索数经过中序遍历后会得到一个递增的序列满足链表的排序条件
 */
var treeToDoublyList = function (root) {
    function dfs(node) {
        if (!node) return node
        // 中序遍历的顺序：左根右
        dfs(node.left)
        // 当pre===null的时候说明,指向最小的叶子节点，也就是链表的头节点，将head指向它.
        // 当pre!==null的时候,将pre.right指向当前节点
        pre !== null ? pre.right = node : head = node
        // 将当前节点的left指向pre节点
        node.left = pre
        // 移动pre节点
        pre = node

        dfs(node.right)
    }

    if (!root) return root
    // 返回链表的头节点
    let head = null
    // 需要维护的当前节点
    let pre = head

    dfs(root)
    // 中序遍历完成后,pre只想最后一个链表节点，将head.left点指向尾节点
    head.left = pre
    // 将尾节点pre.right 指向头节点
    pre.right = head
    return head
};
```

## 排序（简单）

### [把数组排成最小的数【**】](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} nums
 * @return {string}
 * 解题思路：
 * 用a+b与b+a来比较大小排序
 * 将数组转为字符串
 *
 * 例如3+30=330  '>'  30+3=303
 *
 */
var minNumber = function (nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join("");
};
console.log(minNumber([3, 30, 34, 5, 9]));

console.log('330' - '303')
```

### [61. 扑克牌中的顺子【**】](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 * 解题思路:
 * 满足5张牌是顺子的条件：
 * 1.   5张牌无重复(大小王除外)
 * 2.   最大牌 - 最小牌 < 5 (大小王除外)
 */
var isStraight = function (nums) {
    // 记录大小王牌的数量
    let joker = 0
    // 对nums进行排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        // 如果是大小王牌则joker+1
        if (nums[i] === 0) {
            joker++
            // 如果不是大小王牌，当前牌和下一张牌相同时重复，不满足顺子条件返回false
        } else if (nums[i] === nums[i + 1]) {
            return false
        }
    }
    // 计算最大牌和最小牌的差值看是否满足条件
    return nums[4] - nums[joker] < 5
};

isStraight([0, 0, 1, 5, 2])
```

## 排序（中等）

> 用api解的题，需要自己写排序算法实现

[剑指 Offer 40. 最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

[剑指 Offer 41. 数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

## 搜索与回溯算法（中等）

> 经典题多种解法

[剑指 Offer 55 - I. 二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

[剑指 Offer 55 - II. 平衡二叉树](https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 解题思路：
 * 只计算一次最大深度，计算的过程中在后序遍历位置顺便判断二叉树是否平衡：
 * 对于每个节点，先算出来左右子树的最大高度，然后在后序遍历的位置根据左右子树的最大高度判断平衡性。
 */
var isBalanced = function (root) {
    let res = true

    function dfs(tree) {
        if (!tree) return 0
        const left = dfs(tree.left)
        const right = dfs(tree.right)
        if (Math.abs(left - right) > 1) {
            res = false
        }
        return 1 + Math.max(left, right)
    }

    dfs(root)
    return res
};
```


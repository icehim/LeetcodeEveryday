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
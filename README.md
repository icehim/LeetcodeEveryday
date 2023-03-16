# LeetCode刷题

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


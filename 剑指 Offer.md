# 剑指Offer刷题总结

## 栈与队列（简单）

### [用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

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

### [包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=xxixi0ot)

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
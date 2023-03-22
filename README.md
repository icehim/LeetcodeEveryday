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


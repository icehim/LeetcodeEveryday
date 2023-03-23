class Stack<T> {//<T>泛型 <T>就是<某种类型>的意思，就是定义了一个类型变量，通过extends控制类型
    data: T[];

    constructor() {
        this.data = []
    }

    push(item: T) {
        this.data.push(item)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }

    empty() {
        return this.size() === 0
    }
}

export default Stack

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

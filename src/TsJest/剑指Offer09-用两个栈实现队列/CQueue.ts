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

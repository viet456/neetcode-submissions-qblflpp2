class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let currentSpan = 1;
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            currentSpan += this.stack.pop()[1];
            
        }
        this.stack.push([price, currentSpan]);
        return currentSpan;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

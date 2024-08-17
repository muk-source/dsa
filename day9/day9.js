// code - 1 --> https://leetcode.com/problems/valid-parentheses/description/

function isValid(str) {
    let stack = []
    let matchingBracket = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let char of str) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char)
        }else if(char === ')' || char === '}' || char === ']') {
            if(stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true



// Code -2 --> https://leetcode.com/problems/min-stack/description/


var MinStack = function() {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const removedElement = this.stack.pop()
    if(removedElement === this.getMin()) {
        this.minStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
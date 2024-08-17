// Code -1 --> https://leetcode.com/problems/evaluate-reverse-polish-notation/description/ 
function evalEx(tokens) {
    let stack = [];
    for(let i=0;i<tokens.length;i++) {
        if(tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            let b = stack.pop();
            let a = stack.pop();
            let newNum ;
            if(tokens[i] === '+') {
                newNum = a + b;
            }else if(tokens[i] === '-') {
                newNum = a - b;
            }else if(tokens[i] === '*') {
                newNum = a * b;
            }else if(tokens[i] === '/') {
                newNum = Math.trunc(a/b); // Math.trucn helps in for negative values and differe with Math.floor
            }
            stack.push(newNum)
        }else{
            stack.push(parseInt(tokens[i]))
        }
 }
    
    return stack.pop();
}

console.log(evalEx(["2","1","+","3","*"]));
console.log(evalEx(["4","13","5","/","+"]));
console.log(evalEx(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));


// Code -2 https://leetcode.com/problems/find-the-duplicate-number/description/

function findDuplicate(nums) {
    let numSet = new Set()
    for(let i=0;i<nums.length;i++) {
        if(numSet.has(nums[i])) {
            return nums[i]
        }else{
            numSet.add(nums[i])
        }
    }
}


console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,3,3,3,3]));

function isBalanced(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (top!== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("()()()"));
console.log(isBalanced("()()())"));
console.log(isBalanced("()()(()"));
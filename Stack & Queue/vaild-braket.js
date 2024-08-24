function vaildBraket(brakets) {
    let stack = [];
    let topElement;
    for (let i = 0; i < brakets.length; i++) {
        if (brakets[i] === '(' || brakets[i] === '{' || brakets[i] === '[') {
            stack.push(brakets[i]);
        } else if (brakets[i] === ')' || brakets[i] === '}' || brakets[i] === ']') {
            if (stack.length === 0) {
                return false;
            }
            topElement = stack.pop();
            if ((brakets[i] === ')' && topElement !== '(') || (brakets[i] === '}' && topElement !== '{') || (brakets[i] === ']' && topElement !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
}

let brakets = '({[()]})';
console.log(vaildBraket(brakets));
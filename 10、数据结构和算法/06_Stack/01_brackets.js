


//* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。


const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}",
}

/**
 * 判断字符串是否有效
 * @param {*} s 
 * @returns 
 */
const isValid = function (s) {
    // s不存在 返回true
    if (!s) return true

    const stack = []

    const len = s.length
    for (let i = 0; i < len; i++) {
        // 如果s是  左边的括号部分
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(leftToRight[s[i]])
        } else {
            // 数组长度不存在 或者 比对不正确
            if (!stack.length || stack.pop() !== s[i]) {
                return false
            }
        }
    }
    return true
}


console.log(isValid("()[]{}")); //  true
console.log(isValid("(}")); //  false
console.log(isValid("{()}"));   // true




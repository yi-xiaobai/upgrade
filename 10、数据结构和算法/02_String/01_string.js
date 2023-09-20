


// 判断字符串是否对称


function isPalindrome(str) {
    if (!str) return
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
        // 不相等 证明不是对称的字符串
        if (str[i] !== str[len - i - 1]) {
            return false
        }
        return true
    }
}

console.log(isPalindrome("yyds"));  // false
console.log(isPalindrome("lyyl"));  // true



console.log('========判断是否是回文字符串=============');
const validPalindrome = function (str) {
    const len = str.len

    const left = 0, right = len - 1;
    while (left < right && str[left] === str[right]) {
        left++
        right--
    }

    if (isPalindrome(left + 1, right)) {
        return true
    }


    if (isPalindrome(left, right + 1)) {
        return true
    }


    // 用于判断字符串是否是回文
    function isPalindrome(st, sd) {
        while (st < sd) {
            if (str[st] !== str[sd]) {
                return false
            }
            st++
            sd--
        }

        return true
    }


    // 默认返回false
    return false
}

console.log(validPalindrome('aba'));
console.log(validPalindrome('abca'));
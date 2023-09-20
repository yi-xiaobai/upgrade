

//* 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
//* 给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。


/**
 * 
 * @param {*} T 
 */
const dailyTemperatures = function (T) {
    if (!T || !T.length) return []

    // 获取数组长度
    const len = T.length

    // 定义栈
    const stack = []

    // 定义返回结果
    const res = []

    for (let i = 0; i < len; i++) {
        // 如果栈存在 且 当前温度大于栈的温度
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            // 取出最后一个值
            const top = stack.pop()
            // 计算索引值
            res[top] = i - top
        }
        stack.push(i)
    }
    return res
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures));   // [ 1, 1, 4, 2, 1, 1 ]
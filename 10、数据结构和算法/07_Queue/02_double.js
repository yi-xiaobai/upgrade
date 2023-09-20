//* 双端队列   :维护一个有效的递减队列
const maxSlidingWindow = function (nums, k) {
    // 获取数组的长度
    const len = nums.length

    // 结果数组
    const res = []

    // 双端队列
    const deque = []

    for (let i = 0; i < len; i++) {
        // 判断队列中元素是否大于当前元素 如果不是 则需要移除 直至大于当前元素
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop()
        }

        // 添加索引
        deque.push(i)

        // 当队头元素在滑动窗口之外时
        while (deque.length && deque[0] <= i - k) {
            // 队头元素出队
            deque.shift()
        }

        // 如果滑动元素的个数 大于 k的时候 才更新数组
        if (i >= k - 1) {
            res.push(nums[deque[0]])
        }
    }
    return res
}


const nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums, 3));
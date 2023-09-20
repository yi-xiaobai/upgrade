


function selectSort(nums) {
    // 获取数组长度
    const len = nums.length

    let minIndex

    for (let i = 0; i < len - 1; i++) {
        // 初始化minIndex 为区间第一个元素
        minIndex = i
        for (let j = i; j < len; j++) {
            // 如果 j所在值 比 minIndex 小 将j索引赋值给minIndex
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }

        // 如果最终的minIndex 和 i 不相等 两者进行交换
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums
}
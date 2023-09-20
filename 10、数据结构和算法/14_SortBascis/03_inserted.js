



function insertSort(nums) {
    // 获取数组长度
    const len = nums.length

    // 临时变量
    let temp

    for (let i = 0; i < len - 1; i++) {
        let j = i;

        // 将当前元素保存在临时变量中
        temp = nums[i]

        while (j > 0 && nums[j - 1] > nums[j]) {
            // 将 j - 1数据放置到 j的位置上
            nums[j] = nums[j - 1]
            j--
        }

        // 临时数据放到 即nums[i] 放到正确的 j索引上
        arr[j] = temp
    }
    return arr
}



function betterBubbleSort(nums) {
    const len = nums.length

    // 一共两层  外层控制次数 
    for (let i = 0; i < len - 1; i++) {
        // 内层来进行数值的比较
        for (let j = 0; j < len - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
}


const arr = [2, 3, 1, 4, 5]
betterBubbleSort(arr)
console.log(arr);




/**
 * 改进版本的冒泡排序
 * @param {} nums 
 */
function betterBubbleSortTwo(nums) {
    const len = nums.length

    // 一共两层  外层控制次数 
    for (let i = 0; i < len - 1; i++) {
        // 内层来进行数值的比较   每次循环 相当于确定了一个数字 没必要再进行比较
        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
}



/**
 * 最好情况的改进
 * @param {*} nums 
 */
function betterBubbleSortBest(nums) {
    const len = nums.length

    // 一共两层  外层控制次数 
    for (let i = 0; i < len - 1; i++) {

        let flag = false
        // 内层来进行数值的比较   每次循环 相当于确定了一个数字 没必要再进行比较
        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                flag = true
            }
        }

        // 如果内层循环一次数据都没有交换 证明 数组是有序的  此时直接返回nums  提高效率
        if (flag === false) {
            return nums
        }
    }
}


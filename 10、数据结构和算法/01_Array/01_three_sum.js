

//* 双指针   有序！！！

//* 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。



const threeSum = function (nums) {
    // 存放结果数组
    let res = []

    // 排序
    nums = nums.sort((a, b) => a - b)

    console.log('==>Get nums', nums);

    //* 只访问到  倒数第三个数
    //* 因为还有左指针   右指针
    for (let i = 0; i < nums.length - 2; i++) {

        // 定义左指针
        let left = i + 1

        // 定义右指针
        let right = nums.length - 1

        // 去除重复数据
        if (i > 0 && nums[i] === nums[i - 1]) {
            // 跳出当前循环
            continue
        }


        while (left < right) {

            //* 说明左指针指向的数小了
            if (nums[i] + nums[left] + nums[right] < 0) {
                left++

                // 去重
                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }
            }
            //* 右指针指向的数大了
            else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
                // 去重
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            }

            //* 相同
            else {
                // 结果推入数组
                res.push([nums[i], nums[left], nums[right]])

                // 左右指针一起前进
                left++
                right--

                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            }
        }
    }
    return res
}


const arr = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(arr));
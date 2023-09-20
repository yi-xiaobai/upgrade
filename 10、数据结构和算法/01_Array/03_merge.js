
//* 双指针 合并两个有序数组
//* 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
//* 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。


/**
 * 合并两个有序数组
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
const merge = function (nums1, m, nums2, n) {
    //* i nums1数组有效的最后一个位置
    //* j nums2数组有效的最后一个位置
    //* k 两个数组最终长度
    let i = m - 1,
        j = n - 1,
        k = m + n - 1



    while (i >= 0 && j >= 0) {
        // 如果nums1数组大于nums2数组元素
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }


    // 如果nums1数组遍历完了  nums2数组存在  此时需要将其数据继续遍历放到nums1数组中
    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }
}


const arr1 = [1, 2, 3]
const arr2 = [2, 5, 6]
merge(arr1, 3, arr2, 3)
console.log(arr1);  // [ 1, 2, 2, 3, 5, 6 ]



const arr3 = [2, 5, 6]
const arr4 = [1, 2, 3]
merge(arr3, 2, arr4, 2)
console.log(arr3);  // [ 1, 2, 2, 5 ]


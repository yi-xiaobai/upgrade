

/**
 * 归并排序  分而治之
 * 先分割 再合并
 */


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    // 数组长度
    const len = arr.length

    // 分界线
    const mid = Math.floor(len / 2)

    // 分割左边部分
    const leftLists = mergeSort(arr.slice(0, mid))

    // 分割右边部分
    const rightLists = mergeSort(arr.slice(mid, len))

    // 合并数组并返回
    return mergeArr(leftLists, rightLists)
}


function mergeArr(arr1, arr2) {
    let i = 0, j = 0;
    // 结果数组
    let ans = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j])
            j++
        }
    }

    if (i < arr1.length) {
        ans = ans.concat(arr1.slice(i))
    } else if (j < arr2.length) {
        ans = ans.concat(arr2.slice(j))
    }

    return ans
}


const lists = [8, 1, 2, 10, 9, 5, 7]
console.log(mergeSort(lists));
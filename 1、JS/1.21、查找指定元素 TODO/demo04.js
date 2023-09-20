

// 二分查找法 将obj插入到数组中去
function sortedIndex(arr, obj) {
    var low = 0, high = arr.length;
    while (low < high) {

        // 防止数字相加 超出了界限
        // 顾 采用下面这种方式
        // >> 1相当于 / 2
        var mid = low + ((high - low) >> 1)

        //* 中位数比obj小  
        //* 证明 obj在数组的右边
        if (arr[mid] < obj) {
            low = mid + 1
        } else {
            //* obj在数组的左边
            high = mid
        }
    }

    return high
}

console.log(sortedIndex([1, 15, 30], 8));
console.log(sortedIndex([1, 15, 30], 16));
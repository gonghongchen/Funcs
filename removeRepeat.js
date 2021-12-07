// 一维数组去重

// 使用 Set
const removeRepeat = arr => {
    return [...new Set(arr)]
}

// 自写算法
const removeRepeat = arr => {
    const newArr = []
    arr.forEach(item => {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr
}

// ===========================================================================

// 多维数组去重
const removeMultiRepeat = arr => {
    // 将多维数组转换为一维数组
    const flat = arr => {
        let newArr = []
        arr.forEach(item => {
            if (Array.isArray(item)) {
                newArr = newArr.concat(flat(item))
            } else {
                newArr.push(item)
            }
        })
        return newArr
    }

    return [...new Set(flat(arr))] //  也可以改用上面的 removeRepeat 方法
}

removeMultiRepeat([1, [2, 3], [2, [8, 9, 1], [4, [5, 8]]]]) //  [1, 2, 3, 8, 9, 4, 5]
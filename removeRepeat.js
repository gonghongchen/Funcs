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

const removeRepeat = arr => {
    const deep = 2
    // [1, [2, 3], [2, [4, [5]]]]
    // 获取数组的最大深度
    const getDeep = arr => {
        const totalDeep = 1
        const curDeep = 1
        arr.forEach(item => {
            if (Array.isArray(item)) {
                curDeep++
                totalDeep += getDeep(item)
            }
        })
        return totalDeep
    }
    return [...new Set(arr.flat(deep))] // flat from ES2019
}
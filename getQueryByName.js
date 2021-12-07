// 获取浏览器路径中指定名字的 query 的值
const getQueryByName = name => {
    const queryList = location.href.split('?')[1]?.split('&') || []
    const curQuery = queryList.filter(item => item.includes(name))[0]

    return curQuery?.split('=')[1] || ''
}
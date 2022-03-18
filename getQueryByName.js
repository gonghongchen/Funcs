// 获取浏览器路径中指定名字的 query 的值
const getQueryByName = name => {
    const queryList = location.href.split('?')[1]?.split('&') || []
    const curQuery = queryList.filter(item => item.includes(name))[0]

    // history mode
    // new URL(location.href).searchParams.get(name)
    // 或 new URLSearchParams(location.search).get(name)
    
    // hash mode
    // new URLSearchParams(location.hash.split('?')[1]).get(name)
    
    return curQuery?.split('=')[1] || ''
}

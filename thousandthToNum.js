// 千分位格式的金额转换为没有千分位的数值
export const thousandthToNum = val => {
  if (typeof val === 'number') {
    return val
  }
  if (typeof val !== 'string' || val === '') {
    return 0
  }

  const hasMinus = val.indexOf('-') === 0 // 不使用 val.includes('-') 进行判断是因为只有当 - 在首位才能表明是一个负数
  const newVal = Number(val.split('').filter(item => !isNaN(Number(item)) || item === '.').join(''))
  // const newVal = Number(val.split('').filter(item => !isNaN(Number(item)) || item === '.' || item === '-').join('')) 不这么写是因为 Number 对非首位包含 - 的字符串进行转换的结果是 NaN

  return hasMinus ? -newVal : newVal
}

// 如果输入的是一个数组
const thousandthToNums = (...vals) => {
  return vals.map(val => thousandthToNum(val))
}

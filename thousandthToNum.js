// 千分位格式的金额转换为没有千分位的数值
const thousandthToNum = val => {
  return typeof val === 'number' ? val : (typeof val !== 'string' || val === '') ? 0 : Number(val.split('').filter(item => !isNaN(Number(item)) || item === '.').join(""))
}

// 如果输入的是一个数组
const thousandthToNums = (...vals) => {
  return vals.map(val => thousandthToNum(val))
}
const isEmpty = val => {
  if (val instanceof Object) return Object.values(val).length === 0  // includes Map, Set, Object, Array, arguments
  return !val  // includes String, Number, undefined, null, Boolean
}

// TODO 对于 isEmpty(Object.create(null)) 会返回 false，因为使用 Object.create(null) 创建的对象没有原型对象，所以无法使用 instanceof 进行准确判断

// MDN - instanceof 
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof

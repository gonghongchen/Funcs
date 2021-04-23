const isEmpty = val => {
  if (val instanceof Object) return Object.values(val).length === 0  // includes Map, Set, Object, Array, arguments
  return !val  // includes String, Number, undefined, null, Boolean
}

// MDN - instanceof 
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
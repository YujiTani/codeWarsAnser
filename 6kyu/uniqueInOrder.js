var uniqueInOrder = function(iterable) {
  const newArray = ['']
  for (val of iterable) {
    if (newArray[newArray.length - 1] !== val) {
      newArray.push(val)
    }
  }
  return newArray.slice(1)
}

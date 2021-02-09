// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = array => {
  if(array.length <= 1) return array
  while(array.length > 1) {
      const num = array.pop()
      return num * productOfArray(array)
  }
}

const averagePair = (array, target) => {
  // array is sorted
  let start = 0
  let end = array.length - 1
  while(start < end) {
    let average = (array[start]+array[end]/2)
    if (average === target) return true
    if (average > target) {
      end--
    }
    if (average < target) {
      start++
    }
  }
  return false
}
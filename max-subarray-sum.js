const maxSubarraySum = (array, n) => {
  // add whatever parameters you deem necessary - good luck!
  if(n > array.length) return null
  let max = -Infinity
  for(let i = 0; i <= array.length-n; i++) {
      let j = i
      let currentSum = 0
      while(j < i+n) {
          currentSum += array[j]
          j++
      }
      if (currentSum > max) max = currentSum
  }
  return max
}
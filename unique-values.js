// O(n) time and space
function countUniqueValues(arr){
  const arrObj = {}
  for(let i = 0; i < arr.length; i++) {
      !arrObj[arr[i]] ? arrObj[arr[i]] = 1 : arrObj[arr[i]]++
  }
  let count = 0
  for (let key in arrObj) {
      count++
  }
  return count
}
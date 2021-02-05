const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  } 
  return arr
}



const bubbleSortFreshAndClean = (arr) => {
  let noSwaps
  for(let i = arr.length; i > 0; i--){
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        noSwaps = false
      }
    }
    if(noSwaps) break
  } 
  return arr
}
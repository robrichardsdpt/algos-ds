const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (let j = i - 1; i >= 0 && arr[j] > current; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = current
  }
  return arr
}

insertionSort([9,65,2,4,8,43,1,3,7,205])
function binarySearch(arr, val){
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start+end/2))

  
  while(arr[mid] !== val) {
    if (val < arr[mid]) {
      end = mid - 1 
    } else {
      start = mid + 1
    }
    mid = Math.floor((start+end)/2)
  }
  arr[mid] === val ? mid : -1
}

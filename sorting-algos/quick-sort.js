const quickSort = arr => {
  // 1.  BASE case: if array has <= 1 element it is sorted
  if (arr.length <= 1) {
    return arr
  }
  // 2.  Choose a pivot (can be any element in the array)
  const pivot = arr[0]
  // 3.  Divide the array into 3 arrays
  // Array with elements less than the pivot
  const lessThan = arr.filter(item => item < pivot)
  // Array with elements = to the pivot
  const equalTo = arr.filter(item => item === pivot)
  // Array with elements > the pivot
  const greaterThan = arr.filter(item => item > pivot)

  // 4.  RECURSIVE CASE:  recursively sort elements less than equal and greater than equal to pivot
  const lessThanSorted = quickSort(lessThan)
  const greaterThanSorted = quickSort(greaterThan)

  // 5.  CONQUER:  combine the sorted less than, equal, and sorted greater than array
  return lessThanSorted.concat(equalTo, greaterThanSorted)
}
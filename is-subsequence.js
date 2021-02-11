const isSubsequence = (substring, string) => {
  // order matters!
  let i = 0
  let j = 0
  while(j < string.length) {
      if(substring[i] === string[j]) i++
      if(i === substring.length - 1) return true
      j++
  }
  return false
}
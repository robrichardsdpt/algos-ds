// O(n) time and space
function validAnagram(str1, str2){
  const freqInStr1 = {}
  if(str1.length !== str2.length) {
    return false
  }
  for(let char of str1) {
     if(!freqInStr1[char]) {
         freqInStr1[char] = 1
     } else {
         freqInStr1[char]++
     }
  }
  const freqInStr2 = {}
  for(let char of str2) {
     if(!freqInStr2[char]) {
         freqInStr2[char] = 1
     } else {
         freqInStr2[char]++
     }
  }
  for(let key in freqInStr1) {
      if(freqInStr1[key] !== freqInStr2[key]) {
          return false
      }
      if(!freqInStr2[key]) {
          return false
      }
  }
  return true
}

validAnagram('taco', 'ocat')
validAnagram('', '')
validAnagram('samelength', 'samelengths')
validAnagram('anagram', 'managra')
validAnagram('asdfjkl', 'afsjdlk')
validAnagram('asdfjkl', 'qwertyu')
validAnagram('hello', 'healo')
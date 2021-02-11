const sameFrequency = (num1, num2) => {
  const num1Obj = {}
  const num2Obj = {}
  const num1Str = num1.toString()
  const num2Str = num2.toString()
  for(let i= 0; i < num1Str.length; i++) {
      if(num1Obj[num1Str[i]]) num1Obj[num1Str[i]]++
      else if(!num1Obj[num1Str[i]]) num1Obj[num1Str[i]] = 1
  }
  for(let j= 0; j < num2Str.length; j++) {
      if(num2Obj[num2Str[j]]) num2Obj[num2Str[j]]++
      else if(!num2Obj[num2Str[j]]) num2Obj[num2Str[j]] = 1
  }
  for (let key in num1Obj) {
      if(!num2Obj[key]) return false
      if(num1Obj[key] !== num2Obj[key]) return false
  }
  return true
}

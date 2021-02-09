// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, exp){
  if (exp === 0) return 1
  while(exp >=1){
      return 2 * power(num, exp-1)
  }
}

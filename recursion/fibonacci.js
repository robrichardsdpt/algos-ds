// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

// memoized fibonacci
const fibRevisited = (n, memo=[]) => {
  if(memo[n] !== undefined) return memo[n]
  if (n <=2) return 1
  let result = fibRevisited(n - 1, memo) + fibRevisited(n - 2, memo)
  memo[n] = result
  return result
}

// tabulated fibonacci
const fibTable = (n) => {
  if(n<= 2) return 1
  let fibNums = [0,1,1]
  for(let i = 0; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}
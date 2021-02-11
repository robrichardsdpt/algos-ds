// object approach
const areThereDuplicates = () => {
  const argObj = {}
  for(let i = 0; i < arguments.length; i++) {
    if(argObj[arguments[i]]) return true
    if(!argObj[arguments[i]]) argObj[arguments[i]] = 1
  }
  return false
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
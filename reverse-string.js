function reverseString (str) {
  let strReversed = ''
  for(let i = str.length-1; i >= 0; i-- ) {
    strReversed += str[i]
 }
 return strReversed
}


function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}


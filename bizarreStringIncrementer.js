// Start your implementation here
function extractNumber(bstring){
	var i;
  for(i=bstring.length-1; i>=0; i--)
  {
		if(!checkNumber(bstring[i]))
    	break;
    
  }
  return bstring.substring(i+1, bstring.length);
}

function checkNumber(n){
    return Number(n) == n;
}

function findNextNumber(extractNum){
	return parseInt(extractNum) + 1;
}

function bizarreStringIncrementer(bizString){
var bizareStr, bstring = bizString.toString();
var leadingNumbers = extractNumber(bstring);
if(leadingNumbers == "")
	return bstring+'1';
  
var nextNumber = findNextNumber(leadingNumbers).toString()
var nextNumberLen=nextNumber.length;


if(nextNumberLen >=leadingNumbers.length ){
	bizareStr = bstring.substring(0, bstring.length - leadingNumbers.length)+nextNumber;
}
else{
	bizareStr = bstring.substring(0, bstring.length - nextNumberLen) + nextNumber;
}
return bizareStr;
}

console.log(bizarreStringIncrementer('foo'));
console.log(bizarreStringIncrementer('foo23'));
console.log(bizarreStringIncrementer('foo0041'));
console.log(bizarreStringIncrementer('foo9'));
console.log(bizarreStringIncrementer('foo099'));
console.log(bizarreStringIncrementer('f99oo'));
console.log(bizarreStringIncrementer('f99oo23'));
console.log(bizarreStringIncrementer('f99oo099'));
console.log(bizarreStringIncrementer('f99oo0099'));
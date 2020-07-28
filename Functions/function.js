//isEven

function isEven(num) {
	if(num % 2 === 0){
		return true;
	}
	return false;
}

//factorial

function factorial(x) {
	var result = 1;
	for(var count = 1; count <= x; count++) {
		result = result * count;
	}
	return result;
}

//kebabToSnake

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}


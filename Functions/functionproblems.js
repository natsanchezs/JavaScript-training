
function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var first = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		} else {
			return true;
		}
	} 
}

function sumArray(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		first += arr[i];	

	} return first; 
}


function max(arr){
	var first = arr[0];
	for (var i = 1; i <= arr.length; i++) {
		if (arr[i] > first) {
			return arr[i]
		} else {
			return first;
		}
	}
}

function max(arr){
	var first = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(first < arr[i]){
			first = arr[i];
		} 
	}
	return first;
}


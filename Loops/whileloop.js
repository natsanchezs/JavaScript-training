//Print all numbers between -10 and 19

var count = -10;

while(count <= 19){
	console.log(count);
	count++;
}


//Print all even numbers between 10 and 40

var count = 10;

while(count <= 40){
	console.log(count);
	count+=2;
}

//Print all odd numbers between 300 and 333

var count = 300;

while(count <= 333){
	if(count % 2 !== 0) {
		console.log(count);
	}
	count++;	
}

//Print all numbers divisible by 5 and 3 between 5 and 50

var count = 5

while(count <= 50) {
	if(count % 3 === 0 && count % 5 === 0) {
		console.log(count);
	}
	count++;
}
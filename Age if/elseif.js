var age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("error");
}

if(age === 21) {
	console.log("happy bday");
}
if (age % 2 !== 0) {
	console.log("your age is odd!");
}

if(age % Math.sqrt(age) ===0){
	console.log("your age is a perfect square");
}
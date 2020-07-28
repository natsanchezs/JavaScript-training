
  // put all of your JS code from the lecture here
var todos = ["Buy New Turtle"];

window.setTimeout(function() {

var input = prompt("What would you like to do?");



while(input !== "quit"){
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		newTodo();
}	else if(input ==="delete"){
	deleteTodo();
} 
input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("*********")
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
	console.log("*********")
}

function newTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	 todos.push(newTodo);
	 console.log("Added Todo");	
}

function deleteTodo(){
	var index = prompt("enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted todo");
}

}, 500);


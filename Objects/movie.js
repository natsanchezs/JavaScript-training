var movie = [
{
	title: "In Bruges",
	rating: "5 stars",
	hasWatched: false
},

{
	title: "Frozen",
	rating: "4.5 stars",
	hasWatched: true
},

{
	title: "Mad Max Fury Road",
	rating: "5 stars",
	hasWatched: false
},

{
	title: "Les Miserables",
	rating: "3.5 stars",
	hasWatched: false
}

]

movie.forEach(function(movie){
		if (movie.hasWatched === true){
			console.log("You have watched " + movie.title + " - " + movie.rating);
		} else {
			console.log("You have not seen " + movie.title + " - " + movie.rating);
		}
	})


movie.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched";
	} else {
		result += "not seen ";
	} 
	result += "\"" + movie.title + "\" -";
	result += movie.rating;
		console.log(result)
})
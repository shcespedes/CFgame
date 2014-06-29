var olive, bristlecone, guess;
function Tree(name, species, age, location) {
	this.name = name;
	this.species = species;
	this.age = age;
	this.location= location;
	this.report = (" " + this.name + " is a(n) " +  this.species + " that is about " + this.age + " years old. It is located in " + this.location);
}
olive = new Tree("Olive Tree of Vouves", "Olive tree", 3000, "Crete, Greece");
bristlecone = new Tree("Methuselah", "Bristlecone Pine", 4841, "eastern California, USA");s

function guessWhichTree() {
	guess = prompt("Which ancient tree is older: 'Olive Tree of Vouves' or 'Methuselah'?");
	if (guess == bristlecone.name) {
		alert("You're correct!" + bristlecone.report);
		console.log(bristlecone.report);
	}
	else if (guess == olive.name) {
		alert("Sorry, try again! " + olive.report);
		console.log(olive.report);
	}
	else {
		alert("Hmm...I don't know what you're talking about. Try a different guess.");
	}
}

for(tries = 0; tries < 2; tries ++) {
	if(guess == bristlecone.name) {
		break;
	}	
	guessWhichTree();


$(document).ready(function(){
 $("#button").on("click", function() {
 	guessWhichTree();
 });	


}
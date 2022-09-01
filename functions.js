const animalList = [
	'Hedgehog',
	'Capybara',
	'Rat',
	'Gorilla',
	'Coatimundi',
	'Sarlacc',
	'Cat',
	'Dog',
	'Fossa',
	'Maned wolf',
];

//Randomly generates a positive whole number within a given range
function intRandomBy(range) {
	return parseInt(Math.random() * range);
}

//Randomly picks an animal from const array 'animalList' and returns the animal name
function animalSuggest() {
	return animalList[intRandomBy(animalList.length)];
}

//Called on site boot to run necessary first boot functions and commands
function siteLoad() {
	//Sets any html element with the CSS id 'randomAnimalSuggest' to 'Maybe check out the (insert_animal_name)'s page?'
	document.getElementById(
		'randomAnimalSuggest'
	).innerHTML = `Maybe check out the ${animalSuggest()}'s page?`;
}

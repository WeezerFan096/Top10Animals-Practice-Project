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
	return parseInt(Math.random() * (range + 1) + 0.5);
}

//Randomly picks an animal from const array 'animalList' and returns the animal name
function animalSuggest() {
	return animalList[intRandomBy(animalList.length())];
}

animalSuggest();

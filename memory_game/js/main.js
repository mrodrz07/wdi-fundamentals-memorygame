console.log("Hey Marty :)");
/*
var cardOne = 'queen';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'king';
- these variables are no longer needed */



// alert('You found a match!'); //testing alerts

var cards = ['queen', 'king', 'queen', 'king']; 
// array storing values for each of the 4 cards

var cardsInPlay = [];
// will hold cards that are in play

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
cardsInPlay.push(cardThree);
cardsInPlay.push(cardFour);
//I've pushed the variables into cardsInPlay array

console.log('User flipped' + ' ' + cardOne);
console.log('User flipped' + ' ' + cardTwo);
console.log('User flipped' + ' ' + cardThree);
console.log('User flipped' + ' ' + cardFour);
// this will display a message for all four cards

if(cardsInPlay.length === 2) {
	console.log('yes');
} if(cardsInPlay[0] === cardsInPlay[2]) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
// substitute the index in either cardsInPlay arrays


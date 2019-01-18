var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = []

var checkforMatch = function() {
	//if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!")
	
}	else {
			alert("Sorry, try again.")
}
};

var flipCard = function(cardId) {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkforMatch();
	}
};


console.log(cardsInPlay);

function createBoard() {
	const cardTable = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendChild(cardElement);
	}
};

createBoard();

listCard('Hearts');
listCard('Spades');
listCard('Diamonds');
listCard('Clubs');

function listCard(suit) {
    console.log('Ace of ' + suit);
    for (let i = 2; i <= 10; i++) {
        console.log(i + ' of ' + suit);
    }
    console.log('Jack of ' + suit);
    console.log('Queen of ' + suit);
    console.log('King of ' + suit);
}
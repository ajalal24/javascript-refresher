// const card1 = { rank: 'Ace', suit: 'Hearts' }
// const card2 = { rank: 7, suit: 'Diamonds' }
// const card3 = { rank: 'King', suit: 'Spades' }

// // console.log('You are holding the ' + card1.rank + ' of ' + card1.suit + ' and the ' + card2.rank + ' of ' + card2.suit);

// const cards = [];
// cards.push(card1, card2, card3);

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i].rank + ' of ' + cards[i].suit);
// }

// part 2

let deck = [];

listCard('Hearts');
listCard('Spades');
listCard('Diamonds');
listCard('Clubs');

function listCard(suit) {
    let card1 = { rank: 'Ace', suit: suit }
    deck.push(card1);
    for (let i = 2; i <= 10; i++) {
        let card5 = { rank: i, suit: suit }
        deck.push(card5);
    }
    let card2 = { rank: 'Jack', suit: suit }
    let card3 = { rank: 'Queen', suit: suit }
    let card4 = { rank: 'King', suit: suit }
    deck.push(card2, card3, card4);
}

console.log(deck);

const random = Math.floor(Math.random() * deck.length);
deck.slice[random];
console.log(random, deck[random]);

console.log(deck);

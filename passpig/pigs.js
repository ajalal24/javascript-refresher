let pig = ['Pig', 'Razorback', 'Trotter', 'Snouter', 'Leaning Jowler']

// Starting Player is 0.
let playerNumber = 0;

// Usign handleClick to find the id of the pass or roll button. 
function handleClick(id) {
    if (id.includes('Pass')) {
        pass();
    } else {
        roll();
    }
}

// Change the background of the card by getting the id of the card, (Cycles through each number making sure it never goes past 3)
function changeBackground() {
    let playerId = document.getElementById('player' + playerNumber);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    if (playerNumber == 3) {
        playerNumber = 0;
    } else {
        playerNumber++;
    }

    playerId = document.getElementById('player' + playerNumber);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}

function roll() {
    // Roll for a pig and index number
    const random = Math.floor(Math.random() * pig.length);
    console.log(random, pig[random]);
}

function pass() {
    changeBackground();
}
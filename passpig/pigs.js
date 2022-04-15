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

function roll() {
    let pig1 = rollingPigs();
    let pig2 = rollingPigs();
    let pig1Id = 'player' + playerNumber + 'Pig1';
    document.getElementById(pig1Id).innerHTML = pig1;
    let pig2Id = 'player' + playerNumber + 'Pig2';
    document.getElementById(pig2Id).innerHTML = pig2;
}

function pass() {
    changeBackground();
}

function rollingPigs() {
    // Roll for a pig and index number
    const random = Math.random();
    if (random < 0.007) {
        // console.log('Leaning Jowler');
        return 'Leaning Jowler';
    } else if (random < 0.037) {
        return 'Snouter';
    } else if (random < 0.0125) {
        console.log('Trotter');
        return 'Trotter';
    } else if (random < 0.349) {
        return 'Razorback';
    } else if (random < 0.651) {
        return 'No Dot';
    } else {
        return 'Dot';
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
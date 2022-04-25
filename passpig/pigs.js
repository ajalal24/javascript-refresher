// Starting Player is 0.
let playerNumber = 0;
let playerHandScore = 0;
let player0TotalScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
let player3TotalScore = 0;

// Using handleClick to find the id of the pass or roll button. 
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
    updatePigs(pig1, pig2);

    //Score
    let rollScore = scorePigs(pig1, pig2);
    showPlayerScore(rollScore);
}

function pass() {
    setScoreTotal();
    switchPlayer();
}

// Setting the score to add the new points
function setScoreTotal() {
    let playerIdTotalScore = 'player' + playerNumber + 'TotalScore';
    if (playerIdTotalScore == 'player0TotalScore') {
        document.getElementById('player0TotalScore').innerHTML = 'Total Score: ' + (playerHandScore + player0TotalScore);
        document.getElementById('player0HandScore').innerHTML = 'Score: ' + 0;
    } else if (playerIdTotalScore == 'player1TotalScore') {
        document.getElementById('player1TotalScore').innerHTML = 'Total Score: ' + (playerHandScore + player1TotalScore);
        document.getElementById('player1HandScore').innerHTML = 'Score: ' + 0;
    } else if (playerIdTotalScore == 'player2TotalScore') {
        document.getElementById('player2TotalScore').innerHTML = 'Total Score: ' + (playerHandScore + player2TotalScore);
        document.getElementById('player2HandScore').innerHTML = 'Score: ' + 0;
    } else {
        document.getElementById('player3TotalScore').innerHTML = 'Total Score: ' + (playerHandScore + player3TotalScore);
        document.getElementById('player3HandScore').innerHTML = 'Score: ' + 0;
    }
}

function showPlayerScore(rollScore) {
    if (rollScore == 0) {
        playerHandScore = 0;
        pass();
    } else {
        playerHandScore += rollScore;
        let playerIdHandScore = 'player' + playerNumber + 'HandScore';
        document.getElementById(playerIdHandScore).innerHTML = 'Score: ' + playerHandScore;
    }
}

function updatePigs(pig1, pig2) {
    let pig1Id = 'player' + playerNumber + 'Pig1';
    document.getElementById(pig1Id).innerHTML = pig1;
    let pig2Id = 'player' + playerNumber + 'Pig2';
    document.getElementById(pig2Id).innerHTML = pig2;
}

function rollingPigs() {
    // Roll for a pig and index number
    const random = Math.random();
    if (random < 0.007) {
        return 'Leaning Jowler';
    } else if (random < 0.037) {
        return 'Snouter';
    } else if (random < 0.0125) {
        return 'Trotter';
    } else if (random < 0.349) {
        return 'Razorback';
    } else if (random < 0.651) {
        return 'No Dot';
    } else {
        return 'Dot';
    }
}

// (p) added to statments with & and or to solve order of operations problem
function scorePigs(pig1, pig2) {
    let score;
    if (pig1 == 'Dot' && pig2 == 'Dot') {
        score = 1;
    } else if (pig1 == 'No Dot' && pig2 == 'No Dot') {
        score = 1;
    } else if ((pig1 == 'Dot' && pig2 == 'No Dot') || (pig1 == 'No Dot' && pig2 == 'Dot')) {
        score = 0;
    } else if (pig1 == 'Razorback' || pig2 == 'Razorback') {
        score = 5;
    } else if (pig1 == 'Razorback' && pig2 == 'Razorback') {
        score = 20;
    } else if (pig1 == 'Trotter' || pig2 == 'Trotter') {
        score = 5;
    } else if (pig1 == 'Trotter' && pig2 == 'Trotter') {
        score = 20;
    } else if (pig1 == 'Snouter' || pig2 == 'Snouter') {
        score = 10;
    } else if (pig1 == 'Snouter' && pig2 == 'Snouter') {
        score = 40;
    } else if (pig1 == 'Leanig Jowler' || pig2 == 'Leaning Jowler') {
        score = 15;
    } else if (pig1 == 'Leanig Jowler' && pig2 == 'Leanig Jowler') {
        score = 60;
    }

    return score;
}

// Change the background of the card by getting the id of the card, (Cycles through each number making sure it never goes past 3)
function switchPlayer() {
    let playerId = document.getElementById('player' + playerNumber);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    incrementPlayer()
    playerId = document.getElementById('player' + playerNumber);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}

function incrementPlayer() {
    if (playerNumber == 3) {
        playerNumber = 0;
    } else {
        playerNumber++;
    }
}
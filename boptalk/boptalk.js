let inputMessage = 'Hello';

let vowels = 'aeiouAEIOU';

let bopMessage = '';

for (let i = 0; i <inputMessage.length; i++) {
    letter = inputMessage[i];
    if (vowels.includes(letter)) {
        // console.log('vowel');
        bopMessage += letter + 'op';
    } else {
        // console.log('consonant')
        bopMessage += letter;
    }
}

console.log(bopMessage);
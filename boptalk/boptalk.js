let inputMessage = 'Everything seems good!';

let vowels = 'aeiouAEIOU';

let bopMessage = '';

for (let i = 0; i < inputMessage.length; i++) {
    letter = inputMessage[i];
    if (vowels.includes(letter)) {
        bopMessage += letter + 'op';
    } else {
        bopMessage += letter;
    }
}

console.log(bopMessage);
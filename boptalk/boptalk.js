let inputMessage = 'Everything seems good!';

const vowels = 'aeiouAEIOU';

let bopMessage = '';

for (let i = 0; i < inputMessage.length; i++) {
    let letter = inputMessage[i];
    if (vowels.includes(letter)) {
        bopMessage += letter + 'op';
    } else {
        bopMessage += letter;
    }
}

console.log(bopMessage);
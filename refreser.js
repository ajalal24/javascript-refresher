// console.log('Hello world!');

let message = 'How are you today?';
// console.log(message);

let greeting = 'Hello';
let name = 'Sue';
// console.log(greeting + ' ' + name + '!');

let age = 13;
// console.log('You are ' + age);

// console.log('In ten years you will be ' + (age + 10));

// Part 2

if ( name === 'Bob') {
    console.log('I knew it was you, ' + name +'!')
} else {
    console.log('Hey ' + name + ', you\'re not Bob!')
}

let iAmWearingABelt = true;
let iAmWearingGlasses = false;

if (iAmWearingABelt && iAmWearingGlasses) {
    console.log('Probably not Mr. Gorton.')
} else if (iAmWearingABelt && !iAmWearingGlasses) {
    console.log('Probably is Mr. Gorton.')
} else {
    console.log('Just some dude.')
}
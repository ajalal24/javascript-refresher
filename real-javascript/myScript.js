console.log('Hello there');
window.alert('Hello there user');

let pElement = document.getElementById('pTag');
console.log(pElement);

function change() {
    let firstName = document.getElementById('nameInput').value;
    pElement.innerHTML = 'Hello ' + firstName;
}
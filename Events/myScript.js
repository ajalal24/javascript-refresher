function change() {
    let firstName = document.getElementById('name').value;
    let animalName = document.getElementById('animal').value;
    message.innerHTML = "Hello " + firstName + ". Don't you wish you were a " + animalName + "?";
}

function changeColor() {
    document.getElementById('submit').style.backgroundColor = "red";
}
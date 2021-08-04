function getRandomNumber () {
    return Math.round(Math.random() * (1000 - 1) + 1);
}

function listen() {
    return parseInt(document.getElementById('input').value, 10);
}

function definition (input, randomNumber) {
    document.getElementById('res').innerHTML = randomNumber;
    if (input === randomNumber) {
        document.getElementById('result').innerHTML = "You win";
    } else if (input < randomNumber) {
        document.getElementById('result').innerHTML = "more";
        definition(listen(), randomNumber);
    } else {
        document.getElementById('result').innerHTML = "less";
        definition(listen(), randomNumber);
    }
}

document.getElementById('check').addEventListener('click', check);
const randomNumber = getRandomNumber();
function check() {
    definition(listen(), randomNumber);
}
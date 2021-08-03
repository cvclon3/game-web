document.getElementById('check').addEventListener('click', main);

function getRandomNumber () {
    return Math.random() * (1000 - 1) + 1;
}

function listen() {
    let input = document.getElementById('input').value;
    return input;
}

function definition (input, randomNumber) {
    if (input == randomNumber) {
        let result = "You win";
        document.getElementById('result').innerHTML = result;
    } else if (input < randomNumber) {
        document.getElementById('result').innerHTML = "more";
        definition(listen(), randomNumber);
    } else {
        document.getElementById('result').innerHTML = "less";
        definition(listen(), randomNumber);
    }
}

function main() {
    definition(listen(), getRandomNumber());
}
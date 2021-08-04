function getRandomNumber () {
    let randomNumber = Math.round(Math.random() * (1000 - 1) + 1);
    return randomNumber;
}

function listen() {
    let input = document.getElementById('input').value;
    return input;
}

function definition (input, randomNumber) {
    document.getElementById('res').innerHTML = randomNumber;
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
    document.getElementById('check').addEventListener('click', main);
    /*const randomNumber = getRandomNumber();*/
    definition(listen(), getRandomNumber());
}

main()
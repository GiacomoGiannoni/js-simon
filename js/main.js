let container = document.getElementById('container');
let time = document.getElementById('timer');
let result = document.getElementById('result');
let randomArray = [];
let targetArray = [];

randomArrayGenerator(container, randomArray);
console.log(randomArray);

let counter = 0;
let timer = setInterval(
    function() {
        time.innerHTML = counter;
        counter++;
        if (counter === 31) {
            container.classList.add('hidden');
        } else if (counter === 32) {
            counter = 0;
            clearInterval(timer);
            timer.innerHTML = '';
            numberRequest();
            const comparisonArray = randomArray.filter(number => {
                if (targetArray.includes(number)) {
                    return true;
                }
                return false;
            });

            if (comparisonArray.lenght == 0) {
                result.innerHTML = "Non sei riuscito a ricordarti nessun numero. Prova ancora!";  
            } else {
                result.innerHTML = `I numeri che sei riuscito a ricordarti sono: <br>${comparisonArray}`;
            }
        }
    }, 1000);

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArrayGenerator (container, randomArray) {
    while (randomArray.length < 5) {
        randomArray.push(randomNumber(1, 100));
    }
    return container.innerHTML = `I numeri generati sono: ${randomArray}`;
}

function numberRequest () {
    while (targetArray.length < 5) {
        let selection = parseInt(prompt("Inserisci un numero"));
        targetArray.push(selection);
    }
    console.log(targetArray);
}
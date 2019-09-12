const arithmeticDisplay = document.getElementById('arithmetics');
const questionCountDisplay = document.getElementById('questionCounter');
const mathGame = document.getElementById('math-game')
const result = document.getElementById('results')
const resultTexts = document.getElementById('resultTexts')
const playAgain = document.getElementById('playAgain')
const questionDisplay = document.getElementById('question')
const statusIndicator = document.getElementById('statusIndicator')
let rightCounter = 0;
let wrongCounter = 0;
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);

function addition(number1, number2) {
    return number1 + number2
}

let answer = addition(number1, number2);

console.log(answer);

let questionCounter = 1;
const numberOfQuestions = 10;

questionDisplay.innerHTML = number1 + ' + ' + number2

let answers = []

let min = answer - 10;
let max = answer + 10;

while (answers.length < 4) {
    const r = Math.floor(Math.random() * (max - min) + min);
    if (answers.indexOf(r) === -1 && r != answer) answers.push(r);
}

let answers1 = document.getElementById('answer1')
let answers2 = document.getElementById('answer2')
let answers3 = document.getElementById('answer3')
let answers4 = document.getElementById('answer4')

answers[Math.floor(Math.random() * answers.length)] = answer

answers1.innerHTML = answers[0]
answers2.innerHTML = answers[1]
answers3.innerHTML = answers[2]
answers4.innerHTML = answers[3]
questionCountDisplay.innerHTML = questionCounter + ' / ' + numberOfQuestions



answer1.addEventListener('click', guessFunction);
answer2.addEventListener('click', guessFunction);
answer3.addEventListener('click', guessFunction);
answer4.addEventListener('click', guessFunction);

//Reset Function
function resetNumbers() {
    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);

    answer = addition(number1, number2);

    min = answer - 10;
    max = answer + 10;

    answers = []

    while (answers.length < 4) {
        const r = Math.floor(Math.random() * (max - min) + min);
        if (answers.indexOf(r) === -1 && r != answer) answers.push(r);
    }

    answers[Math.floor(Math.random() * answers.length)] = answer

    answers1.innerHTML = answers[0]
    answers2.innerHTML = answers[1]
    answers3.innerHTML = answers[2]
    answers4.innerHTML = answers[3]

    questionDisplay.innerHTML = number1 + ' + ' + number2

    questionCountDisplay.innerHTML = questionCounter + ' / ' + numberOfQuestions
}

function guessFunction() {
    if (parseInt(this.innerHTML) === answer) {
        rightCounter += 1
        statusIndicator.className = 'rigthAnswer';
        console.log('Right: ' + rightCounter)
        questionCounter += 1;
        resetNumbers();
        console.log(answer);
    } else {
        wrongCounter += 1
        console.log('Wrong: ' + wrongCounter)
        questionCounter += 1;
        resetNumbers();
        console.log(answer);
    }
    if (questionCounter > numberOfQuestions) {
        questionCountDisplay.innerHTML = numberOfQuestions + ' / ' + numberOfQuestions;
        mathGame.style.display = 'none';
        resultTexts.className = 'row';
        playAgain.className = 'row playAgain';
        result.innerText = `You got ${rightCounter} out of ${numberOfQuestions}!`
    }
}



playAgain.addEventListener('click', playAgainFunction)

function playAgainFunction() {
    resultTexts.className = 'hidden';
    playAgain.className = 'hidden';
    mathGame.style.display = 'block';
    rightCounter = 0;
    wrongCounter = 0;
    questionCounter = 1;
    resetNumbers();
}

//Pie chart
// var ctx = document.getElementById('pieChart').getContext('2d');
// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Wrong', 'Right'],
//         datasets: [{
//             backgroundColor: ['#ff0000', '#00ff00'],
//             data: [wrongCounter, rightCounter]
//         }]
//     }
// });
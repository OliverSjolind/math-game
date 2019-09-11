const arithmeticDisplay = document.getElementById('arithmetics');
const questionCountDisplay = document.getElementById('questionCounter');
const mathGame = document.getElementById('math-game')
const result = document.getElementById('results')
const resultTexts = document.getElementById('resultTexts')
const playAgain = document.getElementById('playAgain')
const questionDisplay = document.getElementById('question')
let answer1 = document.getElementById('answer1')
let answer2 = document.getElementById('answer2')
let answer3 = document.getElementById('answer3')
let answer4 = document.getElementById('answer4')
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
let questionCounter = 1;
const numberOfQuestions = 10;
let rightCounter = 0;
let wrongCounter = 0;
questionDisplay.innerHTML = number1 + ' + ' + number2

let answers = [
    answer1,
    answer2,
    answer3,
    answer4
]

questionCountDisplay.innerHTML = questionCounter + ' / ' + numberOfQuestions

function addition(number1, number2) {
    return number1 + number2
}



let answer = addition(number1, number2);
console.log(answer);

answer1.innerHTML = Math.floor(Math.random() * 100);
answer2.innerHTML = Math.floor(Math.random() * 100);
answer3.innerHTML = Math.floor(Math.random() * 100);
answer4.innerHTML = Math.floor(Math.random() * 100);

answers[Math.floor(Math.random() * 4)].innerHTML = answer

answer1.addEventListener('click', guessFunction);
answer2.addEventListener('click', guessFunction);
answer3.addEventListener('click', guessFunction);
answer4.addEventListener('click', guessFunction);

function resetNumbers() {
    answer1.innerHTML = Math.floor(Math.random() * 100);
    answer2.innerHTML = Math.floor(Math.random() * 100);
    answer3.innerHTML = Math.floor(Math.random() * 100);
    answer4.innerHTML = Math.floor(Math.random() * 100);

    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);

    answer = addition(number1, number2);

    answers[Math.floor(Math.random() * 4)].innerHTML = answer

    questionDisplay.innerHTML = number1 + ' + ' + number2

    questionCountDisplay.innerHTML = questionCounter + ' / ' + numberOfQuestions
}

function guessFunction() {
    if (parseInt(this.innerHTML) === answer) {
        rightCounter += 1
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
    questionCounter = 1;
    resetNumbers();
}
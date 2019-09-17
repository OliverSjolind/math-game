const arithmeticDisplay = document.getElementById('arithmetics');
const questionCountDisplay = document.getElementById('questionCounter');
const mathGame = document.getElementById('math-game')
const result = document.getElementById('results')
const resultTexts = document.getElementById('resultTexts')
const customResultText = document.getElementById('customResultText')
const playAgain = document.getElementById('playAgain')
const questionDisplay = document.getElementById('question')
const statusIndicator = document.getElementById('statusIndicator')
let pieChart = document.getElementById('pieChart')
const answersHTML = document.getElementById('answersHTML')
let rightCounter = 0;
let wrongCounter = 0;
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);

//Result-text arrays
const under25result = ['You got under 25%']
const under50result = ['You got under 50%']
const over50result = ['You got over 50%']
const over75result = ['You got over 75%']

//
function addition(number1, number2) {
    return number1 + number2
}

let answer = addition(number1, number2);

console.log(answer);

let questionCounter = 1;
//Number of questions
const numberOfQuestions = 10;

let percentRight;

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
        // statusIndicator.className = 'rigthAnswer';
        console.log('Right: ' + rightCounter)
        questionCounter += 1;
        resetNumbers();
        statusIndicator.classList.add('rigthAnswer');

        setTimeout(function () {
            statusIndicator.classList.remove('rigthAnswer')
        }, 500);


        console.log(answer);
    } else {
        wrongCounter += 1
        console.log('Wrong: ' + wrongCounter)
        questionCounter += 1;
        resetNumbers();
        console.log(answer);
        statusIndicator.classList.add('wrongAnswer');

        setTimeout(function () {
            statusIndicator.classList.remove('wrongAnswer')
        }, 500);
    }
    if (questionCounter > numberOfQuestions) {
        questionCountDisplay.innerHTML = numberOfQuestions + ' / ' + numberOfQuestions;
        answersHTML.style.display = 'none';
        statusIndicator.style.display = 'none';
        questionDisplay.style.display = 'none';
        result.innerText = `You got ${rightCounter} out of ${numberOfQuestions}!`
        resultTexts.style.display = 'block';
        playAgain.style.display = 'block';
        pieChart.style.display = 'block';
        percentRight = rightCounter / numberOfQuestions;
        if (percentRight < 0.25) {
            customResultText.innerHTML = under25result[0];
        } else if (percentRight < 0.50) {
            customResultText.innerHTML = under50result[0];
        } else if (percentRight < 0.75) {
            customResultText.innerHTML = over50result[0];
        } else {
            customResultText.innerHTML = over75result[0];
        }


        console.log(percentRight);


        //Pie chart
        var ctx = document.getElementById('pieChart').getContext('2d');
        myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Wrong', 'Right'],
                datasets: [{
                    backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(0, 255, 0, 0.4)'],
                    borderColor: ['#ff0000', '#00ff00'],
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    borderAlign: 'inner',
                    data: [wrongCounter, rightCounter]
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: true,
            }
        });
        playAgain.addEventListener('click', destroyChart)

        function destroyChart() {
            myPieChart.destroy();
            pieChart.style.display = 'none';
        }
    }
}

playAgain.addEventListener('click', playAgainFunction)

function playAgainFunction() {
    resultTexts.style.display = 'none';
    playAgain.style.display = 'none';
    answersHTML.style.display = 'flex';
    statusIndicator.style.display = 'block';
    questionDisplay.style.display = 'flex';
    rightCounter = 0;
    wrongCounter = 0;
    questionCounter = 1;
    resetNumbers();
}
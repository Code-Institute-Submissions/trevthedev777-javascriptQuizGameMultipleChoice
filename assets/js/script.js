// global variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// game play variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions for the game
let questions = [
    {
        question: 'What year did South Africa host its first democratic elections?',
        choice1: '1994',
        choice2: '1989',
        choice3: '1999',
        choice4: '2003',
        answer: 1,
    },
    {
        question: 'Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?',
        choice1: 'Bill Hicks',
        choice2: 'Sam Kinison',
        choice3: 'Simon Amstell',
        choice4: 'Robin Williams',
        answer: 3,
    },
    {
        question: 'What is the currency of Denmark?',
        choice1: 'Euro',
        choice2: 'Krone',
        choice3: 'Pound',
        choice4: 'Dollar',
        answer: 2,
    },
    {
        question: 'Which football club plays its home games at Loftus Road?',
        choice1: 'Leeds United',
        choice2: 'Crystal Palace',
        choice3: 'Burnley',
        choice4: 'Queens Park Rangers',
        answer: 1,
    },
    {
        question: 'From what grain is the Japanese spirit Sake made?',
        choice1: 'Rice',
        choice2: 'Wheat',
        choice3: 'Oats',
        choice4: 'Barley',
        answer: 1,
    },
    {
        question: 'How many permanent teeth does a dog have?',
        choice1: '40',
        choice2: '41',
        choice3: '42',
        choice4: '43',
        answer: 3,
    },
    {
        question: 'Saying the name of what dried fruit used to be used to encourage people to smile before a photo in the 1800s, before the phrase “cheese?”?',
        choice1: 'Apples',
        choice2: 'Bananas',
        choice3: 'Grapefruit',
        choice4: 'Prunes',
        answer: 4,
    },
    {
        question: 'Which German city hosted the 1936 Summer Olympics?',
        choice1: 'Munich',
        choice2: 'Berlin',
        choice3: 'Dresden',
        choice4: 'Frankfurt',
        answer: 2,
    },
    {
        question: 'What score did cricketing legend Don Bradman average as a batsman across his career?',
        choice1: '99.99',
        choice2: '99.90',
        choice3: '99.97',
        choice4: '99.94',
        answer: 4,
    },
    {
        question: 'How many different teams have won the Premier League since the start of the inaugural season in 1992/93?',
        choice1: 'Six',
        choice2: 'Seven',
        choice3: 'Eight',
        choice4: 'Five',
        answer: 2,
    }
];

// capitilazed variables means the variable will be fixed and unchanged throughout the game
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

function startGame() {

    // starting variables
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // Spread Operator accesses all questions in the array
    getNewQuestion();

}

function getNewQuestion() {
    
    // keeps track of the current score
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        
        // loads into end.html
        return window.location.assign('./end.html');
    }

    // increase question
    questionCounter++;

    // this will count the questions like 1 of 10 etc...
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    // this will increase per question the user is asked until the quiz is complete
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length); // Calculate the value of the question index
    currentQuestion = availableQuestions[questionsIndex]; // keeps track of the current question being asked
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    // removes question from the array and inserts next question 
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}


// Iteration for selecting the answers and values for them
choices.forEach(choice => {

    // selecting an answer
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        // save final score on end game screen
        sessionStorage.setItem('score', score);
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // increments score by 100 points
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        // adds the correct class whenever the corrrect question is selected
        selectedChoice.parentElement.classList.add(classToApply);

        // sets time to automaically go to the next question after submitting an answer, does not show the right answer so user plays again
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// Increment score 
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame();


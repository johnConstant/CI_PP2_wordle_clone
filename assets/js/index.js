let state = {
    wordLength: 6,
    currentRd: 0,
    noOfRounds: 5,
    currentGuess: 0,
    noOfGuesses: 5,
    words: [],
    correctAnswer: '', 
    score: 0,   
};


const guesses = document.querySelector('#guesses');
const guessBtn = document.getElementById('guess-btn');
const nextBtn = document.getElementById('next-btn');
const formInputs = document.getElementById('guess-inputs');
let roundNumberField = document.querySelector('#rounds');
let guessNumberField = document.querySelector('#guess-counter');
let scoreField = document.querySelector('#score');

/**
 * 
 * @returns inputs based on the number of letters in the answer word
 */
const createInputs = () => {
    for (i = 0; i < state.wordLength; i++) {
        let inputHTML = `
        <input
            type="text"
            id="input-${i + 1}"
            class="letter-input"
            name="input-${i + 1}"
            maxlength="1"
            required
        /> `;
        document.getElementById('guess-inputs').innerHTML += inputHTML;
    }
    return;
};

/**
 * Search Random Word API and save results to array
 * @returns array of words
 */
 const getWords = async () => {
    let url = `https://random-word-api.herokuapp.com/word?length=${state.wordLength}&number=${state.noOfRounds}&lang=en`;
    let { words } = state;
    words = await fetch(url)
    .then(response => response.json())
    .then(data => data);
    return words;
};

/**
 * Start game function runs upon DOMContentLoaded event
 * create the inputs on the page
 * fetch the words array from random word API and save to state.words
 * set correct answer for 1st round from words array
 */
const startGame = async () => {
    let { words, correctAnswer } = state;
    createInputs();
    state.words = await getWords();
    state.correctAnswer = state.words[0]
}

/**
 * Gets values from text inputs and returns array with users guess
 * @returns array with answer separated by letter
 */
 const getAnswer = () => {
    let answer = [];
    for (let i = 0; i < state.wordLength; i++) {
        let letter = document
            .getElementById(`input-${i + 1}`)
            .value.toLowerCase();
        answer.push(letter);
    }
    return answer;
};

/**
 * Prints each letter from guess in individual span.
 * Individual spans allow for individual classes :- correct, almost
 * @param {array} of letters from user's answer
 */
 const printAnswer = (answer, currentGuess) => {
    let html = `<div id = 'guesss-${currentGuess}' class="guess-text">`;
    answer.forEach((letter, i) => {
        html += `<div class='box' id="letter-${
            i + 1
        }-${currentGuess}">${letter}</div>`;
    });
    html += `</div`;
    guesses.innerHTML += html;
};

const addClass = (element, className) => {
    document.getElementById(element).classList.add(className);
};

const checkAnswer = (answer, correctAnswer) => {
    let { score, currentRd, currentGuess } = state;
    let correctAnswerArray = Array.from(correctAnswer);

    for (let i = 0; i < state.wordLength; i++) {
        if (answer[i] === correctAnswerArray[i]) {
            addClass(`letter-${i + 1}-${currentGuess}`, 'correct');
        } else if (correctAnswerArray.includes(answer[i])) {
            document;
            addClass(`letter-${i + 1}-${currentGuess}`, 'almost');
        } else {
            addClass(`letter-${i + 1}-${currentGuess}`, 'wrong');
        }
    }

    if (answer.join('') === correctAnswer) {
        alert('you win!');
        state.currentRd++;
        state.score += 20;
        document.getElementsByClassName('correct-answer')[0].textContent = "Well Done!!!";
        nextBtn.classList.remove('display-none'); 
        guessBtn.classList.add('display-none');
        formInputs.classList.add('display-none');    }
};


const updateCounters = () => {
    let { currentRd, noOfRounds, currentGuess, noOfGuesses, score } = state;
    roundNumberField.textContent = `Round: ${currentRd + 1} / ${noOfRounds}`;
    guessNumberField.textContent = `Guess: ${currentGuess} / ${noOfGuesses}`;
    scoreField.textContent = score;
};

/**
 * 
 */
const makeGuess = () => {
    let {currentGuess, noOfGuesses, correctAnswer} = state;
    let answer = getAnswer();

    state.currentGuess++;

    const inputs = [...document.getElementsByClassName('letter-input')];
    inputs.forEach((input) => (input.value = ''));

    printAnswer(answer, state.currentGuess);
    checkAnswer(answer, state.correctAnswer);

    updateCounters();

    if(currentGuess >= noOfGuesses - 1){        
        nextBtn.classList.remove('display-none'); 
        guessBtn.classList.add('display-none');
        formInputs.classList.add('display-none');
        state.correctAnswer = state.words[state.currentRd]
    }
}

// Event Handlers

document.addEventListener('DOMContentLoaded', startGame);
guessBtn.addEventListener('click', makeGuess);
nextBtn.addEventListener('click', function(){
    alert('next round')
});

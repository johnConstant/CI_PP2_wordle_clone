let state = {
    wordLength: 6,
    currentRd: 1,
    noOfRounds: 5,
    currentGuess: 0,
    noOfGuesses: 5,
    words: [],
    correctAnswer: '', 
    score: 0,   
};

const guessBtn = document.getElementById('guess-btn');
const nextBtn = document.getElementById('next-btn');
const inputs = document.getElementById('guess-inputs');
let guesses = document.querySelector('#guesses');

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
        .then((res) => res.json())
        .then((res) => res);
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
    words = await getWords();
    correctAnswer = words[0]
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

/**
 * 
 */

const makeGuess = () => {
    let {currentGuess, noOfGuesses, correctAnswer} = state;
    let answer = getAnswer();

    state.currentGuess++;
    printAnswer(answer, currentGuess);

    if(currentGuess >= noOfGuesses){
        nextBtn.classList.remove('display-none'); 
        guessBtn.classList.add('display-none');
        inputs.classList.add('display-none');
    }
}

// Event Handlers

document.addEventListener('DOMContentLoaded', startGame);
guessBtn.addEventListener('click', makeGuess);
nextBtn.addEventListener('click', function(){
    alert('next round')
});

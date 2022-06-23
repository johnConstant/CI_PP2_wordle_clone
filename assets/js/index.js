let state = {
    wordLength: 5,
    currentRd: 0,
    noOfRounds: 2,
    currentGuess: 0,
    noOfGuesses: 3,
    words: [],
    correctAnswer: '', 
    score: 0,   
};


const guesses = document.querySelector('#guesses');
const guessBtn = document.getElementById('guess-btn');
const nextBtn = document.getElementById('next-btn');
const newGameBtn = document.getElementById('new-game-btn');
const formInputs = document.getElementById('guess-inputs');
const textInputs = document.getElementById('guess-inputs')
const roundNumberField = document.querySelector('#rounds');
const guessNumberField = document.querySelector('#guess-counter');
const scoreField = document.querySelector('#score');
const result = document.querySelector('#result'); 

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
        textInputs.innerHTML += inputHTML;
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
    alert('startingGame')
 
    state.score = 0;
    state.currentRd = 0;
    state.currentGuess = 0;

    state.words = await getWords();
    state.correctAnswer = state.words[0];

    createInputs();
    updateCounters();
    formInputs.classList.remove('display-none')
    newGameBtn.classList.add('display-none');
    guessBtn.classList.remove('display-none');
    result.innerHTML = '';
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

/**
 * check user answer array against correct answer array
 * apply appropriate class on result
 * @param {array} answer 
 * @param {string} correctAnswer 
 */
const checkAnswer = async (answer, correctAnswer) => {
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
        state.score += 20;
        // Display/Hide btns
        nextBtn.classList.remove('display-none'); 
        guessBtn.classList.add('display-none');
        formInputs.classList.add('display-none');   
        // Get definition and print value
        let definition = await getDefinition(correctAnswer);
        result.innerHTML = `<p class="result-text">Well Done!!!</p>
            <p class="definition">${definition}</p>`

     }
};

const updateCounters = () => {
    let { currentRd, noOfRounds, currentGuess, noOfGuesses, score } = state;
    roundNumberField.textContent = `Round: ${currentRd + 1} / ${noOfRounds}`;
    guessNumberField.textContent = `Guess: ${currentGuess} / ${noOfGuesses}`;
    scoreField.textContent = score;
};

/**
 * Get definition of parameter from dictionaryapi.dev and return first definition or error message 
 * @param {string} word - search term for API query
 */
const getDefinition = async (word) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let definition = await fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.title === 'No Definitions Found') {
                return res.message;
            } else {
                return res[0].meanings[0].definitions[0].definition;
            }
        }).catch(err => {
            console.log(err)});
        return definition
    }

/**
 * 
 */
const makeGuess = async () => {
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

        let definition = await getDefinition(correctAnswer);
        result.innerHTML = `<p class="result-text">Hard Luck!!!</p>
            <p>The answer was ${correctAnswer}</p>
            <p class="definition">${definition}</p>`
    }
}

const nextRound = () => {
    if(state.currentRd === state.noOfRounds - 1){
        result.innerHTML = `<p>Well done! Your score is</p><p class='score'>${state.score}</p>`
        nextBtn.classList.add('display-none');
        formInputs.classList.add('display-none');
        newGameBtn.classList.remove('display-none');
        let inputs = [...document.getElementsByClassName('letter-input')];
        inputs.forEach((input) => input.remove());
        guesses.innerHTML = '';
        return;
    }
    // Update state values
    state.currentRd++;
    state.correctAnswer = state.words[state.currentRd];
    state.currentGuess = 0;
    // Update UI
    updateCounters();
    nextBtn.classList.add('display-none'); 
    guessBtn.classList.remove('display-none');
    formInputs.classList.remove('display-none');
    guesses.innerHTML = '';
    result.innerHTML = '';
}

// Event Handlers

// https://stackoverflow.com/questions/15595652/focus-next-input-once-reaching-maxlength-value
document.getElementById('guess-inputs').onkeyup = function (e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes['maxlength'].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while ((next = next.nextElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == 'input') {
                next.focus();
                break;
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', startGame);
guessBtn.addEventListener('click', makeGuess);
nextBtn.addEventListener('click', nextRound);
newGameBtn.addEventListener('click', startGame)

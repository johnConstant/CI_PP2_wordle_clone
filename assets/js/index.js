/*jshint esversion: 8 */

let data = localStorage.getItem('state');
let state = {
    wordLength: 5,
    currentRd: 0,
    noOfRounds: 2,
    currentGuess: 0,
    noOfGuesses: 6,
    words: [],
    correctAnswer: '', 
    score: 0,   
};
const guesses = document.querySelector('#guesses');
const guessBtn = document.getElementById('guess-btn');
const nextBtn = document.getElementById('next-btn');
const newGameBtn = document.getElementById('new-game-btn');
const formInputs = document.getElementById('guess-inputs');
const textInputs = document.getElementById('guess-inputs');
const roundNumberField = document.querySelector('#rounds');
const guessNumberField = document.querySelector('#guess-counter');
const scoreField = document.querySelector('#score');
const progressBar = document.querySelector('#progress-full');
const gameInfo = document.getElementById('game-info');
const result = document.querySelector('#result'); 
/**
 * @returns inputs based on the number of letters in the answer word
 */
const createInputs = () => {
    for (let i = 0; i < state.wordLength; i++) {
        let inputHTML = `
        <label for="input-${i + 1}" class="hidden-label">Input ${i + 1}</label>
        <input
            type="text"
            id="input-${i + 1}"
            class="letter-input"
            name="input-${i + 1}"
            maxlength="1"
            ${i === 0 && 'autofocus'}
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
        let url = `https://random-words5.p.rapidapi.com/getMultipleRandom?count=${state.noOfRounds}&wordLength=${state.wordLength}`;
        let { words } = state;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    'f714f0513dmsh1b6426f5d574cbep1b183djsn4f4341b7f111',
                'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            },
        };
        words = await fetch(url, options)
            .then((response) => response.json())
            .then((response) => response)
            .catch((err) => console.error(err));
        // remove spinner when words have been fetched
        document.getElementsByClassName('loader')[0].classList.add('display-none');
        document.getElementById('game-container').classList.remove('display-none');
    
        return words;
    };


/**
 * Start game function runs upon DOMContentLoaded event
 * create the inputs on the page
 * fetch the words array from random word API and save to state.words
 * set correct answer for 1st round from words array
 */
const startGame = async () => {
    if(data){
        state = JSON.parse(data);
    }
    state.words = await getWords();
    state.correctAnswer = state.words[0];
    // Update UI
    progressBar.style.width = `0%`;
    createInputs();
    updateCounters();
    formInputs.classList.remove('display-none');
    newGameBtn.classList.add('display-none');
    guessBtn.classList.remove('display-none');
    gameInfo.classList.remove('display-none');
    result.innerHTML = '';
};
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
 * Add CSS class to HTML element
 * @param {HTML element} element 
 * @param {class name} className 
 */
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
    let { currentGuess } = state;
    let correctAnswerArray = Array.from(correctAnswer);
    for (let i = 0; i < state.wordLength; i++) {
        if (answer[i] === correctAnswerArray[i]) {
            addClass(`letter-${i + 1}-${currentGuess}`, 'correct');
        } else if (correctAnswerArray.includes(answer[i])) {
            addClass(`letter-${i + 1}-${currentGuess}`, 'almost');
        } else {
            addClass(`letter-${i + 1}-${currentGuess}`, 'wrong');
        }
    }
    if (answer.join('') === correctAnswer) {
        // Calculate and update score
        let roundScore = ((state.noOfGuesses + 1) - state.currentGuess) * 20;
        state.score += roundScore;
        // Play winning sound effect
        document.getElementById("myAudio").play(); 
        // Display/Hide btns
        nextBtn.classList.remove('display-none'); 
        guessBtn.classList.add('display-none');
        formInputs.classList.add('display-none');   
        // Get definition and print value
        let definition = await getDefinition(correctAnswer);
        result.innerHTML = `<p class="result-text">Well Done!!!</p>
            <p class="definition">${definition}</p>`;
     }
};
/**
 * Update guess, score and round no counters in UI
 */
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
    // Definition API Call
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let definition = await fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.title === 'No Definitions Found') {
                // Return message if no definition is found
                return res.message;
            } else {
                // Returns answer definition
                return res[0].meanings[0].definitions[0].definition;
            }
        }).catch(err => {
            throw err;
        });
        return definition;
    };
/**
 * This function runs every time a player makes a guess
 */
const makeGuess = async () => {
    const inputs = [...document.getElementsByClassName('letter-input')];
    if(inputs.every(input => input.value !== '')){
        let {currentGuess, noOfGuesses, correctAnswer} = state;
        let answer = getAnswer();
        // Increment guess
        state.currentGuess++;
        // Update progress bar when guess number has been incremented
        progressBar.style.width = `${((currentGuess + 1) / noOfGuesses) * 100}%`;
        // Clear inputs
        inputs.forEach((input) => (input.value = ''));
        document.getElementById('errors').innerHTML = '';
        // Run Print and Check answer functions
        printAnswer(answer, state.currentGuess);
        checkAnswer(answer, state.correctAnswer);
        // Update UI
        updateCounters();
        // Check if any guesses remain
        if(currentGuess >= noOfGuesses - 1){      
            // Update UI  
            nextBtn.classList.remove('display-none'); 
            guessBtn.classList.add('display-none');
            formInputs.classList.add('display-none');
            state.correctAnswer = state.words[state.currentRd];
            // Get and display definition of answer
            let definition = await getDefinition(correctAnswer);
            result.innerHTML = `<p class="result-text">Hard Luck!!!</p>
                <p>The answer was ${correctAnswer}</p>
                <p class="definition">${definition}</p>`;
        }
    }else {
        document.getElementById('errors').innerHTML = `<p>You're missing something!</p>`
    }
};
/**
 * checks if you have remaining rounds and displays game over screen if not
 * If rounds remain, reset UI and update correct answer
 * @returns 
 */
const nextRound = () => {
    // Check if it is the last round
    if(state.currentRd === state.noOfRounds - 1){
        // Update UI
        result.innerHTML = `<p class="game-over">Game Over!</p>
                            <p>${state.score < 100 ? 'Keep practising. ' : state.score < 200 ? 'Well done. ' : 'Excellent! '}Your score is</p>
                            <p class='score'>${state.score}</p>`;
        nextBtn.classList.add('display-none');
        formInputs.classList.add('display-none');
        newGameBtn.classList.remove('display-none');
        gameInfo.classList.add('display-none');
        guesses.innerHTML = '';
        progressBar.style.width = "0%";
        // Remove input elements from the DOM
        let inputs = [...document.getElementsByClassName('letter-input')];
        inputs.forEach((input) => input.remove());
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
};
// Event Handlers
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guess-inputs').onkeyup = function (e) {
        var target = e.srcElement;
        var maxLength = parseInt(target.attributes.maxlength.value, 10);
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
    // Enter key submit function
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && (state.currentGuess < state.noOfGuesses)) {
          makeGuess();
        }
    });
    startGame();
    guessBtn.addEventListener('click', makeGuess);
    nextBtn.addEventListener('click', nextRound);
    newGameBtn.addEventListener('click', startGame);
});

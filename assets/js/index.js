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

const makeGuess = () => {
    let {currentGuess, noOfGuesses} = state;
    state.currentGuess++
    // getAnswer();
    // checkAnswer()
    // printAnswer();
    console.log(currentGuess);

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

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

const startBtn = document.getElementById('#start-btn');
console.log(startBtn)

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
 * Search Random Word API and save answers to array
 * @returns array of answers
 */
 const getWords = async () => {
    let url = `https://random-word-api.herokuapp.com/word?length=${state.wordLength}&number=${state.noOfRounds}&lang=en`;
    let { words, correctAnswer } = state;
    console.log(words);

    words = await fetch(url)
        .then((res) => res.json())
        .then((res) => res);
        console.log(words);
    return words;
};

document.addEventListener('DOMContentLoaded', getWords);

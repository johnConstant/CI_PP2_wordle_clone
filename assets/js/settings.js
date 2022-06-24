let state = {
        wordLength: 5,
        currentRd: 0,
        noOfRounds: 2,
        currentGuess: 0,
        noOfGuesses: 5,
        words: [],
        correctAnswer: '', 
        score: 0,   
    };

const updateSettings = () => {
    let length = parseInt(document.getElementById('no-of-letters').value);
    let rounds = parseInt(document.getElementById('no-of-rounds').value);
    let guesses = parseInt(document.getElementById('difficulty').value);
    console.log(length, rounds);
    let newState = {...state, wordLength: length, noOfRounds: rounds, noOfGuesses: guesses}
    localStorage.setItem('state', JSON.stringify(newState));
}

document.getElementById('start-btn').addEventListener('click', updateSettings)
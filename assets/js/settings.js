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

/**
 * Get values from settings.html form page
 * Update state object and save to local storage
 */
const updateSettings = () => {
    // Get form values
    let length = parseInt(document.getElementById('no-of-letters').value);
    let rounds = parseInt(document.getElementById('no-of-rounds').value);
    let guesses = parseInt(document.getElementById('difficulty').value);
    // spread state object into new object and update with settings values
    let newState = {...state, wordLength: length, noOfRounds: rounds, noOfGuesses: guesses}
    // save new state object to local storage
    localStorage.setItem('state', JSON.stringify(newState));
}

document.getElementById('start-btn').addEventListener('click', updateSettings)
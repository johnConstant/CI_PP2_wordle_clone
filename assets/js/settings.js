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

const updateSettings = (e) => {
    e.preventDefault();
    let length = document.getElementById('no-of-letters').value;
    let rounds = document.getElementById('no-of-rounds').value;
    console.log(length, rounds);
    let newState = {...state, wordLength: length, noOfRounds: rounds}
    localStorage.setItem('state', JSON.stringify(newState));
}

document.getElementById('start-btn').addEventListener('click', updateSettings)
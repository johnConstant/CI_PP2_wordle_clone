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

const updateSettings = () => {
    let length = document.getElementById('no-of-letters').value;
    let rounds = document.getElementById('no-of-rounds').value;
    console.log(length, rounds);

    return {...state, wordLength: length, noOfRounds: rounds}
}

let numberInputs = [...document.getElementsByTagName('input')];
console.log(numberInputs);
numberInputs.forEach(input => input.addEventListener('onchange', updateSettings));
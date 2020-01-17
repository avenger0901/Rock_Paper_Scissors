import { getRandomThrow, checkResult } from './get-random-throw.js';
const enemyChoice = document.getElementById('enemy-choice');
//const userChoice USe quaryselector here and then add another variable to declare the selected input by using userChoice.value
const playButton = document.getElementById('play-game');

let trials = 0;
let winTrials = 0;

playButton.addEventListener('click', () => {
    trials++;
    const gameResult = document.getElementById('Result');
    const totalTrials = document.getElementById('total-trials');
    const numberOfWins = document.getElementById('number-of-wins');
    const userSelect = document.querySelector('input:checked');
    const userChoice = userSelect.value;
    
    
    console.log(userChoice);
    const computerRandom = getRandomThrow();
    console.log(computerRandom);
    console.log('==============');
    if (checkResult(userChoice, computerRandom) === 'Draw'){
        gameResult.textContent = `Draw, try again!`;
    } else if (checkResult(userChoice, computerRandom) === 'Win'){
        winTrials++;
        gameResult.textContent = `You are a winner`;
    } else if (checkResult(userChoice, computerRandom) === 'Loose'){
        gameResult.textContent = `You Lost`;
    }
    enemyChoice.textContent = computerRandom;
    totalTrials.textContent = trials;
    numberOfWins.textContent = winTrials;
    
});





import { getRandomThrow, checkResult } from './get-random-throw.js';
let trials = 0;
let winTrials = 0;
const enemyChoice = document.getElementById('enemy-choice');
const playButton = document.getElementById('play-game');

playButton.addEventListener('click', () => {
    trials++;
    const gameResult = document.getElementById('Result');
    const totalTrials = document.getElementById('total-trials');
    const numberOfWins = document.getElementById('number-of-wins');
    const userSelect = document.querySelector('input:checked');
    const userChoice = userSelect.value;
    const computerRandom = getRandomThrow();
    const compareResults = checkResult(userChoice, computerRandom);
    
    if (compareResults === 'Draw'){
        gameResult.textContent = `Draw, try again!`;
    } else if (compareResults === 'Win'){
        winTrials++;
        gameResult.textContent = `You are a winner`;
    } else if (compareResults === 'Loose'){
        gameResult.textContent = `You Lost`;
    }
    enemyChoice.textContent = computerRandom;
    totalTrials.textContent = trials;
    numberOfWins.textContent = winTrials;
    
});





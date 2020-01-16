import getRandomThrow from './get-random-throw.js';
import checkResult from './get-random-throw.js';
const enermyChoice = document.getElementById('enermy-choice');
//const userChoice USe quaryselector here and then add another variable to declare the selected input by using userChoice.value
const playButton = document.getElementById('play-game');
playButton.addEventListener('click', () => {
    const gameResult = document.getElementById('Result');
    const userSelect = document.querySelector('input:checked');
    const userChoice = userSelect.value;

    console.log(userChoice);
    const computerRandom = getRandomThrow();
   
    if (checkResult(userChoice, computerRandom) === 'Draw'){
        gameResult.textContent = `Draw, try again!`;
    } else if (checkResult(userChoice, computerRandom) === 'Win'){
        gameResult.textContent = `You are a winnter`;
    } else if (checkResult(userChoice, computerRandom) === 'Loose'){
        gameResult.textContent = `You Lost`;
    }

        
});





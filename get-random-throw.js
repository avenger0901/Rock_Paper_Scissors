export function getRandomThrow(){
    const computerRandom = Math.floor(Math.random() * 3);
   
    return getNumber(computerRandom);
    //console.log(computerRandom);
}

export function getNumber(number){
    
    if (number === 0){
        return 'Rock';
    } else if (number === 1){
        return 'Paper';
    } else return 'Scissors';
}

export function checkResult(player, computer){
    if (computer === player)
        return 'Draw';
    if (computer === 'Scissors' && player === 'Rock')
        return 'Win';
    if (computer === 'Scissors' && player === 'Paper')
        return 'Loose';
    if (computer === 'Rock' && player === 'Paper')
        return 'Win';
    if (computer === 'Rock' && player === 'Scissors')
        return 'Loose';
    if (computer === 'Paper' && player === 'Scissors')
        return 'Win';
    if (computer === 'Paper' && player === 'Rock')
        return 'Loose';


}
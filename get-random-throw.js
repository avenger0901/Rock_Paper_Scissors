export default function getRandomThrow(){
    const computerRandom = Math.floor(Math.random() * 3);
   
    return getNumber(computerRandom);
    //console.log(computerRandom);
}
function getNumber(number){
    
    if (number === 0){
        return 'Rock';
    } else if (number === 1){
        return 'Paper';
    } else return 'Scissors';
}

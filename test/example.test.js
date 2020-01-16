import { getNumber } from '../get-random-throw.js';
import {checkResult} from '../get-random-throw.js';
// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('Test the randomThrow function', function(assert) {
    const input = 0;
    const expected = 'Rock';
    const result = getNumber(input);
    assert.equal(expected, result);
});

test('Is draw?', function(assert){
    // const user = 'Scissors';
    // const computer = 'Scissors';
    // const expected = 'Draw';
    // const result = checkResult(user, computer);
    // assert.equal(result, expected);

    const optionDraw = checkResult('Scissors', 'Scissors');
    assert.equal(optionDraw, 'Draw');
});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Scissors', 'Paper');
    assert.equal(optionWin, 'Win');

});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Scissors', 'Rock');
    assert.equal(optionWin, 'Loose');

});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Rock', 'Paper');
    assert.equal(optionWin, 'Loose');

});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Rock', 'Scissors');
    assert.equal(optionWin, 'Win');

});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Paper', 'Rock');
    assert.equal(optionWin, 'Win');

});
test('The result win or loose?', function(assert){
    const optionWin = checkResult('Paper', 'Scissors');
    assert.equal(optionWin, 'Loose');

});


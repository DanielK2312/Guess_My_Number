'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0

// function displays message 
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
}

// add function to check for a click on the check button
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	// when there is no input
	if (!guess) {
		displayMessage('No Number Entered!');

		// when guess equals secret number
	} else if (guess === secretNum) {
		displayMessage('Correct Number Entered!');

		// correct answer only displayed if the correct answer is guessed
		document.querySelector('.number').textContent = secretNum;

		// change bg color to green when guess is correct
		document.querySelector('body').style.backgroundColor = '#60b347';

		// increase width of box displaying guessed number
		document.querySelector('.number').style.width = '30rem';

		// update high score only if the current score is greater than previous
		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore;
		}

		// when guess is wrong
	} else if (guess !== secretNum) {

		// while the score is not 0
		if (score > 1) {
			displayMessage(guess > secretNum ? 'Number too High!' : 'Number too Low!');

			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('you lost the game');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	// change score back to default of 20
	score = 20
	document.querySelector('.score').textContent = 20;

	// generate a new random number to guess
	secretNum = Math.trunc(Math.random() * 20) + 1;

	// reset text
	displayMessage('Start guessing...');

	document.querySelector('.number').textContent = '?';

	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';

	document.querySelector('.number').style.width = '15rem';
});

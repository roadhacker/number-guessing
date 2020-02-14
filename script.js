let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (humanGuess,computerGuess,targetGuess) => {

	const myAlert = () => window.alert('your number is out of range');
	const humanTarget = Math.abs(targetGuess - humanGuess);
	const computerTarget = Math.abs(targetGuess - computerGuess);
	if (humanGuess>10) {
		return myAlert();
	} else {
		return humanTarget <= computerTarget;		
	}
};
const updateScore = winner => {
	if (winner === 'human') {
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
};
const advanceRound = () => currentRoundNumber++;



// Target Guess
// console.log('Target Guess: ');
// console.log(generateTarget());



// // Compare Guess
// console.log('Compare Guesses: ');
// console.log(compareGuesses(3,5,7));

// // Update Score
// console.log(updateScore('human'))




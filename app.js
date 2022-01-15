const scoreKeeper_div = document.getElementById('score-keeper');
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');
const result = document.querySelector('.result > p');
const r_div = document.getElementById('r');
const p_div = document.getElementById('p');
const s_div = document.getElementById('s');

function timeout() {
	r_div.classList.remove('');
}

function userWin(userSelection, computerSelection) {
	const userChoice_div = document.getElementById(userSelection);
	userScore++;
	userScore_span.innerText = userScore;
	result.innerHTML = `${userSelection} <sub>(user)</sub> beats ${computerSelection}<sub>(comp)</sub>. You Win! 😊`;
	userChoice_div.classList.add('green-glow');
	setTimeout(function () {
		userChoice_div.classList.remove('green-glow');
	}, 300);
}

function userLose(userSelection, computerSelection) {
	const userChoice_div = document.getElementById(userSelection);
	computerScore++;
	computerScore_span.innerText = computerScore;
	result.innerHTML = `${computerSelection}<sub>(comp)</sub> beats ${userSelection}<sub>(user)</sub>. You Lose! 😞`;
	userChoice_div.classList.add('red-glow');
	setTimeout(function () {
		userChoice_div.classList.remove('red-glow');
	}, 300);
}

function draw(userSelection, computerSelection) {
	const userChoice_div = document.getElementById(userSelection);
	result.innerHTML = `${userSelection}<sub>(user)</sub> equals ${computerSelection}<sub>(comp)</sub>. Draw!`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(function () {
		userChoice_div.classList.remove('grey-glow');
	}, 300);
}

function computerChoice() {
	computerOptions = ['Rock', 'Paper', 'Scissors'];
	compRandom = Math.floor(Math.random() * computerOptions.length);
	return computerOptions[compRandom];
}

function game(userSelection) {
	const computerSelection = computerChoice();
	switch (userSelection + computerSelection) {
		case 'RockScissors':
		case 'PaperRock':
		case 'ScissorsPaper':
			userWin(userSelection, computerSelection);
			break;
		case 'RockPaper':
		case 'PaperScissors':
		case 'ScissorsRock':
			userLose(userSelection, computerSelection);
			break;
		case 'RockRock':
		case 'PaperPaper':
		case 'ScissorsScissors':
			draw(userSelection, computerSelection);
			break;
	}
}

function mainGame() {
	rock_button.addEventListener('click', (e) => {
		game('Rock');
	});

	paper_button.addEventListener('click', (e) => {
		game('Paper');
	});

	scissors_button.addEventListener('click', (e) => {
		game('Scissors');
	});
}

mainGame();

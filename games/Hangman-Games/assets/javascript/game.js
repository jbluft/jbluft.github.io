var computerChoices = ["beagle", "corgi", "poodle", "shitzu", "pug", "husky"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	// console.log(computerGuess);


var wins = 0;
var guesses = 15;
var guessesSoFar = [];
var underscores = [];
for (i = 0; i < computerGuess.length; i++) {
    underscores.push("_");
}


function initGame() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	for (i = 0; i < computerGuess.length; i++) {
        underscores[i] = "_";
        }

    document.getElementById("answer").innerHTML = underscores.join(" ");
}

function clear() {
	guessesSoFar = [ ];
	underscores = [ ];
	guesses = 16;
	document.getElementById('lettersused').innerHTML = "";
	document.getElementById('birds').innerHTML = "Guess Left: 15";
	document.getElementById('answer').innerHTML = underscores;
}


document.onkeyup = function(event) {

	var userGuess = event.key;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessesSoFar.push(userGuess);
/*	console.log(guessesSoFar);
	console.log(userGuess);
	console.log(computerGuess.indexOf(userGuess) > -1);
	console.log(letters.indexOf(userGuess) > -1); */

	if (computerGuess.indexOf(userGuess) > -1) {
		for (var i = 0; i < computerGuess.length; i++) {
			if (computerGuess[i] == userGuess) {
				underscores[i] = userGuess;

					if ((underscores.join("") === computerGuess)) {
					wins++;
					clear();
					initGame()
					document.getElementById('wins').innerHTML = wins;
					}

			var wordUnderscores = document.getElementById('answer');
			wordUnderscores.textContent = underscores;

			var wordUserGuesses = document.getElementById('lettersused');
			wordUserGuesses.textContent = guessesSoFar;
			}

		}


	}

		 {
			if (computerGuess[i] != userGuess) {
				guesses--;
				console.log(guesses);
			var wrongUserGuesses = document.getElementById('lettersused');
			wrongUserGuesses.textContent = guessesSoFar;

			if (guesses === 0) {
					clear();
					initGame()
			}

			}


		}


	var html = 
		"<p><h3>Guesses Left: " + guesses + "</h3></p>"
	document.querySelector("#birds").innerHTML = html;

	}


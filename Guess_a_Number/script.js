var number;
var res;
var guess;
var buttonNumber = document.getElementById("buttonNumber");
var buttonGuess = document.getElementById("buttonGuess");
var buttonPlay = document.getElementById("start");
var buttonAgain = document.getElementById("again");
var clickCount = 0;
var min = 0;
var max = 50;

document.querySelector('p').innerHTML = min + " < ----- ? ----- > " + max;

buttonPlay.addEventListener("click", function() {
    startPage.style.display = "none";
	winMsg.style.display = "none";
    player1.style.display = "block";
})

buttonNumber.addEventListener("click", function() {
	claimNumber();
	console.log(number);
    if (Number.isInteger(number) && (number > 0 && number < 50)) {
        player1.style.display = "none";
        player2.style.display = "block";
		document.getElementById("number").value = ""
    } else {
		document.getElementById("number").value = ""
        alert("Please put an integer in the given range.");
    }
})

function claimNumber() {
	number = parseFloat(document.getElementById("number").value);
}

buttonGuess.addEventListener("click", function() {
	claimGuess();
	if (Number.isInteger(guess) && (guess > min && guess < max)) {
		clickCount += 1;
		gamePlay();
		buttonGuess.textContent = "Attempts: " + clickCount;
	} else {
		alert("Please guess an integer in the given range.");
	}
    document.getElementById("guess").value = "";
})

function claimGuess() {
	guess = parseFloat(document.getElementById("guess").value);
	console.log("Guess number --> " + guess);
}

function gamePlay () {
	if (didIWin(number, guess) == true) {
		player2Win();
	} else {
		if (guess < number) {
			min = guess
			res = "Higher !";
		} else {
			max = guess;
			res = "Lower !";
		}
		document.querySelector('p').innerHTML = min + " -- < --- ? --- > -- " + max;
		alert(res);
	}
}

function didIWin(number, guess) {
	return number === guess;
}

function player2Win() {
	player2.style.display = "none";
	winMsg.style.display = "block";
}


buttonAgain.addEventListener("click", function() {
	clickCount = 0;
	min = 0;
	max = 50;
	document.querySelector('p').innerHTML = min + " -- < --- ? --- > -- " + max;
	buttonGuess.textContent = "Push it.";
	winMsg.style.display = "none";
	startPage.style.display = "block";
})
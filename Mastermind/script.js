const colors = ["blue", "red", "yellow", "green", "pink", "purple", "orange", "brown"];
const prompt = require('prompt');


class Color { 
	constructor(color) {
        this.color = color;
    }

	checkColor() {
		return colors.includes(this.color);
	}
}

class Combinations {
	constructor() {
		this.comb = [];
		this.createComb();
    }

	createComb() {
		for (let i = 0; i < 4; i++) {
			let randomIndex = Math.floor(Math.random() * colors.length);
			let randomColor = colors[randomIndex];

			this.comb.push(randomColor);
		}
	}

	isValidComb() { 
		for (let i = 0; i < this.comb.length; i++) {
			let colorComb = new Color(this.comb[i]);
			if (colorComb.checkColor() === false) {
				return false;
			}
		}
		if ((this.comb.length !== 4)) {
			return false;
		} else {
			return true;
		}
	}

	isGuessComb(guess) {
		if (guess.length !== this.comb.length) {
			return false;
		}

		for (let i = 0; i < guess.length; i++) {
			if (guess[i] !== this.comb[i]) {
				return false;
			}
		}
		return true;
	}
}



let trueComb = new Combinations();

function game() {
	console.log(trueComb.comb);
	let guess = [];
	prompt.start();
	prompt.get(["color1", "color2"], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			guess.push(result.color1);
			guess.push(result.color2);

			if (trueComb.isGuessComb(guess) === false) {
				console.log("Not a good guess");
				game();
			} else {
				console.log("Good guess");
			}
		}
	});
}


game();


module.exports = { Combinations, Color };
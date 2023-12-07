const { Combinations, Color } = require("./script.js");

describe("script.js", () => {
	it("should return true for a valid color", () => {
		let blue = new Color("blue");
		expect(blue.checkColor()).toBe(true)
	})
	it("should return false for an invalid color", () => {
		let prout = new Color("prout");
		expect(prout.checkColor()).toBe(false)
	})
	it("should return true if combinations of 4 colors are valid", () => {
		let comb1 = new Combinations();
		expect(comb1.isValidComb()).toBe(true)
	})
	it ("should return true if combinations is guess", () => {
		let comb2 = new Combinations();
		let guess = comb2.comb;
        expect(comb2.isGuessComb(guess)).toBe(true)
	})
	it("should return false if combinations is not a good guess", () => {
		let comb3 = new Combinations();
		let response = comb3.comb;
		console.log(response);
		let guess = ["pink", "red"];
		expect(comb3.isGuessComb(guess)).toBe(false)
	})
})
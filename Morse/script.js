const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	'0': '-----',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.'
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
  }

var buttonMorse = document.getElementById("buttonMorse");
var buttonText = document.getElementById("buttonText");
var text;
var translatedText;
var morse;
var translatedMorse;


//Encode une chaîne de caractère en morse
function getLatinCharList(s1) {
	return s1.toUpperCase().split("");
}

function getLatinWordList(s2) {
	return s2.split(' ');
}

function translateLatinChar(char) {
	return latinToMorse[char];
}

function encode(string) {
	let wordLatinString = getLatinWordList(string);
	let res = "";
	for(var j = 0; j < wordLatinString.length; j++) {
		let splitWordLatin = getLatinCharList(wordLatinString[j]);
		for(var i = 0; i < splitWordLatin.length; i++) {
			res += translateLatinChar(splitWordLatin[i]);
			if(splitWordLatin[i+1] != null) {
				res += " "
			}
		}
		if(wordLatinString[j+1] != null) {
			res += "/";
		}
	}
	return res
}



//Decode une chaîne de caractère écrite en morse
function getMorseCharList(s1) {
	return s1.split(' ');
}

function getMorseStringList(s2) {
	return s2.split('/');
}

function translateMorseChar(char) {
	return morseToLatin[char];
}

function decode(string) {
	let wordMorseString = getMorseStringList(string);
	let res = "";
	for(var j = 0; j < wordMorseString.length; j++) {
		let splitedMorseString = getMorseCharList(wordMorseString[j]);
		for(var i = 0; i < splitedMorseString.length; i++) {
			res += translateMorseChar(splitedMorseString[i]);
		}
		res += " ";
	}
	return res
}


//Script js pour translate depuis la page html

function claimText() {
	text = document.getElementById("textToTranslate").value;
}

buttonText.addEventListener("click", function() {
	claimText();
	translatedText = encode(text);
	document.getElementById("textToTranslate").value = "";
	alert(translatedText);
})


function claimMorse() {
	morse = document.getElementById("morseToTranslate").value;
}

buttonMorse.addEventListener("click", function() {
	claimMorse();
	translatedMorse = decode(morse);
	document.getElementById("morseToTranslate").value = "";
	alert(translatedMorse);
})
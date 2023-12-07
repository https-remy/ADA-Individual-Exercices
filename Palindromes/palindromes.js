function isValidDate(dateString) {
	let regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

	if (!regex.test(dateString)) {
		return false;
	}

	let dateParse = dateString.split('/');
	let day = parseInt(dateParse[0]);
	let month = parseInt(dateParse[1]);
	let year = parseInt(dateParse[2]);

	if (month > 12) {
		return false;
	} else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
		return false;
	} else if (month === 2 && day > 28) {
		return false;
	} else if (day > 31) {
		return false;
	} else {
		return true;
	}
}

function isPalindrome(str) {
	let len = str.length;

	for (let i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false;
		}
	}
	return true;
}



function isDatePalindrome(dateString) {
	if (isValidDate(dateString)) {
		let parsedDate = dateString.split('/');
		let str = parsedDate[0] + parsedDate[1] + parsedDate[2];

		if (isPalindrome(str)) {
			return true;
		}
	}
	return false;
}

function getNextPalindromes(x) {
	let currentDate = new Date();
	let palindromes = [];
	let count = 0;

	while (count < x) {
		currentDate.setDate(currentDate.getDate() + 1);
		let day = currentDate.getDate();
		let month = currentDate.getMonth() + 1;
		let year = currentDate.getFullYear();

		let dateString = `${day}/${month < 10 ? '0' + month : month}/${year}`;

		if (isDatePalindrome(dateString)) {
			palindromes.push(dateString);
			count++;
		}
	}

	return palindromes;
}

console.log(getNextPalindromes(8));




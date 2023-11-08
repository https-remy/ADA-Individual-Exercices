function sum1(tabInt) {
	let sum = 0;
	for (let i = 0; i < tabInt.length; i++) {
		sum += parseInt(tabInt[i]);
	}
	return sum;
}


function sum2(tabInt) {
	if (tabInt.length === 0)
		return 0;
	else
		return parseInt(tabInt[0] + sum2(tabInt.slice(1)));
}


function recursive_factorial(nb) {
	if (nb < 0)
		return (0);
	if (nb <= 1)
		return (1);
	return (nb * recursive_factorial(nb - 1));
}

console.log(recursive_factorial(0));

function fibonacci(index) {
	if (index < 0)
		return (-1);
	if (index == 0)
		return (0);
	if (index == 1)
		return (1);
	return ((fibonacci(index - 1) + fibonacci(index - 2)));
}

console.log(fibonacci(45))


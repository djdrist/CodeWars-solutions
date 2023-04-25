/*
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

function reverse(n) {
	let result = 0;
	while (n > 0) {
		result = result * 10 + (n % 10);
		n = Math.floor(n / 10);
	}
	return result;
}

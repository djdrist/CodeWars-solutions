/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

function multiply(a, b) {
	let result = [];
	let carry = 0;
	a = a.split('').reverse();
	b = b.split('').reverse();

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			let product = a[i] * b[j] + carry;
			if (result[i + j]) {
				result[i + j] += product;
			} else {
				result[i + j] = product;
			}
			carry = Math.floor(result[i + j] / 10);
			result[i + j] = result[i + j] % 10;
		}
		if (carry) {
			result[i + b.length] = carry;
			carry = 0;
		}
	}
	return result.reverse().join('').replace(/^0+/, '');
}

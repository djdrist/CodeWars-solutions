/*
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:

"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
*/

function makePassword(phrase) {
	const password = [];
	phrase.split(' ').forEach((e) => {
		const letter = e.split('')[0];
		if (letter.match(/[i]/i)) return password.push('1');
		if (letter.match(/[o]/i)) return password.push('0');
		if (letter.match(/[s]/i)) return password.push('5');
		password.push(e[0]);
	});
	return password.join('');
}

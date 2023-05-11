/*
100th Kata

You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/

function mirror(text) {
	let words = text.split(' ');
	let max = Math.max(...words.map((word) => word.length));
	let result = [];
	result.push('*'.repeat(max + 4));
	for (let word of words) {
		result.push('* ' + word.split('').reverse().join('') + ' '.repeat(max - word.length) + ' *');
	}
	result.push('*'.repeat(max + 4));
	return result.join('\n');
}

/*
Description:

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(string) {
	return string
		.split(' ')
		.filter((word) => word.indexOf('!') !== word.lastIndexOf('!') || word.indexOf('!') === -1)
		.join(' ');
}

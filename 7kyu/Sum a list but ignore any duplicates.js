/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(arr) {
	return arr.reduce((a, c, i) => (arr.indexOf(c) === i && arr.lastIndexOf(c) === i ? a + c : a), 0);
}

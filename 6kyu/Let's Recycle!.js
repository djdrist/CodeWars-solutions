/*
Task

You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes

The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example

input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

function recycle(array) {
	let paper = [];
	let glass = [];
	let organic = [];
	let plastic = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].material === 'paper') {
			paper.push(array[i].type);
		} else if (array[i].material === 'glass') {
			glass.push(array[i].type);
		} else if (array[i].material === 'organic') {
			organic.push(array[i].type);
		} else if (array[i].material === 'plastic') {
			plastic.push(array[i].type);
		}
		if (array[i].secondMaterial === 'paper') {
			paper.push(array[i].type);
		} else if (array[i].secondMaterial === 'glass') {
			glass.push(array[i].type);
		} else if (array[i].secondMaterial === 'organic') {
			organic.push(array[i].type);
		} else if (array[i].secondMaterial === 'plastic') {
			plastic.push(array[i].type);
		}
	}
	return [paper, glass, organic, plastic];
}

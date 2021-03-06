function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number) {
	console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

// function type declaration
let combineValues: (x: number, y: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

//console.log(printResult(add(5, 12)));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
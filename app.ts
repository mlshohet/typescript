function longest<Type extends { length: number }>(a: Type, b: Type) {
	if (a.length >= b.length) {
		return a;
	} else {
		return b;
	}
}

const longerArray = longest("surpise", "gorilla");
console.log(longerArray);

function firstElement1<Type>(arr: Type[]): Type {
	return arr[0];
}

const fEl = firstElement1([1,2,3,4,5]);
console.log(fEl);
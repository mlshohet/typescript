function firstElement<Type>(arr: Type[]): Type {
	return arr[0];
}

const s = firstElement(["a", "b", "c"]);
console.log(s);

function longest<Type extends { length: number }>(a: Type, b: Type) {
	if (a.length >=b.length) {
		return a;
	} else {
		return b;
	}
}

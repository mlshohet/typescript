const sum = (a: number, b: number) => {
	return a + b;
}

const x = sum(4, 5);
console.log(x);

const y = sum(9, 8);

//Tuple syntax

let basket: [string, number];
basket = ['basketball', 5];

let basket2: [string, number, boolean];
basket2 = ['flowers', 4, true];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2];

// Interface
interface RobotArmy {
	count: number,
	type: string,
	weapons: string
}

let fightRobotArmy = (robots: RobotArmy) : void => {
	console.log(robots.count, robots.type, "using", robots.weapons);
	console.log("FIGHT");
}

let robots: RobotArmy;

robots = { count: 12, type: "Guerrilas", weapons: "guns"};

fightRobotArmy(robots);


// union
let confused: string | number = 'hello';
//or
let confused2: string | number = 7;


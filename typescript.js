var sum = function (a, b) {
    return a + b;
};
var x = sum(4, 5);
console.log(x);
var y = sum(9, 8);
//Tuple syntax
var basket;
basket = ['basketball', 5];
var basket2;
basket2 = ['flowers', 4, true];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var fightRobotArmy = function (robots) {
    console.log(robots.count, robots.type, "using", robots.weapons);
    console.log("FIGHT");
};
var robots1;
robots1 = { count: 12, type: "Guerrilas", weapons: "guns" };
var robots2;
robots2 = { count: 7, type: "Pilots", weapons: "jets" };
var robots3;
robots3 = { count: 9, type: "Grenadiers", weapons: "grenades" };
fightRobotArmy(robots1);
fightRobotArmy(robots2);
fightRobotArmy(robots3);
// union
var confused = 'hello';
//or
var confused2 = 7;

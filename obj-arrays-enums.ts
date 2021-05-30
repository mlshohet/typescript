



//start enums with uppercase char
//enums are types
enum Role { ADMIN, READ_ONLY, AUTHOR };

//specialized notation for structure of object
const person = {
	name: 'Mike',
	age: 43,
	hobbies: ['sports', 'cooking'],
	role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities= ["sports"];

console.log(person.name);


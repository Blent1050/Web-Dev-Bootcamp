// var person = {
//     name: "Brandon",
//     age: 23,
//     city: "Tampa"
// };
// console.log(
//     "Name: " + person.name +
//     "\nAge: " + person.age +
//     "\nCity: " + person.city
//     );

// // Using objects in arrays(nesting)
// var weapons = [
//     {
//         name: "Sword",
//         damage: 25,
//         price: 100
//     },
//     {
//         name: "Bow",
//         damage: 20,
//         price: 150
//     }
// ]

// console.log(weapons[0]);

// ***Retrieving nested objects and arrays***
// var someObject = {
//     friends: [
//         {name: "Malfoy"},
//         {name: "Crabbe"},
//         {name: "Goyle"}
//     ],
//     color: "baby blue",
//     isEvil: true
// };
// console.log(someObject.friends[0].name);

// Movie database array
var movies = [
	{
		name: 'Frozen',
		rating: 5,
		watched: true
	},
	{
		name: 'Breaking Bad',
		rating: 5,
		watched: true
	},
	{
		name: 'Curious case of Benjamin Button',
		rating: 4.5,
		watched: false
	},
	{
		name: 'Inhuman Services',
		watched: true,
		rating: 3
	}
];
function movieDB(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]['watched'] === true) {
			console.log('You have watched ' + '"' + arr[i]['name'] + '"' + ' - ' + arr[i]['rating'] + ' stars');
		} else {
			console.log('You have not watched ' + '"' + arr[i]['name'] + '"' + ' - ' + arr[i]['rating'] + ' stars');
		}
	}
}

movieDB(movies);

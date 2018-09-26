
var age = 16;

if (age === 21) {
    console.log("Happy 21st birthday!");
}
else if (age < 18) {
    console.log("You cannot enter");
}
else if (age < 21) {
    console.log("You can enter but cannot drink");
}
else if(age < 0){
    console.log("Please enter a valid number");
}
if(age % 2 === 1){
    console.log("Your age is odd!");
}
if (Math.sqrt(age) % 1 === 0) {
    console.log("Your age is a perfect square");
}
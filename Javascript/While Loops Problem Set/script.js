
var firstSet = -10

while (firstSet < 20) {
    console.log(firstSet);
    firstSet++;
}
console.log('-----NEXT SET-----');

var evenNumbers = 10;

while (evenNumbers < 42) {
    if (evenNumbers % 2 === 0) {
        console.log(evenNumbers);
    }
    evenNumbers += 2;
}

console.log('-----NEXT SET-----');

var oddNumbers = 300;
while (oddNumbers < 335) {
    if (oddNumbers % 2 === 1) {
        console.log(oddNumbers);
    }
    oddNumbers++;
}

console.log('-----NEXT SET-----');

var divisible = 5;

while (divisible <= 50) {
    if(divisible % 5 === 0 && divisible % 3 === 0){
        console.log(divisible);
    }
    divisible++;
}

// function printReverse(items){
//     for (var i = items.length - 1; i >= 0; i--) {
//         console.log(items[i]);
//     }
// }
// var names = ["brandon", "amanda"];
// printReverse(names);

// function isUniform(arr){
//     var first = arr[0];
//     for (var i = 1; i < arr.length; i++) {
    
//         if(arr[i] !== first){
//             return false;
//         }
//         else{
//             console.log("False");
//         }
//     }

// }

// var numbers = [2, 1, 1, 1];
// isUniform(numbers);

// function max(arr){
//     var placeHolder = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(placeHolder < arr[i]){
//             placeHolder = arr[i];
//         }
//         console.log(i + ":" + placeHolder);
//     }
//     return placeHolder;
// }

// max([6,2,3,4,5]);

function myForEach(arr, func){
    //loop through array
    for (let i = 0; i < arr.length; i++) {
        //call func for each item in array
        func(arr[i]);
    }
}
 var colors = ["Red", "Yellow", "Blue"];
 myForEach(colors, alert);

myForEach(colors, function(color) {
  console.log(color);   
})

Array.prototype.myForEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
        
    }
}

var friends = ["amanda", "socks", "Penny"];
friends.myForEach(function(name){
    console.log("I love " + name);
});
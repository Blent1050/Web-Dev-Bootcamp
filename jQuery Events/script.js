

clickMethod();
keyPressMethod();
onMethod();


// $('button').click(function () { 
//     var text = $(this).text();
//     console.log("You clicked " + text); 
//     $("h2").text(text);
// });

//Click()
function clickMethod() {
    $('#myButton').click(function () {
        console.log("Clicked");
        //$(this).css("background", "pink");
    });
}

//Keypress -- can use keydown or keyup as well
function keyPressMethod() {
    $("input[type=text]").keypress(function (event) {
        if (event.which === 13) {
           // alert("You hit enter");
        }
    });
}
//On - Give it name of event you want it to listen for.
function onMethod() {
    $("h1").on("click", function () {
        $(this).css("color", "purple");
    });
    $("input").on("keypress", function () {
        console.log("Key Pressed!");
    });
    $("button").on("mouseenter", function () {
        $(this).css("font-weight", "bold");
        console.log("Mouse entered");
    });
    $("button").on("mouseleave", function () {
        $(this).css("font-weight", "normal");
        console.log("Mouse left");
    });
}

//Difference between on('click') and click()
//click only adds listeners for existing elements
//on adds listeners for all potential future elements.
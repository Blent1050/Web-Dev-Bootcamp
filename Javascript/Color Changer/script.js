

var button = document.querySelector("button");
var htmlBody = document.querySelector("body");

// button.addEventListener("click", function() {
//     if(htmlBody.bgColor == "blue"){ htmlBody.bgColor = "white" }
//     else {htmlBody.bgColor = "blue";}
// })
button.addEventListener("click", function () {  
    document.body.classList.toggle("purple");
})
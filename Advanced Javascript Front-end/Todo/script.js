
//Selecting Elements
var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click",function(){
        this.classList.toggle("done");
    });
}

//Previous code
// firstLI.addEventListener("mouseover", function () {
//     console.log("Mouse Over!");
//     firstLI.style.color = "green";
// });

// firstLI.addEventListener("mouseout",function () {
//     console.log("Mouse Out!");
//     firstLI.style.color = "black";
// });
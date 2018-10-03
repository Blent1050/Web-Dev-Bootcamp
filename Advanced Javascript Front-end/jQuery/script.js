
//Select and Manipulate.
$("h1");

//can pass an object in to styles
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold",
    border: "2px solid purple"
};

$("#para").css(styles);
$("li").css("color", "red");//this saves time since you dont have to loop through all li's to change the colors.
$("h1").css("font-size", "40px");

//defining with object in place
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    backgroundColor: "rgba(89, 45, 20, 0.5)"
});
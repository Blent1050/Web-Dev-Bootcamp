// $("div").css("backgroundColor", "purple");
// $(".highlight").css("width", "200px");
// $("#third").css("border", "1px solid orange");
// $("div:first").css("color", "pink");//first-of-type is faster due to it being native to CSS

//TEXT
//The .text method: Grabs text specified in that element or all elements
console.log($("h1").text());
console.log($("li").text());
console.log($("ul").text());
//You can also change the text:
//$("ul").text("Hello");

//HTML
//The .html method: Gets the HTML contents of first element or get html of all matched elements
console.log($("ul").html());
//$("ul").html(<a href='google.com'>Click me to go to Google</a>));


//ATTR
//The attr method: Retrive value of an attribute for first element.
$("img:first-of-type").attr("src", "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png");

//VAL
//The Val method: Gets the current value of first element in a set of matched elements.
$("input").val(); //can set value as  well
$("select").val();// will return the current value

//ADDCLASS and REMOVECLASS and TOGGLECLASS
//The addclass method will add a class to the selected element.
$("h1").addClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").first().toggleClass("done");
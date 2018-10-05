
//fadeOutMethod();
//fadeToggleMethod();
//slideDownMethod();
slideToggleMethod();

//fadeOut -- fadeIn works the same just fades item in
function fadeOutMethod() {
    $("button").on("click", function () {
        $('div').fadeOut(1000, function () {  
            $(this).remove();//will wait for fadeout to complete and than will remove this item.
        });
    });
}
//fadeToggle
function fadeToggleMethod(){
    $("button").on("click", function () {
        $('div').fadeToggle(1000);
    });
}
//slideDown -- slideup does opposite.
function slideDownMethod() {
    $('button').on('click', function () {
        $('div').slideDown();
    });
}

function slideToggleMethod() {  
    $('button').on('click', function () {
        $('div').slideToggle(1000, function () {  
            $(this).remove();
        });
    });
}
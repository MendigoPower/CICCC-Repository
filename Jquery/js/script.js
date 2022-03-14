/* 
$(function() {
console.log("Hello World")

var $intro = $i(".intro");
$intro.css("color", "red");
$intro.addClass("greeting");
});
 */


/* $(".intro").css("color", "red");

var $intro = $(".intro");
$intro.css("color", "red");
$intro.addClass("greeting");


$(function () {
    $(".opening-line")
        .siblings()
        .addClass("Second-line");

    $("article")
        .children(".opening.line")
        .css("font-style", "italic");

    $("p")
        .parent()
        .siblings()
        .text("A table of blog posts");
});



$("p").css({ "font-size": "19px", "color": "white" });
$(".post").css({ "background-color": "black", "width": "35%", "border-radius": "15px", "padding": "10px" });


$("div").on("click", "button", function (event) {
    event.preventDefault();
})


$("button").on("click", function () {
    var newItem = document.getElementById('new-item').value;
    $(".my-list").append(newItem);
});

$(".box").animate(
    {
        width: "2rem",
        height: "2rem",
    },
    1000,
    function () {
        $(".box").animate(
            {
                left: "350px",
                top: "350px",
            },
            3000,
            function () {
                $(".box").animate({
                    width: "10rem",
                    height: "10rem"},
                                  $(".contet").show.().animate({opacity:"1"}))
    });
    }) */

/*     $("my-form").on("submit", function(event) {
        event.preventDefault();

        if ($("#my-text-input").val() == "") {
            alert("You missed the field.");
        } else {
            alert("Thanks for fillend the field!");
        }
    }); */

/*     $("#my-select-menu").on("change", function() {
        var selected = $(this).val();
        if (selected !== "") {
            console.log("The value you picked is: " + selected);
        }
    }); */

    // Accordian Action
var action = 'click';
var speed = "100";


$(document).ready(function(){

// Question handler
  $('li.q').on(action, function(){

    // gets next element
    // opens .a of selected question
    $(this).next().slideToggle(speed)
    
    // selects all other answers and slides up any open answer
    .siblings('li.a').slideUp();
  
    // toggle rotate class
    img.toggleClass('rotate');
  });
}); */



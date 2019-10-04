
//would ass this css if it wasn't already added in css file
//$("h1").addClass("big-title");

//change h1 to purple whenv h1 is clicked
//$("h1").click(function() {
//  $("h1").css("color", "purple");
//});

//changes h1 to purple upon button press
//$("button").click(function() {
//  $("h1").css("color", "purple");
//});

//logs keys pressed in inout box to console
//$("input").keydown(function() {
//  console.log(event.key);
//});

//changes h1 to key pressed
//$("body").keydown(function(){
//  $("h1").html(event.key);
//});

//change h1 on mouseover
//$("h1").on("mouseover", function() {
//  $("h1").css("color", "purple");
//});

//hides element
//$("button").click(function() {
//  $("h1").hide();
//});

//turns h1 on and off(visible invisible)
//$("button").click(function() {
//  $("h1").toggle();
//});

//fades element as animation - fadeToggle to fadeOut and fadeIn on clikc
//$("button").click(function() {
//  $("h1").fadeOut();
//});

//also slideUp/Down

//animate eg change opacity - will only take numeric values - chainable
//$("button").click(function() {
//  $("h1").animate({opacity: 0.5});
//});

//animate is chainable
$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

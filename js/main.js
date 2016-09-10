$(document).ready(function() {
$(".hamburger, .cross").click(function() {
$(".hamburger, .cross").toggleClass("invis");
$(".hamburger-menu").toggleClass("invis");
});
});

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).css("background-color","#cc1817");
$(this).css("color","#ffffff");
}, function() {
$(this).css("background-color","#ffffff");
$(this).css("color","#f18700");
});
});

$(document).ready(function() {
$(".ddmenu, .dditem").hover(function() {
$(".dditem").css("display","block");
}, function() {
$(".dditem").css("display","none");
});

$(document).ready(function() {
$(".container").hover(function() {
$(this).css("border","5px solid #36CFC8");
}, function() {
$(this).css("border","5px solid #b8b8b8");
});
});
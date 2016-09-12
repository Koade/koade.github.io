$(document).ready(function() {
$(".hamburger, .cross").click(function() {
$(".hamburger, .cross").toggleClass("invis");
$(".hamburger-menu").toggleClass("invis");
$(".navibar").toggleClass("fullwidth");
});
});

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).css("background-color","#F18601");
$(this).css("color","#ffffff");
}, function() {
$(this).css("background-color","#ffffff");
$(this).css("color","#f18601");
});
});

$(document).ready(function() {
$(".ddmenu, .dditem").hover(function() {
$(".dditem").css("display","block");
}, function() {
$(".dditem").css("display","none");
});
});

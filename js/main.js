$(document).ready(function() {
$(".hamburger, .cross").click(function() {
$(".hamburger, .cross").toggleClass("invis");
$(".hamburger-menu").toggleClass("invis");
$(".navibar").toggleClass("fullwidth");
});
});

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).toggleClass(".highlight");
});
});


/* $(document).ready(function() {
$(".nav-item").hover(function() {
$(this).css("background-color","#F18601");
$(this).find('p').css("color","#ffffff !important");
}, function() {
$(this).css("background-color","#ffffff");
$(this).find('p').css("color","#f18601");
});
}); */

/* $(document).ready(function() {
$(".ddmenu, .dditem").hover(function() {
$(".dditem").css("display","block");
$(".content").css("margin-top","40vh")
}, function() {
$(".dditem").css("display","none");
$(".content").css("margin-top","25vh")
});
}); */

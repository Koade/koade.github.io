$(document).ready(function() {
$(".hamburger, .cross").click(function() {
$(".hamburger, .cross").toggleClass("invis");
$(".hamburger-menu").toggleClass("invis");
$(".navibar").toggleClass("fullwidth");
});
});

/* $(document).ready(function() {
$(".nav-item").hover(function() {
$(this).addClass(".highlight");
$(this).removeClass(".nav-item");
});
});

$(document).ready(function() {
$(".highlight").hover(function() {
$(this).removeClass(".highlight");
$(this).Class(".nav-item");
});
}); */

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).removeClass(".nav-item").addClass(".highlight");
}, function() {
$(this).removeClass(".highlight").addClass(".nav-item");
});
});

/* $(document).ready(function() {
$(".ddmenu, .dditem").hover(function() {
$(".dditem").css("display","block");
$(".content").css("margin-top","40vh")
}, function() {
$(".dditem").css("display","none");
$(".content").css("margin-top","25vh")
});
}); */

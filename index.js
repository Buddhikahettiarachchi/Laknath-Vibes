
//toggle button function

$(document).ready(function () {
  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    console.log("btn clicked")
    $( "#navigation" ).toggleClass("toggle-nav-bar-color");
    $(".banner-overlay-hidden").toggleClass("banner-overlay-toggle");
  });
});

//scroll function

// $(window).scroll(function () {
//   if ($(window).scrollTop() > '250' && $(window).scrollTop() < '300') {
//     console.log($(window).scrollTop());
//     $( "#navigation" ).toggleClass("hide-navigation");
//   }
// });
// console.log("Width: " + screen.width + ": Height: " + screen.height);

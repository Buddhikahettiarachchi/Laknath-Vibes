$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= '250') {
    console.log("from top");
  }
});
console.log("Width: " + screen.width + ": Height: " + screen.height);

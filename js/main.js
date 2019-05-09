/* Start at top on Index.html */
$(document).ready(function(){
  $(this).scrollTop(0);
  });

/* Expand content sections */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 

/* Scrolling turns nav bar transparent --> gray */
$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
  $('.nav').css('background','#222226');
  } else {
  $('.nav').css('background','transparent');
  }
  });

/*
$(document).on('scroll', function (e) {
  $('.banner').css('opacity', ($(document).scrollTop() / 500));});
*/

/* For mobile */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 
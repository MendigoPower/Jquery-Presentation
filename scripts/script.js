/* Dropdown menu */
function menuBtn() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.header__inner__menu--btn')) {
      var dropdowns = document.getElementsByClassName("header__inner__menu--btn--content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


/* Carousel slides */
jQuery(document).ready(function ($) {
  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();
  var slideHeight = $("#slider ul li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      300,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      300,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });
});

// Scroll button
$(function () {
  var pagetop = $(".scroll");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});

//Tooltip
$("#tooltip-ingredients").attr('title', 'If you don\'t want a very sweet recipe, you can add dark cocoa powder');

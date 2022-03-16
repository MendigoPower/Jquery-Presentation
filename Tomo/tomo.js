$(function () {
  $(".open_btn").click(function () {
    $("#overlay, .modal_window").fadeIn();
  });
  $(".close_btn").click(function () {
    $("#overlay, .modal_window").fadeOut();
  });
});

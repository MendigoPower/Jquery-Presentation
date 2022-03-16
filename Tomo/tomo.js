$(function () {
  $(".open_btn").click(function () {
    $("#overlay, .modal_window").fadeIn();
  });

  $(".close_btn").click(function () {
    $("#overlay, .modal_window").fadeOut();
  });

  $(".submit_btn").click(function (event) {
    event.preventDefault;
    $(".mw_top").hide();
    $(".modal_p").show();
  });

  $("#closeBtn").click(function () {
    $("#overlay, .modal_window").fadeOut();
  });
});

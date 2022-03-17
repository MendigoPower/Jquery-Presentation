$(function () {
  $(".form_btn").click(function () {
    var str = $("#email").value;
    if (str.match(/^([a-z0-9_\.\-])+@([a-z0-9_\.\-])+[^.]$/i)) {
      $(".overlay, .modal").fadeIn();
    } else {
      alert("Please enter the correct mail address again.");
    }
  });
});

$(function () {
  $(".close_btn").click(function () {
    $(".overlay, .modal").fadeOut();
  });
});

// Subscribe form

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}

// Modal form

$(function () {
  $(".probtn").click(function () {
    $(".overlay, .modal").fadeIn();
  });

  $(function () {
    $(".close_btn").click(function () {
      $(".overlay, .modal").fadeOut();
    });
  });
});

// Viewers form

window.onload = function calcurate() {
  var yesterday = Math.floor(Math.random() * 1000);
  var today = Math.floor(Math.random() * 100);
  var total = yesterday + today;

  document.getElementById("yesterday").innerHTML = yesterday;
  document.getElementById("today").innerHTML = today;
  document.getElementById("total").innerHTML = total;
};

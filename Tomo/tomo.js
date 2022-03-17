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

// $(function () {
//   $(".close_btn").click(function () {
//     $(".overlay, .modal").fadeOut();
//   });
// });

// var str = $("#email").val();
//     if (str.match(/^([a-z0-9_\.\-])+@([a-z0-9_\.\-])+[^.]$/i)) {

//       else {
//         alert("Please enter the correct mail address again.");

// $(function () {
//   $(".form_btn").click(function () {
//     var str = $("#email").val();
//     if (str.match(/^([a-z0-9_\.\-])+@([a-z0-9_\.\-])+[^.]$/i)) {
//       $(".overlay, .modal").fadeIn();
//     } else {
//       return true;
//     }
//   });
// });

// function ValidateEmail(inputText){
//   $(".form_btn").click(function () {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)){
//       alert("Valid email address!");
//     } else {
//       alert("Please enter the correct mail address again.");
//     };
//   }

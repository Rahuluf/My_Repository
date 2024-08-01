
$(document).ready(function () {
  $("#ASOS").show();
  $("#WOMEN").hide();
  $("#MEN").hide();
  $("#contact").hide();

  $("body").on("click", "#a", function () {
    $("#ASOS").show();
    $("#WOMEN").hide();
    $("#MEN").hide();
    $("#contact").hide();
  });

  $("body").on("click", "#b", function () {
    $("#ASOS").hide();
    $("#WOMEN").show();
    $("#MEN").hide();
    $("#contact").hide();
  });

  $("body").on("click", "#c", function () {
    $("#ASOS").hide();
    $("#WOMEN").hide();
    $("#MEN").show();
    $("#contact").hide();
  });


  // $("body").on("click", "#d", function () {
  //   $("#ASOS").hide();
  //   $("#WOMEN").hide();
  //   $("#MEN").hide();
  //   $("#contact").show();
  // })

  $(".login-link").click(function () {
    $("#login-form-popup").css("display", "block");
    $("#signup-form-popup").css("display", "none");
  });

  $(".signup-link").click(function () {
    $("#signup-form-popup").css("display", "block");
    $("#login-form-popup").css("display", "none");
  });

  // Pop up close
  $(".popup-close").click(function () {
    $(".form-popup").css("display", "none");
  });

  $('form').attr('autocomplete', 'off');

  // Toggle menu
  $(".toggle-menu").click(function() {
    $("#nev").toggleClass("active");
  });

})






// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems);

//   // Close button functionality
//   var closeButton = document.getElementById('close-button');
//   if (closeButton) {
//       closeButton.addEventListener('click', function() {
//           var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
//           sidenavInstance.close();
//       });
//   }
// });








//Dropdown
// function openLoginForm() {
//     closeSignupForm();
//     document.getElementById("loginFormPopup").style.display = "block";
// }

// function closeLoginForm() {
//     document.getElementById("loginFormPopup").style.display = "none";
// }

// function openSignupForm() {
//   closeLoginForm();
//     document.getElementById("signupFormPopup").style.display = "block";
// }

// function closeSignupForm() {
//     document.getElementById("signupFormPopup").style.display = "none";
// }

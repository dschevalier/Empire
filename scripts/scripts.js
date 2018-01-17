// $(document).ready(function() {
//   $(".js-nav-icon, .js-main-nav a").click(function(element) {
//     var nav = $(".js-main-nav");
//     var icon = $(".js-nav-icon i");

//     //Gets the class name of the element that triggered the event
//     var clicked = element.target.className;

//     // //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
//     // if (icon.hasClass("fa-bars") && clicked == "logo-black") return;

//     //Opens and closes the menu
//     if ($(window).width() < 1000) {
//       nav.slideToggle(300);
//     }

//     //Changes icon states of the menu button
//     if (icon.hasClass("fa-bars")) {
//       icon.addClass("fa-times");
//       icon.removeClass("fa-bars");
//     } else {
//       icon.addClass("fa-bars");
//       icon.removeClass("fa-times");
//     }
//   });

//   $(window).resize(function() {
//     var nav = $(".js-main-nav");
//     var icon = $(".js-nav-icon i");

//     if ($(window).width() > 1000) {
//       nav.css("display", "block");
//       icon.addClass("fa-times");
//       icon.removeClass("fa-bars");
//     } else {
//       nav.css("display", "none");
//       icon.addClass("fa-bars");
//       icon.removeClass("fa-times");
//     }
//   });
// });


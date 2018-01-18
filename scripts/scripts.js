$(document).ready(function () {
    $(".js-nav-icon, .js-main-nav a").click(function (element) {
        var nav = $(".js-main-nav");
        var icon = $(".js-nav-icon i");

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Opens and closes the menu
        if ($(window).width() < 1200) {
            nav.slideToggle(300);
        }

        //Changes icon states of the menu button
        if (icon.hasClass("fa-bars")) {
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        } else {
            icon.addClass("fa-bars");
            icon.removeClass("fa-times");
        }
    });

    $(window).resize(function () {
        var nav = $(".js-main-nav");
        var icon = $(".js-nav-icon i");

        if ($(window).width() > 1200) {
            nav.css("display", "block");
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        } else {
            nav.css("display", "none");
            icon.addClass("fa-bars");
            icon.removeClass("fa-times");
        }
    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate({
                    scrollTop: $(hash).offset().top - 5
                },
                1000,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});
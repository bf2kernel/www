// Header
$(function () {
    var shrinkHeader = 30;
    var navbar = $(".navbar");
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            navbar.addClass("shrink");
        }
        else {
            navbar.removeClass("shrink");
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

// jQuery version
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    });

    $('#backToTopBtn').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});

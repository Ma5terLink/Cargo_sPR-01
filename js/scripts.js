// Плавный скролл и класс pageup
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: '0'});
    return false;
});

// Плавный скролл и класс pageup
const pageCH = document.querySelector('.pageup');

$(window).scroll(function () {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
    if ($(this).scrollTop() > 2080) {
        pageCH.classList.add('change');
    } else {
        pageCH.classList.remove('change');
    }
});

$("a[href^='#up']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: '0'});
    return false;
});

// Плавный скролл и класс pageup
const pageCH = document.querySelector('.pageup');

$(window).scroll(function () {
    // console.log($(this).scrollTop());
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

// Смена активного класса в секции services
const servGrid = document.querySelectorAll('.all-services__grid-item');
servGrid.forEach((item, i) => {
    let num;
    num = (servGrid.length);
    servGrid[i].addEventListener('mouseenter', () => {
        for (let j = 0; j < num; j++) {
        servGrid[j].classList.remove('active');
        }
        servGrid[i].classList.add('active');
    });
});
// "Вертим" картинки (смена классов) в секции about
const aboutGrid = document.querySelectorAll('.about-company__gridBlock-item');
aboutGrid.forEach((item, i) => {
    aboutGrid[i].addEventListener('mouseenter', () => {
        if (aboutGrid[i].classList.length > 1) {
            if (aboutGrid[i].classList[1] == 'image') {
            aboutGrid[i].classList.remove('image');
            }
        } else {
            aboutGrid[i].classList.add('image');
        }
    });
});





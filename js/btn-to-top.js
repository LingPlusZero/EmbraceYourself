$(function () {
    $('body').append('<div id="toTop"><img src="./img/icon-arrow-toTop.svg" alt="回上方"></div>');

    $(window).scroll(function () {

        if ($('title').html() == '暖暖心理諮商所') {
            if (window.scrollY > screen.height * 0.8) {
                $('#toTop').addClass('show');
            } else {
                $('#toTop').removeClass('show');
            }
        } else {
            if(document.querySelector('#banner-container')) {
                if (window.scrollY > $('#banner-container').css('height').replace('px', '')) {
                    $('#toTop').addClass('show');
                } else {
                    $('#toTop').removeClass('show');
                }
            } else {
                if (window.scrollY > ($('.cover').position().top + Number($('.cover').css('height').replace('px', '')))) {
                    $('#toTop').addClass('show');
                } else {
                    $('#toTop').removeClass('show');
                }
            }
            
        }

    })

    $('#toTop').click(function () {
        window.scrollTo(0, 0);
    })
})
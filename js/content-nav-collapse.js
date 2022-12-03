$(function () {

    // 資料收合

    $('.detail h4').has('img').next('ul').slideUp();
    $('.detail h4').has('img').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('ul').stop().slideUp('slow');
            $(this).find('img').attr('src', './img/icon-plus.svg')

        } else {
            $(this).addClass('active').next('ul').stop().slideDown('slow');
            $(this).find('img').attr('src', './img/icon-minus.svg')
        }
    })

})
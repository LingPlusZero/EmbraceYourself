$(function () {

    // 導覽列
    $('#navbar-sm').click(function () {
        if ($(this).find('div').hasClass('active')) {
            $(this).find('div').removeClass('active');
            $('#navbar').slideUp('slow');
        } else {
            $(this).find('div').addClass('active');
            $('#navbar').slideDown('slow');
        }
    });

    
    // 取消按鈕
    $('a.disabled').removeAttr('href');

    // 空連結防止滾動
    $('a[href="#"]').click(function (event) {
        event.preventDefault();
        return false;
    })
})

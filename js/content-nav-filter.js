$(function () {

    $('#content-nav a').click(function () {
        // 按鈕樣式

        if ($('#content-nav a') != $(this)) {
            $('#content-nav a').removeClass('active')
        }
        $(this).addClass('active');
        var activeLabel = $(this).html();

        // 導覽分類功能
        
        if (activeLabel.indexOf('全部') < 0) {
            $('.news, .photo-card').each(function () {
                if ($(this).find('.label-type1, .label-type2').html() == activeLabel) {
                    $(this).stop().show();
                } else {
                    $(this).stop().hide();
                }
            })

        } else {
            $('.news, .photo-card').each(function () {
                $(this).stop().show();
            })
        }

    })

    $('#content-nav a').get(0).click();

})
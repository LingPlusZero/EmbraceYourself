$(function () {

    $('#content-nav a').click(function () {

        // 導覽按鈕樣式改變
        if ($('#content-nav a') != $(this)) {
            $('#content-nav a').removeClass('active');
        }
        $(this).addClass('active');

        var activeCate = $(this).attr('class').replace('active', "").trim();

        // 頁面滾動
        let y = -180;
        // let y = 0;

        y += $(`div.${activeCate}`).position().top;

        window.scrollTo(0, y);
    })

})
$(function () {

    // 導覽列收合
    
    var prePageY = window.scrollY;

    $(document).scroll(function () {
        var currentPageY = window.pageYOffset;
        if (prePageY > currentPageY) {
            $('#content-nav').css({ 'top': 80 });
        } else {
            $('#content-nav').css({ 'top': -80 });
        }
        prePageY = currentPageY;
    })
})
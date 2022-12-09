$(function () {
    // banner動畫
    $('.banner-type1 h1, .banner-type1 p, .banner-type2 h1, .banner-type2 p').addClass('animate_fade_none');
    $('.banner-type1 .flower').addClass('flower_tocenter');
    $('.banner-type1 .leaf').addClass('leaf_tocenter');
    $('.banner-type1 .mountain').addClass('mountain_tocenter');

    $('.banner-type1 p, .banner-type2 p').css({'animation-delay': '0.1s' })

    // 內容
    $('#content-container, #content, #about-section1, #about-section2, .news').addClass('animate_fade_none');
    $('#content-container, #about-section1, #about-section2').css({ 'animation-delay': '0.3s' })
    $('#content').css({ 'animation-delay': '0.4s' })


    // 圖卡
    var photoCard = document.querySelectorAll('.photo-card');
    if (photoCard) {
        photoCard.forEach(function (elem, index) {
            elem.classList.add('animate_slideup');
            elem.style.animationDelay = `${index * 0.1 + 0.1}s`;
        })

        setTimeout(function () { $('.photo-card').css({ 'animation-delay': '0s' }) }, 900)
    }

    $(window).scroll(function () {
        const showTiming = screen.height * 0.8;
        // 頁面下方按鈕
        var twoBtn = document.querySelector('.content-btn');
        if (twoBtn) {
            if (showTiming > twoBtn.getBoundingClientRect().top) {
                twoBtn.classList.add('animate_fade_light');
            } else {
                twoBtn.classList.remove('animate_fade_light');
            }
        }

        // 預約按鈕

        var appointment = document.querySelector('.appointment');
        if (appointment) {
            if (showTiming > appointment.getBoundingClientRect().top) {
                appointment.classList.add('animate_slideup');
            } else {
                appointment.classList.remove('animate_slideup');
            }
        }
    })
})

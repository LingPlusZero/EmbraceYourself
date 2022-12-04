$(function () {
    $('#key-vision').ready(function () {
        $('.key-vision-deco.left').addClass('animate_slideleft');
        $('.key-vision-deco.right').addClass('animate_slideright');
        $('.key-vision-deco.left .key-vision-deco.right').css({ 'animation-delay': '0.4s' })
    })
    $('#key-vision p').ready(function () {           
        $('#key-vision p, #key-vision h1').addClass('animate_fade_none').css({ 'animation-delay': '0.4s' });
    })


    // 翻牌效果
    // hover for pc
    $('.circle').hover(
        function () {
            $(this).find('.circle-front').addClass('flip');
            $(this).find('.circle-back').addClass('flip');
        },
        function () {
            $(this).find('.circle-front').removeClass('flip');
            $(this).find('.circle-back').removeClass('flip');
        })
    // click for mobile devices
    $('.circle').click(function () {
        if ($(this).find('.circle-front').hasClass('flip') && $(this).find('.circle-back').hasClass('flip')) {
            $(this).find('.circle-front').removeClass('flip');
            $(this).find('.circle-back').removeClass('flip');
        } else {
            $(this).find('.circle-front').addClass('flip');
            $(this).find('.circle-back').addClass('flip');
        }
    })

    // 滾動事件

    $(window).scroll(function () {
        const showTiming = screen.height * 0.8;

        // 關於我們
        var about = document.querySelector('.about');
        aboutImg = about.children[0];
        aboutTxt = about.children[1];
        if (showTiming > about.getBoundingClientRect().top) {
            aboutImg.classList.add('animate_slideright');
            aboutTxt.classList.add('animate_slideleft');

        } else {
            aboutImg.classList.remove('animate_slideright');
            aboutTxt.classList.remove('animate_slideleft');
        }

        // 翻牌、最新消息、活動、文章
        var block = document.querySelectorAll('.animate-block');
        block.forEach(function (elem, index) {
            var offsetTop = elem.getBoundingClientRect().top,
                title = elem.children[0],
                contents = elem.children[1].children,
                btnBig = elem.nextElementSibling,
                btnSmall = elem.lastElementChild;

            if (showTiming > offsetTop) {
                title.classList.add('animate_fade_light');

                for (i = 0; i < contents.length; i++) {
                    contents[i].classList.add('animate_slideup');
                    contents[i].style.animationDelay = `${i * 0.1}s`;
                }
                // btn-secondary
                if (btnBig) {
                    btnBig.classList.add('animate_fade_light');
                    btnBig.style.animationDelay = '0.5s';
                
                // more 
                } else if (btnSmall && btnSmall.tagName == 'A') {
                    btnSmall.classList.add('animate_fade_light');
                    btnSmall.style.animationDelay = '0.5s';
                }

            } else {
                title.classList.remove('animate_fade_light');

                if (btnBig) {
                    btnBig.classList.remove('animate_fade_light');
                } else if(btnSmall && btnSmall.tagName == 'A') {
                    btnSmall.classList.remove('animate_fade_light');
                }

                for (i of contents) {
                    i.classList.remove('animate_slideup');
                }
            }

        })

        // 預約按鈕

        var appointment = document.querySelector('.appointment');
        if (showTiming > appointment.getBoundingClientRect().top) {
            appointment.classList.add('animate_slideup');
        } else {
            appointment.classList.remove('animate_slideup');
        }

    })

})

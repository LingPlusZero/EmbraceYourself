$(function () {
    // seo
    const title = $('head title').html();

    var description = '';

    switch (title) {
        case '暖暖心理諮商所':
        case '預約表單':
            description = '不需要完美，只要成為完整的自己！暖暖心理諮商所聽您細訴，伴您一同成長，讓我們陪您找回生命的色彩與心靈的力量！';
            break;

        case '關於暖暖':
            description = '我們將診所的中文名字取為「暖暖」，期望能夠帶給那些在人生旅途中迷失方向的人們溫暖擁抱，而最終人們能重獲勇氣和能力面對自己並擁抱自身一切。';
            break;

        default:
            description = $('.banner-type1 p').html();
            break;
    }

    const url = location.href;
    var OGPList = [
        ['og:type', 'website'],
        ['og:title', '暖暖-' + title],
        ['og:image', './img/logo_seo.svg'],
        ['og:site_name', '暖暖心理諮商所'],
        ['og:description', description],
        ['og:url', url]
    ];

    var standardList = [
        ['author', '暖暖心理諮商所'],
        ['description', description],
        ['keywords', '暖暖心理諮商所, 暖暖, 心理諮商']
    ]

    const anchor = $('head title');

    for (i = 0; i < OGPList.length; i++) {
        anchor.before(`<meta property="${OGPList[i][0]}" content="${OGPList[i][1]}">`);
    }

    for (i = 0; i < standardList.length; i++) {
        anchor.before(`<meta property="${standardList[i][0]}" content="${standardList[i][1]}">`);
    }
})
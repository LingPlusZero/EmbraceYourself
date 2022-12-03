$(function () {
    // seo
    const title = $('head title').html();
    const description = $('.seo').text().split(/\。|\！/gi)[0].replace(/\s/gmi, '').trim() + '。';
    const author = $('i').text().trim();
    const url = location.href;
    var OGPList = [
        ['og:type', 'article'],
        ['og:title', title],
        ['og:description', description],
        ['og:article:author', author],
        ['og:image', './img/logo_seo.svg'],
        ['og:url', url],
        ['og:site_name', '暖暖心理諮商所']
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
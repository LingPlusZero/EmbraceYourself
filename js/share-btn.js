$(function () {
    $('#share-btn a').click(function () {
        var pageUrl = location.href;

        if ($(this).attr('class') == 'copy-button') {
            navigator.clipboard.writeText(pageUrl);
            $(this).find('.tooltip').html('已複製連結');
            setTimeout(function () {$('.copy-button .tooltip').html('複製連結')}, 1000);
        }
        if ($(this).attr('class') == 'line-share-button') {
            window.open('https://social-plugins.line.me/lineit/share?url=' + pageUrl,
            'line-share-dialog',
            'width=600,height=600')
        }
        if ($(this).attr('class') == 'fb-share-button') {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + pageUrl,
            'facebook-share-dialog',
            'width=600,height=600')
        }
    })
})
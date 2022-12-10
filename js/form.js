$(function () {

    // radio btn
    $('.gender label').click(function () {
        $('.gender label').find('.radio-btn').removeClass('selected');
        $(this).find('.radio-btn').addClass('selected');
    })
    // checkbox btn
    $('.contact label, .issue label').click(function () {
        var current = $(this).find('.checkbox-btn');
        if (current.hasClass('selected')) {
            current.removeClass('selected');
        } else {
            current.addClass('selected');
        }
    })


    // 表單分頁切換

    // 預設樣式
    $('#form-section2, #form-finish').hide();
    $('.second').addClass('unfinished');
    $('.third').addClass('unfinished');

    $('form a').click(function () {
        window.scrollTo(0, 50);

        // 第一頁
        if ($(this).hasClass('continue')) {
            // 檢查當前頁面有沒有填完
            if (checkAllFilled()) {
                // 頁面顯示/隱藏
                $('#form-section1, .mark').hide();
                $('#form-section2').show();
                // 進度條
                $('.progress-line .line-bg .line').css('width', '50%');
                $('.first').addClass('finished');
                $('.second').removeClass('unfinished');
            } else {
                return false;
            }
        }

        // 返回
        if ($(this).hasClass('back')) {
            // 頁面
            $('#form-section1, .mark').show();
            $('#form-section2').hide();
            // 進度條
            $('.progress-line .line-bg .line').css('width', '0%');
            $('.second').removeClass('finished').addClass('unfinished')
            $('.first').removeClass('finished');
        }

        // 第二頁
        if ($(this).hasClass('submit')) {
            // 檢查當前頁面有沒有填完
            if (checkAllFilled()) {
                // 頁面顯示/隱藏
                $('#form-section2').hide();
                $('#form-finish').show();
                // 進度條
                $('.progress-line .line-bg .line').css('width', '100%');
                $('.second').addClass('finished');
                $('.third').removeClass('unfinished');
                // 送出表單
                $('#submit').click();
            } else {
                return false;
            }

        }
    });

    // 防止表單送出後跳轉至第一頁
    $('form').submit(function (event) {
        event.preventDefault();
        console.log('表單送出成功');
        return false;
    });

    // 防止enter送出表單
    $(document).on("keypress", "form", function (event) {
        var code = event.keyCode || event.which;
        if (code == 13) {
            event.preventDefault();
            return false;
        }
    });

    // 檢查function
    function checkAllFilled() {
        var
            // text-like input
            name = $('#name'),
            birth = $('#birth'),
            tel = $('#tel'),
            email = $('#email'),

            // checkbox
            contact = $('.contact input[type=checkbox]:checked'),
            issue = $('.issue input[type=checkbox]:checked');

        // 第一頁檢查
        if ($('#form-section2').css('display') == 'none') {

            // text-like input
            markTextNull([name, birth, tel, email]);

            // checkbox
            markCheckboxNull(contact, '.contact');

            return [name, birth, tel, email].every(item => !item.hasClass('warning')) && contact.val() != null;
        }

        // 第二頁檢查
        if ($('#form-section1').css('display') == 'none') {
            // checkbox
            markCheckboxNull(issue, '.issue');

            return issue.val() != null;
        }
    }

    // 加註警告文字和外框
    $('.null-warning').hide();

    // text-like input
    function markTextNull(arr = []) {
        arr.forEach(item => {
            if (!item.val()) {
                item.addClass('warning').siblings('.null-warning').show();
            }
            else {
                if (item.hasClass('warning') && item.siblings('.format-warning').css('display') == 'block') {
                    item.siblings('.null-warning').hide();
                }
                else {
                    item.removeClass('warning').siblings('.null-warning').hide();
                }

            }
        });
    }
    // checkbox input
    function markCheckboxNull(content, btnClass) {

        if (!content.val()) {
            $(btnClass + ' .checkbox-btn').addClass('warning')
            $(btnClass).find('.null-warning').show();
        } else {
            $(btnClass + ' .checkbox-btn').removeClass('warning');
            $(btnClass).find('.null-warning').hide();
        }
    }

    $('#name, #birth, #tel, #email').change(function () {
        markTextNull([$(this)])
    });

    $('input[type=checkbox]').change(function () {
        var select = '.' + $(this).attr('name') + ' input[type=checkbox]:checked';
        markCheckboxNull($(select), '.' + $(this).attr('name'));
    })


    // 檢查tel格式
    $('.tel p.format-warning, .tel span').hide();

    $('#tel').change(function () {
        var phone = $(this).val();
        const format = /[0][1-9]{1}(\-*\d{2}\-*\d{3}\-*\d{3}|\s*\d{2}\s*\d{3}\s*\d{3}|\-*\d{3,4}\-*\d{4}|\s*\d{3,4}\s*\d{4})/gi;

        if (!format.test(phone)) {
            $(this).addClass('warning').siblings('p.format-warning').show().siblings('.tel span').hide();
        } else {
            $(this).removeClass('warning').siblings('p.format-warning').hide().siblings('.tel span').fadeIn();
        }
    })

    // 檢查email格式
    $('.email p.format-warning, .email span').hide();

    $('#email').change(function () {
        var address = $(this).val();
        const format = /[^@\-\/\s]+@{1}.+\.{1}.+/gi;

        if (!format.test(address)) {
            $(this).addClass('warning').siblings('p.format-warning').show().siblings('.email span').hide();
        } else {
            $(this).removeClass('warning').siblings('p.format-warning').hide().siblings('.email span').fadeIn();

        }
    })


    // 動態方案選項
    const member = document.querySelector('.member select');
    const plan = document.querySelector('.plan select');
    member.onchange = function () {
        var
            recommendation = {
                value: ['person', 'partner', 'family', 'distance'],
                option: ['個人諮商', '伴侶諮商', '家庭諮商', '遠距諮商']
            },
            regular = {
                value: ['person2000', 'partner2500', 'family2500', 'distance2500'],
                option: ['個人諮商 $2000 / 50min', '伴侶諮商 $2500 / 50min', '家庭諮商 $2500 / 50min', '遠距諮商 $2500 / 50min']
            },
            intern = {
                value: ['person1000', 'partner1500', 'family1500', 'distance1500'],
                option: ['個人諮商 $1000 / 50min', '伴侶諮商 $1500 / 50min', '家庭諮商 $1500 / 50min', '遠距諮商 $1500 / 50min']
            };


        var chosen = member.value;

        while (plan.children.length > 0) {
            plan.removeChild(plan.lastChild);
        }

        for (i = 0; i < 4; i++) {
            var option = document.createElement('option');

            if (chosen == 'recommendation') {
                option.value = recommendation.value[i];
                option.innerHTML = recommendation.option[i];
            }

            if (chosen.includes('clinical') || chosen.includes('counseling')) {
                option.value = regular.value[i];
                option.innerHTML = regular.option[i];
            }

            if (chosen == 'intern') {
                option.value = intern.value[i];
                option.innerHTML = intern.option[i];
            }

            plan.append(option);

        }

    }

})

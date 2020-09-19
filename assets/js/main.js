$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top-$('header').height()-16});
        return false;
    });
});

$(document).ready(function () {

    //проверка урла
    let url = window.location.href;

    if (url.indexOf('#')>-1) {
        let target = url.substring(url.indexOf('#'), url.length);
        $('.about__tab').each(function () {
            $(this).hide();
        });
        $(target).show();
        $("html, body").animate({scrollTop: $(target).offset().top-$('header').height()-16});
    }

    
    $('.burger').click(function () {
        if ($('.header__menu').hasClass('active')) {
            $('.header__menu').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.header__menu').addClass('active');
            $(this).addClass('active');
        }
    });


    //высота хэдера и отступ меню в мобилке
    if ($(window).width() < 992) {
        let headHeight = $('header').height() + 16;
        let menuTop = headHeight;
        let menuHeight = $(window).height() - headHeight;
        console.log($('header').height(),headHeight, menuTop, menuHeight);
        $('body').css('padding-top',headHeight);
        $('.header__menu').css({top:menuTop, height:menuHeight});
    }

    //tabs
    $('.about__link').click(function () {
        let url = window.location.href;
        let target = $(this).data('target');
        $('.about__tab').each(function () {
            $(this).hide();
        });
        $(target).show();
        $("html, body").animate({scrollTop: $(target).offset().top-$('header').height()-16});

        url += target;
        $(location).attr('href', url);
    })

    $('.tab__back').click(function () {
        $('.about__tab').each(function () {
            $(this).hide();
        });
        $("#main").show();

        let url = window.location.href;
        let lastIndex = url.lastIndexOf("#");
        url = url.substring(0, lastIndex);
        $(location).attr('href', url);

        $("html, body").animate({scrollTop: $("#main").offset().top-$('header').height()-16});
    })

})

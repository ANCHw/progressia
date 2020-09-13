$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$(document).ready(function () {
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
        let target = $(this).data('target');
        $('.about__tab').each(function () {
            $(this).hide();
        });
        $(target).show();
    })

    $('.tab__back').click(function () {
        $('.about__tab').each(function () {
            $(this).hide();
        });
        $("#main").show();
    })

})
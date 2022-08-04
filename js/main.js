$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp()
    });


    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        vertical: true,
    });

    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        dots: true,
    });

    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider'
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slider'
    });

    $('.double_building .box .right i:nth-child(1)').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });

    $('.double_building .box .right i:nth-child(2)').on('click', function () {
        $('.left_slider').slick('slickNext')
    });

    $('.tab_menu li').on('click', function () {
        var idx = $(this).index(); //0,1,2
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 })

    })

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        //console.log(sct)
        if (sct > 500) {
            $('.to_top').fadeIn();

        } else {
            $('.to_top').fadeOut();
        }

    });

    $('#link').on('change', function () {
        var lik = $(this).val();
        console.log(lik);
        if (lik) { window.open(lik); }
    });


})

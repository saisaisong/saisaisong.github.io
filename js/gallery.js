$(function () {

    $('.pic div').on('click', function () {

        $(this).stop(true,true);
        $('.middle').stop(true,true);

        var thisLeft = $(this).offset().left;
        var thisTop = $(this).offset().top;
        var thisZindex = $(this).css('z-index');
        var middleLeft = $('.middle').offset().left;
        var middleTop = $('.middle').offset().top;
        var middZindex = $('.middle').css('z-index');

        $(this).animate({"z-index":middZindex,'top':middleTop,'left':middleLeft},500);
        $('.middle').animate({"z-index":thisZindex,'top':thisTop,'left':thisLeft},500);

        $('.middle').removeClass('middle');
        $(this).addClass('middle');


    })
})
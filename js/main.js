$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});
$('.carousel-item').mouseenter(function() {
    $('.carousel').carousel('next');
})
$('.carousel').carousel({pause:false})
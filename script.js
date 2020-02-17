$(function(){

    $('.scrollTop').fadeOut();
    //Header arrow scroll button to about me section
    $(".scroll").on("click", function (){
        $("body,html").animate(
            {
            scrollTop: $(".firstSection__card").offset().top
            },
            800
        );
    })

    $(".scrollTop").on("click", function (){
        $("body,html").animate(
            {
            scrollTop: $("header").offset().top
            },
            800
        );
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.scrollTop').fadeIn();
            } else {
            $('.scrollTop').fadeOut();
            }
        });
    let position = 0
    $('.scrollRight').on('click', function() {

        if(position>350){
            position = 0
        }else{
            position+= 250
        }
        document.querySelector(".mainMenu").scrollTo({
            left: position,
            behavior: 'smooth'
        })
    });
})
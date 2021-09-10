$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav")

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    
    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        let scrollPos = $(window).scrollTop();
        checkScroll(scrollPos, introH);
    });
    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
        nav.removeClass("show")
    });

    // burger menu show hide

    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    // Reviews 
    let slider = $("#reviewsSlider");

    slider.slick({
      infinite: true,
      fade: false,
      arrows: false,
    });

});
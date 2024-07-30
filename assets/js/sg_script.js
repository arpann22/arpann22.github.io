jQuery(document).ready(function ($) {


    $('.sg_slider_stats').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // hide stats for mobile and desktop alternatively
    function applyResponsiveClasses() {
        const width = $(window).width();
        if (width > 1024) {
            $('.hide-desktop').hide();
            $('.hide-tabs').show();
            $('.hide-mobile').show();
        } else if (width > 767 && width <= 1024) {
            $('.hide-desktop').show();
            $('.hide-tabs').hide();
            $('.hide-mobile').show();
        } else {
            $('.hide-desktop').show();
            $('.hide-tabs').show();
            $('.hide-mobile').hide();
        }
    }

    $(document).ready(function () {
        applyResponsiveClasses();
        $(window).resize(function () {
            applyResponsiveClasses();
        });
    });

});

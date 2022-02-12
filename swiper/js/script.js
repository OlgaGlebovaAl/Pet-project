$(document).ready(function() {
    $('.reviews_part').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});



window.addEventListener("resize", function() {
    if (screen.width <= 768) {
        $('.sale-part__products').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 426,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  }
              }],
              responsive: [
                {
                  breakpoint: 376,
                  settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                          }
                        }],
                        responsive: [
                            {
                              breakpoint: 320,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                              }
                            }]
        })
    }

    if (window.innerWidth >= 1024) {
        $('.sale-part__products').slick('unslick');
        sliderIsLive = false;
      }
});
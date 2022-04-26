$(function () {
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  $(".menu a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

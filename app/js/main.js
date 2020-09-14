$(function(){

    $('.rate-star').rateYo({
      rating: 5,
      starWidth: '11px',
      ratedFill: '#ffa726',
      readOnly: true,
      spacing: '2px'
    });

    if($('div').is('.mix')){
      var mixer = mixitup('.products__inner-box');
    };

    $('.product-slider__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });

    $('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: '$',
    });

    $('.icon-th-large').on('click', function(){
      $('.products__item').removeClass('list');
      $('.icon-th-large').addClass('active');
      $('.icon-th-list').removeClass('active');
    });
    $('.icon-th-list').on('click', function(){
      $('.products__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');
    });
});
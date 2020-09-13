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
});
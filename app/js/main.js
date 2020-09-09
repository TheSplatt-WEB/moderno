$(function(){

    $('.rate-star').rateYo({
      rating: 5,
      starWidth: '12px',
      ratedFill: '#ffa726',
      readOnly: true,
      spacing: '2px'
    });

    var mixer = mixitup('.products__inner-box');

    $('.product-slider__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
});
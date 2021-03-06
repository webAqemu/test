
$(".header__item--hover").mouseover(function () {
  $("#layer").addClass("active")
});
$(".header__item--hover").mouseout(function () {
  $("#layer").removeClass("active")
});

$('.header__burger').on('click', function () {

  $('.header__burger').toggleClass('header__burger--active');

});

$('.main-screen__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="main-screen__arrow main-screen__arrow--left"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8299 2.83003L12 0L0 12L12 24L14.8299 21.17L5.65997 12L14.8299 2.83003Z" fill="black"/></svg></button>',
  nextArrow: '<button class="main-screen__arrow main-screen__arrow--right"><svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.82994 0L0 2.83003L9.16997 12L0 21.17L2.82994 24L14.8299 12L2.82994 0Z" fill="black"/></svg></button>',
  responsive: [
    {
      breakpoint: 851,
      settings: {
        prevArrow: '<button class="main-screen__arrow main-screen__arrow--left"><svg width="6" height="10" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8299 2.83003L12 0L0 12L12 24L14.8299 21.17L5.65997 12L14.8299 2.83003Z" fill="black"/></svg></button>',
        nextArrow: '<button class="main-screen__arrow main-screen__arrow--right"><svg width="6" height="10" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.82994 0L0 2.83003L9.16997 12L0 21.17L2.82994 24L14.8299 12L2.82994 0Z" fill="black"/></svg></button>',
      }
    },
  ]
});

$('.products__preview').on('click', function () {

  $('.products__item').removeClass('products__item--active');
  $(this).parent().addClass('products__item--active');

});

$('.catalog__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  variableWidth: true,
  infinite: false,
});

$('.offers__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  variableWidth: true,
  infinite: false,
  swipeToSlide: true,
});

// const firstOffer = document.querySelector(".offers__slide--1");
// const secondOffer = document.querySelector(".offers__slide--2");
// const thirdOffer = document.querySelector(".offers__slide--3");

$(".offers__slide--2").mouseover(function () {
  $(".offers__slide--1").addClass("active")
  $(".offers__slide--3").addClass("active")
});
$(".offers__slide--2").mouseout(function () {
  $(".offers__slide--1").removeClass("active")
  $(".offers__slide--3").removeClass("active")
});
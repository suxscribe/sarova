import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
import { variables, elements } from './variables';

export let section1Slider = () => {
  if (document.querySelector('.section-1__slider')) {
    var swiperSection1 = new Swiper('.section-1__slider', {
      effect: 'slide',

      speed: variables.swiperSpeed,
      loop: false,
      centeredSlides: true,
      slidesPerView: '3',
      initialSlide: 1,
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.section-1__slider-nav--right',
        prevEl: '.section-1__slider-nav--left',
      },
      keyboard: true,
      // on: {
      //   click: function() {
      //     swiperSection1.slideTo(swiperSection1.clickedIndex);
      //   },
      // },
    });
  }

  if (document.querySelector('.company__slider')) {
    var swiperSection1 = new Swiper('.company__slider', {
      effect: 'slide',

      speed: variables.swiperSpeed,
      loop: true,
      centeredSlides: true,
      slidesPerView: '1',
      initialSlide: 1,
      grabCursor: false,
      allowTouchMove: true,
      navigation: {
        nextEl: '.company__slider-arrow--right',
        prevEl: '.company__slider-arrow--left',
      },
      keyboard: true,
    });
  }
};

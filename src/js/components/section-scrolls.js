import { elements } from './helpers';
import { gsap, Sine } from 'gsap/all';

// import * as ScrollMagic from 'scrollmagic';
// import 'animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { CustomEase } from '../vendor/gsap-member/CustomEase';

import IScroll from 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';

gsap.registerPlugin(CustomEase);

// ScrollMagicPluginGsap(ScrollMagic, gsap);

const breakpointWidth = 960;
const breakpointWidthS = 640;
const breakpointHeight = 640;

// todo change delta on window resize
let deltaX = '200vw';
if (window.innerWidth >= breakpointWidthS) deltaX = '200vw';
if (window.innerWidth > breakpointWidth) deltaX = '100vw';
let deltaY = '100vw';
if (window.innerWidth >= breakpointWidthS) deltaY = '20vw';
if (window.innerWidth >= breakpointWidth) deltaY = '100vw';

// check if animation fired once on mobile
let fired1 = false;
let fired2 = false;
let fired3 = false;
let fired4 = false;
let firedRed = false;

const isResponsive = () => {
  if (window.innerWidth < breakpointWidth || window.innerHeight < breakpointHeight) {
    return true;
  } else return false;
};

export let sectionScrolls = () => {
  if (document.querySelector('.fullpage')) {
    console.log('fillpage init');

    const allowScroll = (allow = true) => {
      if (!isResponsive()) {
        fullPageInstance.setAllowScrolling(allow);
        fullPageInstance.setKeyboardScrolling(allow);
      }
    };

    var fullPageInstance = new fullpage('#fullpage', {
      menu: '#sidenav',
      // anchors: ['water', 'time', 'classic', 'bottom'],
      // lockAnchors: true,
      // navigation: true,
      autoscrolling: true,
      css3: true,
      scrollingSpeed: 1000,
      // scrollBar: true,
      scrollOverflow: true,
      responsiveWidth: breakpointWidth,
      responsiveHeight: breakpointHeight,
      afterResponsive: function(isResponsive) {
        fired1 = false;
        fired2 = false;
        fired3 = false;
        fired4 = false;
        firedRed = false;
      },
      onLeave: (origin, destination, direction) => {
        // uncomment to disable animation on mobile
        // if (window.innerWidth > breakpointWidth) {
        console.log(destination.index);

        // Not gsap animations
        if (destination.index === 1) {
          document.querySelector('.header__nav-logo').classList.add('header__nav-logo--panel');
          document.querySelector('.header__nav-logo').classList.remove('header__nav-logo--title');
        }
        if (destination.index === 0) {
          document.querySelector('.header__nav-logo').classList.remove('header__nav-logo--panel');
          document.querySelector('.header__nav-logo').classList.add('header__nav-logo--title');
        }

        // Gsap Animations
        // ! LEAVING
        if (window.innerWidth > breakpointWidth) {
          // out animation only on large screens
          // Leaving Water
          if (origin.index === 0) {
            let tween0 = gsap.timeline();
            tween0
              // out of 1
              .to('.section-1__bg', { duration: 0.5, scale: 0.2 }, 0)
              .to(
                '.section-1__slider-item:not(.swiper-slide-active)',
                { duration: 0.1, opacity: 0 },
                0
              )
              .to('.slider__arrow', { duration: 0.1, opacity: 0 }, 0)
              .to('.section-1__title', { duration: 0.5, opacity: 0, scale: 0.2 }, 0)
              .to('.section-1__slider', { duration: 0.5, y: -300 }, 0);
            // elements.section1Video.pause();
          }
          // Leaving TIME
          if (origin.index === 1) {
            let tween1 = gsap.timeline();
            tween1
              //out from 2
              .fromTo(
                '.section-2__bg',
                { borderRadius: 0, scale: 1 },
                { duration: 0.3, borderRadius: '3.125vw', scale: 0.3 },
                '0'
              )
              .to('.section-2__bg video', { duration: 0.2, opacity: 0 }, '0')
              .to('.section-2__content', { duration: 0.3, opacity: 0 }, '0');
            // elements.section2Video.pause();
          }
          // Leaving Classic
          if (origin.index === 2) {
            let tween2 = gsap.timeline();
            tween2
              .to('.section-3__intro-before', { duration: 0.2, opacity: 0 })
              .to('.section-3__bg', { duration: 1, scale: 0.3 })
              .to('.section-3__content', { duration: 0.3, opacity: 0 }, '-=0.2')
              .to(
                '.section-3__bottle--1 > div',
                {
                  duration: 1.0,
                  // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                  y: '-' + deltaY,
                  x: deltaX,
                  stagger: -0.09,
                },
                '0'
              )
              .to(
                '.section-3__bottle--2 > div',
                {
                  duration: 1.0,
                  // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                  y: deltaY,
                  x: '-' + deltaX,
                  stagger: -0.09,
                },
                '0'
              )
              .to(
                '.section-3__bottle > div',
                {
                  duration: 0.5,
                  opacity: 0,
                },
                '0'
              );
            // .set('.section-3__bottle', { opacity: 0 });
          }
          // Leaving RED
          if (origin.index === 3) {
            let tweenRedOut = gsap.timeline();
            tweenRedOut
              .fromTo(
                '.section-red__bg-color',
                { borderRadius: 0, scale: 1 },
                { duration: 0.3, scale: 0.3 },
                '0'
              )
              .to('.section-red__content', { duration: 0.3, opacity: 0, scale: 0.8 }, '0');
          }
          // Leaving Bottom
          if (origin.index === 4) {
          }
        } // if (window.innerWidth > breakpointWidth)

        // ! LOADING
        // WATER
        if (destination.index === 0 && fired1 === false) {
          if (window.innerWidth < breakpointWidth) fired1 = true;

          let tween0 = gsap.timeline();
          tween0
            .call(allowScroll, [false])
            //to 1

            .to('.section-1__bg', { duration: 0.3, scale: 1 }, 0)
            .fromTo(
              '.section-1__title',
              { y: 20, opacity: 0 },
              { duration: 0.5, y: 0, scale: 1, opacity: 1 },
              0
            )
            .fromTo(
              '.section-1__slider',
              { y: 20, opacity: 0 },
              { duration: 0.5, y: 0, opacity: 1 },
              '-=0.3'
            )
            .to(
              '.section-1__slider-item:not(.swiper-slide-active)',
              {
                duration: 0.3,
                opacity: 1,
              },
              '-=0.3'
            )
            .to('.slider__arrow', { duration: 0.1, opacity: 1 }, '-=0.1')

            .to('.section-1__slider', { duration: 0.5, y: 0 }, 0)
            .call(allowScroll, [true]);
          elements.section1Video.play();
        }

        // TIME
        if (destination.index === 1 && fired2 === false) {
          if (window.innerWidth < breakpointWidth) fired2 = true;

          let tweenScroll1 = gsap.timeline();
          tweenScroll1
            .call(allowScroll, [false])

            .fromTo(
              '.section-2__bg',
              { borderRadius: '3.125vw', scale: 0.3 },
              { duration: 1, borderRadius: 0, scale: 1 },
              '0'
            )
            .fromTo('.section-2__bg video', { opacity: 0 }, { duration: 0.2, opacity: 1 }, '-=0.2')
            .fromTo(
              '.section-2__content',
              { opacity: 0, y: 100 },
              { duration: 0.2, opacity: 1, y: 0 },
              '-=0.1'
            )
            .fromTo(
              '.section-2__bottles-item',
              {
                scale: 0.9,
                y: 150,
                opacity: 0,
              },
              {
                duration: 0.5,
                ease: 'back.out(1.5)',

                scale: 1,
                y: 1,
                opacity: 1,
                stagger: 0.05,
              },
              '-=0.2'
            )
            .fromTo(
              '.section-2__text',
              { opacity: 0, y: 20 },
              { duration: 0.5, opacity: 1, y: 0 },
              '+=0.3'
            )
            .call(allowScroll, [true]);
          // .to('.section-3__bottle', { duration: 0.2, opacity: 0 });
          elements.section2Video.play();
        }

        // CLASSIC
        if (destination.index === 2 && fired3 === false) {
          if (window.innerWidth < breakpointWidth) fired3 = true;

          let tweenScroll2 = gsap.timeline();
          tweenScroll2
            .call(allowScroll, [false])

            .to('.section-3__bottle', { duration: 0.3, opacity: 1 })
            .fromTo('.section-3__content', { opacity: 0 }, { duration: 0.5, opacity: 1 }, '0')
            .fromTo(
              '.section-3__title',
              { scale: 0.5, opacity: 0 },
              { duration: 0.5, scale: 1, opacity: 1 },
              '-=0.3'
            )
            .fromTo(
              '.section-3__subtitle',
              { scale: 0.9, y: 50, opacity: 0 },
              { duration: 0.3, scale: 1, y: 0, opacity: 1 },
              '-=0.3'
            )
            .fromTo(
              '.section-3__button-wrap',
              { scale: 0.6, y: 50, opacity: 0 },
              { duration: 0.2, scale: 1, y: 0, opacity: 1 },
              '-=0.1'
            )
            .fromTo('.section-3__bg', { scale: 0.3 }, { duration: 0.5, scale: 1 })
            .fromTo('.section-3__intro-before', { opacity: 0 }, { duration: 0.5, opacity: 1 })
            .fromTo('.section-3__bg-image', { opacity: 0 }, { duration: 1, opacity: 0.2 })

            .fromTo(
              '.section-3__bottle > div',
              { opacity: 0 },
              { duration: 0.5, opacity: 1 },
              '-=1'
            )
            .fromTo(
              '.section-3__bottle--1 > div',
              {
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: deltaY,
                x: '-' + deltaX,
                // stagger: -0.09,
              },
              {
                duration: 1.5,
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '0',
                x: '0',
                stagger: -0.09,
              },
              '-=1.3'
            )
            .fromTo(
              '.section-3__bottle--2 > div',
              {
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '-' + deltaY,
                x: deltaX,
              },
              {
                duration: 1.5,
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '0',
                x: '0',

                stagger: -0.09,
              },
              '-=1.9'
            )
            .call(allowScroll, [true]);
        }
        // RED
        if (destination.index === 3 && firedRed === false) {
          if (window.innerWidth < breakpointWidth) firedRed = true;

          let tweenScrollRed = gsap.timeline();
          tweenScrollRed
            .call(allowScroll, [false])
            .set('.section-red__content', { opacity: 1, scale: 1 })
            .fromTo('.section-red__bg-color', { scale: 0.2 }, { duration: 1, scale: 1 }, '0.5')
            .fromTo('.section-red__bg-blob', { opacity: 0 }, { duration: 0.5, opacity: 1 }, '-=0.5')
            .fromTo(
              '.section-red__logo',
              { opacity: 0, y: 100, scale: 0.5 },
              {
                duration: 0.5,
                ease: 'back.out(1.5)',
                opacity: 1,
                y: 0,
                scale: 1,
              },
              '-=0.5'
            )
            .fromTo(
              '.section-red__bottle-bottle',
              {
                scale: 0.9,
                y: 150,
                opacity: 0,
              },
              {
                duration: 0.5,
                ease: 'back.out(1.5)',
                scale: 1,
                y: 1,
                opacity: 1,
                stagger: 0.05,
              },
              '-=0.2'
            )
            .fromTo('.section-red__shadow', { opacity: 0 }, { duration: 1, opacity: 1 }, '-=0.5')
            .fromTo(
              '.section-red__parallax-item',
              {
                scale: 0.5,
                opacity: 0,
              },
              {
                duration: 1,
                ease: 'back.out(1.5)',
                scale: 1,
                opacity: 1,
                stagger: 0.1,
              },
              '-=0.7'
            )
            .call(allowScroll, [true]);
        }
        // BOTTOM
        if (destination.index === 4 && fired4 === false) {
          if (window.innerWidth < breakpointWidth) fired4 = true;

          let tweenScroll4 = gsap.timeline();
          tweenScroll4
            .call(allowScroll, [false])

            .fromTo(
              '.section-4__title',
              {
                opacity: 0,
                scale: 0.7,
              },
              { duration: 1.5, opacity: 1, scale: 1 }
            )
            .fromTo(
              '.section-4__image',
              { opacity: 0, y: 50 },
              { duration: 1, opacity: 1, y: 0 },
              '-=1.0'
            )
            .from('.section-4__button-wrap', { duration: 0.5, opacity: 0, y: -50 }, '-=0.5')
            .call(allowScroll, [true]);
          // .to('.section-3__bottle', { duration: 0.2, opacity: 0 });
        }
        // } if (window.innerWidth > breakpointWidth) {
      },
    });
  } //page-index
};

export const sectionsInit = () => {
  if (document.querySelector('.page--index')) {
    document.querySelector('.section-1').classList.remove('hidden');
    document.querySelector('.sidenav').classList.remove('hidden');

    let tweenLoad = gsap.timeline();
    tweenLoad
      .set('.section-1__bg-video', { className: 'section-1__bg-video active' })
      .from('.section-1__title', { duration: 1.5, y: 20, opacity: 0 })
      .from('.section-1__slider', { duration: 1.5, y: 20, opacity: 0 }, '-=0.3')
      .from('.section-1__subtitle', { duration: 0.5, y: 10, opacity: 0 }, '-=0.3')
      .from('.section-1__button-wrap', { duration: 0.5, y: 10, opacity: 0 }, '-=0.3');
    // .from('.sidenav__item', {
    //   duration: 0.5,
    //   x: -40,
    //   opacity: 0,
    //   stagger: 0.1,
    // });

    // initial animation
    let tweenLoad2 = gsap.timeline();
    tweenLoad2
      .set('.section-2__bg', { borderRadius: '3.125vw', scale: 0.3 })
      .set('.section-2__bg video', { duration: 0.2, opacity: 0 })
      .set('.section-2__content', { opacity: 0, y: 100 });
    // set section 3 small size on page load on large screens
    // if (window.innerWidth > breakpointWidth) {
    let tweenLoad3 = gsap.timeline();
    tweenLoad3
      .set('.section-3__intro-before', { opacity: 0 })
      .set('.section-3__bg', { scale: 0.3 })
      .set('.section-3__content', { opacity: 0 })
      .set('.section-3__bottle--1 > div', { opacity: 0 })
      .set('.section-3__bottle--2 > div', { opacity: 0 });
    // }
    let tweenLoadRed = gsap.timeline();
    tweenLoadRed.set('.section-red__bg-color', { scale: 0.2 });
    // .set('.section-4__image', { opacity: 0, y: 50 });

    let tweenLoad4 = gsap.timeline();
    tweenLoad4
      .set('.section-4__title', { scale: 0.7, opacity: 0 })
      .set('.section-4__image', { opacity: 0, y: 50 });

    // .set('body', { className: 'page--index main--init section--1' })

    elements.section1Video.play();
  }

  if (document.querySelector('.main--classic')) {
    let tweenClassic = gsap.timeline();
    tweenClassic
      .set('.classic__bottle--1 > div', { y: deltaY, x: '-' + deltaX })
      .set('.classic__bottle--2 > div', { y: '-' + deltaY, x: deltaX });
  }
};

export const classicInit = () => {
  if (document.querySelector('.main--classic')) {
    // document.querySelector('.section-1').classList.remove('hidden');
    // document.querySelector('.sidenav').classList.remove('hidden');

    let tweenScrollClassic = gsap.timeline();
    tweenScrollClassic

      .fromTo(
        '.classic__bottle--1 > div',
        {
          // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: deltaY,
          x: '-' + deltaX,
          // stagger: -0.09,
        },
        {
          duration: 1.5,
          // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: '0',
          x: '0',
          stagger: -0.09,
        },
        '0'
      )
      .fromTo(
        '.classic__bottle--2 > div',
        {
          // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: '-' + deltaY,
          x: deltaX,
        },
        {
          duration: 1.5,
          // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: '0',
          x: '0',

          stagger: -0.09,
        },
        '-=1.2'
      );
  }
};

export const redInit = () => {
  if (document.querySelector('.main--red')) {
    let tweenScrollRed = gsap.timeline();
    tweenScrollRed
      .set('.section-red__content', { opacity: 1, scale: 1 })
      .fromTo('.section-red__bg-color', { scale: 0.2 }, { duration: 1, scale: 1 }, '1')
      .fromTo('.section-red__bg-blob', { opacity: 0 }, { duration: 0.5, opacity: 1 }, '-=0.5')
      .fromTo(
        '.section-red__logo',
        { opacity: 0, y: 100, scale: 0.5 },
        {
          duration: 0.5,
          ease: 'back.out(1.5)',
          opacity: 1,
          y: 0,
          scale: 1,
        },
        '-=0.5'
      )
      .fromTo(
        '.section-red__bottle-bottle',
        {
          scale: 0.9,
          y: 150,
          opacity: 0,
        },
        {
          duration: 0.5,
          ease: 'back.out(1.5)',
          scale: 1,
          y: 1,
          opacity: 1,
          stagger: 0.05,
        },
        '-=0.2'
      )
      .fromTo('.section-red__shadow', { opacity: 0 }, { duration: 1, opacity: 1 }, '-=0.5')
      .fromTo(
        '.section-red__parallax-item',
        {
          scale: 0.5,

          opacity: 0,
        },
        {
          duration: 1,
          ease: 'back.out(1.5)',
          scale: 1,
          opacity: 1,
          stagger: 0.1,
        },
        '-=0.5'
      );
  }
};

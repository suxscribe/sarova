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
const breakpointHeight = 640;

// check if animation fired once on mobile
let fired1 = false;
let fired2 = false;
let fired3 = false;
let fired4 = false;

export let sectionScrolls = () => {
  if (document.querySelector('.page--index')) {
    var fullPageInstance = new fullpage('#fullpage', {
      anchors: ['section-1', 'section-2', 'section-3', 'section-4'],
      lockAnchors: true,
      menu: '.sidenav',
      navigation: false,
      css3: true,
      scrollingSpeed: 1000,
      // scrollBar: true,
      scrollOverflow: true,
      responsiveWidth: breakpointWidth,
      responsiveHeight: breakpointHeight,
      afterResponsive: function(isResponsive) {},
      onLeave: (origin, destination, direction) => {
        // if (window.innerWidth > breakpointWidth) {
        // temporarily disable animation on mobile
        console.log(destination.index);

        // enable autoscroll on large screens
        // if (window.innerWidth > breakpointWidth) {
        //   if (destination.isLast) {
        //     fullPageInstance.setAutoScrolling(false);
        //     fullPageInstance.setFitToSection(false);
        //   } else {
        //     fullPageInstance.setAutoScrolling(true);
        //     fullPageInstance.setFitToSection(true);
        //   }
        // }

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
              .to(
                '.section-1__title',
                { duration: 0.5, opacity: 0, scale: 0.2 },
                0
              )
              .to('.section-1__slider', { duration: 0.5, y: -300 }, 0);
            elements.section1Video.pause();
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
              .to(
                '.section-2__content',
                { duration: 0.2, opacity: 0, y: 100 },
                '0'
              );
            elements.section2Video.pause();
          }
          // Leaving Classic
          if (origin.index === 2) {
            let tween2 = gsap.timeline();
            tween2
              .to('.section-3__bg', { duration: 0.3, scale: 0.3 })
              .to('.section-3__content', { duration: 0.3, opacity: 0 }, '-=0.2')
              .to(
                '.section-3__bottle--1 img',
                {
                  duration: 1,
                  // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                  y: '-100vw',
                  x: '100vw',
                  scale: 0.8,
                  opacity: 0,
                  stagger: -0.09,
                },
                '0'
              )
              .to(
                '.section-3__bottle--2 img',
                {
                  duration: 1,
                  // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                  y: '100vw',
                  x: '-100vw',
                  scale: 0.8,
                  opacity: 0,
                  stagger: 0.09,
                },
                '0'
              );
          }
          // Leaving Bottom
          if (origin.index === 3) {
          }
        } // if (window.innerWidth > breakpointWidth)

        // ! LOADING
        // WATER
        if (destination.index === 0 && fired1 === false) {
          if (window.innerWidth < breakpointWidth) fired1 = true;

          let tween0 = gsap.timeline();
          tween0

            //to 1
            .set('.header__nav-logo', {
              className:
                'header__nav-item header__nav-logo header__nav-logo--title',
            })
            .to('.section-1__bg', { duration: 0.5, scale: 1 }, 0)
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

            .to('.section-1__slider', { duration: 0.5, y: 0 }, 0);
          elements.section1Video.play();
        }

        // TIME
        if (destination.index === 1 && fired2 === false) {
          if (window.innerWidth < breakpointWidth) fired2 = true;

          let tweenScroll1 = gsap.timeline();
          tweenScroll1
            .set('.header__nav-logo', {
              className:
                'header__nav-item header__nav-logo header__nav-logo--panel',
            })

            .fromTo(
              '.section-2__bg',
              { borderRadius: '3.125vw', scale: 0.3 },
              { duration: 1, borderRadius: 0, scale: 1 },
              '0'
            )
            .fromTo(
              '.section-2__bg video',
              { opacity: 0 },
              { duration: 0.2, opacity: 1 },
              '-=0.2'
            )
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
                scale: 1,
                y: 1,
                opacity: 1,
                stagger: 0.05,
              },
              '-=0.2'
            )
            .to('.section-3__bottle', { duration: 0.5, opacity: 0 });
          elements.section2Video.play();
        }

        // CLASSIC
        if (destination.index === 2 && fired3 === false) {
          if (window.innerWidth < breakpointWidth) fired3 = true;

          let tweenScroll2 = gsap.timeline();
          tweenScroll2
            .set('.section-3__bottle', { opacity: 1 })
            .fromTo(
              '.section-3__content',
              { opacity: 0 },
              { duration: 0.5, opacity: 1 },
              '0'
            )
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
            .fromTo(
              '.section-3__bg',
              { scale: 0.3 },
              { duration: 0.5, scale: 1 }
            )
            .fromTo(
              '.section-3__bg-image',
              { opacity: 0 },
              { duration: 1, opacity: 1 }
            )
            // .set('.section-3__bottle--1 img', { opacity: 1 })
            // .set('.section-3__bottle--2 img', { opacity: 1 })
            .fromTo(
              '.section-3__bottle--1 img',
              {
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '100vw',
                x: '-100vw',
                opacity: 0,
                // stagger: -0.09,
              },
              {
                duration: 1.5,
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '0',
                x: '0',
                opacity: 1,
                stagger: -0.09,
              },
              '-=1'
            )
            .fromTo(
              '.section-3__bottle--2 img',
              {
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '-100vw',
                x: '100vw',
                opacity: 0,
              },
              {
                duration: 1.5,
                // ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
                y: '0',
                x: '0',
                opacity: 1,

                stagger: 0.09,
              },
              '-=1.5'
            );
        }

        if (destination.index === 3 && fired4 === false) {
          if (window.innerWidth < breakpointWidth) fired4 = true;

          let tweenScroll4 = gsap.timeline();
          tweenScroll4
            .from('.section-4__title', {
              duration: 1.5,
              opacity: 0,
              scale: 0.3,
            })
            .from(
              '.section-4__image',
              { duration: 1, opacity: 0, y: 50 },
              '-=0.3'
            )
            .from(
              '.section-4__button-wrap',
              { duration: 1, opacity: 0, y: -50 },
              '-=0.2'
            )
            .to('.section-3__bottle', { duration: 0.5, opacity: 0 });
        }
        // } if (window.innerWidth > breakpointWidth) {
      },
    });
  } //page-index
};

export const sectionsInit = () => {
  document.querySelector('.section-1').classList.remove('hidden');
  document.querySelector('.sidenav').classList.remove('hidden');

  if (document.querySelector('.page--index')) {
    let tweenLoad = gsap.timeline();
    tweenLoad
      .set('.section-1__bg-video', { className: 'section-1__bg-video active' })
      .from('.section-1__title', { duration: 1.5, y: 20, opacity: 0 })
      .from('.section-1__slider', { duration: 1.5, y: 20, opacity: 0 }, '-=0.3')
      .from('.sidenav__item', {
        duration: 0.5,
        x: -40,
        opacity: 0,
        stagger: 0.1,
      });

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
      .set('.section-3__bg', { scale: 0.3 })
      .set('.section-3__content', { opacity: 0 })
      .set('.section-3__bottle--1 img', { opacity: 0 })
      .set('.section-3__bottle--2 img', { opacity: 0 });
    // }

    // .set('body', { className: 'page--index main--init section--1' })

    elements.section1Video.play();
  }
};

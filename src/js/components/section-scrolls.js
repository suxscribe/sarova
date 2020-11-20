import { gsap, Sine } from 'gsap/all';
// import * as ScrollMagic from 'scrollmagic';
// import 'animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { CustomEase } from '../vendor/gsap-member/CustomEase';
import fullpage from 'fullpage.js';

gsap.registerPlugin(CustomEase);

// ScrollMagicPluginGsap(ScrollMagic, gsap);

export let sectionScrolls = () => {
  if (document.querySelector('.page--index')) {
    var fullPageInstance = new fullpage('#fullpage', {
      anchors: ['section-1', 'section-2', 'section-3', 'section-4'],
      menu: '.sidenav',
      navigation: false,
      css3: true,
      scrollingSpeed: 1000,
      scrollBar: true,
      onLeave: (origin, destination, direction) => {
        console.log(destination.index);

        if (destination.isLast) {
          fullPageInstance.setAutoScrolling(false);
          fullPageInstance.setFitToSection(false);
        } else {
          fullPageInstance.setAutoScrolling(true);
          fullPageInstance.setFitToSection(true);
        }

        // ! LEAVING
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

        // ! LOADING
        // WATER
        if (destination.index === 0) {
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
        }

        // TIME
        if (destination.index === 1) {
          let tweenScroll1 = gsap.timeline();
          tweenScroll1
            .set('.header__nav-logo', {
              className:
                'header__nav-item header__nav-logo header__nav-logo--panel',
            })
            .to('.header__nav-logo-panel-path', {
              duration: 0.3,
              fill: '#ffffff',
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
            );
        }

        // CLASSIC
        if (destination.index === 2) {
          let tweenScroll2 = gsap.timeline();
          tweenScroll2
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

        if (destination.index === 3) {
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
            );
        }
      },
    });

    // initial animation
    // let controller = new ScrollMagic.Controller();

    let tweenLoad = gsap.timeline();
    tweenLoad
      // .set('body', { className: 'page--index main--init section--1' })
      .from('.section-1__title', { duration: 0.5, y: 20, opacity: 0 })
      .from('.section-1__slider', { duration: 0.5, y: 20, opacity: 0 }, '-=0.3')
      .from('.sidenav__item', {
        duration: 0.5,
        x: -40,
        opacity: 0,
        stagger: 0.1,
      });

    // let tweenScroll1 = gsap.timeline();

    // tweenScroll1
    //   .to('.section-1__bg', { duration: 0.5, scale: 0.2 }, 0)
    //   .to(
    //     '.section-1__slider-item:not(.swiper-slide-active)',
    //     { duration: 0.1, opacity: 0 },
    //     0
    //   )
    //   .to('.slider__arrow', { duration: 0.1, opacity: 0 }, 0)
    //   .to('.section-1__title', { duration: 0.5, opacity: 0, scale: 0.2 }, 0)
    //   .to(
    //     '.section-1__slider-item-button-wrap',
    //     { duration: 0.1, opacity: 0 },
    //     0
    //   )
    //   .to('.section-1__slider', { duration: 0.5, y: -300 }, 0);

    // // scroll to section 2
    // let tweenScroll2 = gsap.timeline();

    // tweenScroll2
    //   .set('body', { className: 'page--index main--init section--2' })
    //   .set('.header__nav-logo', {
    //     className: 'header__nav-item header__nav-logo header__nav-logo--panel',
    //   })
    //   .to('.header__nav-logo-panel-path', { duration: 0.3, fill: '#ffffff' })
    //   .from('.section-2__bg', { duration: 0.5, scale: 0.3 }, 0)
    //   .to('.section-2__bg', { duration: 0.3, borderRadius: 0 }, '-=0.3')
    //   .from('.section-2__bg video', { duration: 0.2, opacity: 0 }, '-=0.2')
    //   .from(
    //     '.section-2__content',
    //     { duration: 0.2, opacity: 0, y: 100 },
    //     '-=0.1'
    //   )
    //   .from(
    //     '.section-2__bottles-item',
    //     {
    //       duration: 0.3,
    //       scale: 0.9,
    //       y: 150,
    //       opacity: 0,
    //       stagger: 0.05,
    //     },
    //     '+=0.5'
    //   )
    //   .to(
    //     '.section-2__bottles-item',
    //     { duration: 0.2, scale: 0.9, y: -200, opacity: 0, stagger: 0.02 },
    //     '+=0.1'
    //   )
    //   .to(
    //     '.section-2__content',
    //     { duration: 0.2, opacity: 0, y: -100 },
    //     '-=0.1'
    //   )
    //   .to('.section-2__bg', { duration: 0.5, scale: 0.3 })
    //   .to(
    //     '.section-2__bg',
    //     { duration: 0.3, borderRadius: '3.125vw' },
    //     '-=0.3'
    //   );

    // // section 3 animations. Pin section 3 block
    // let tweenScroll3 = gsap.timeline();
    // tweenScroll3
    //   .from('.section-3__bg', { duration: 0.5, scale: 0.3 }, '+=0.2')
    //   .from('.section-3__content', { duration: 0.3, opacity: 0 }, '-=0.2')
    //   .from(
    //     '.section-3__title',
    //     { duration: 0.2, scale: 0.5, opacity: 0 },
    //     '-=0.2'
    //   )
    //   .from(
    //     '.section-3__subtitle',
    //     { duration: 0.1, scale: 0.9, y: 50, opacity: 0 },
    //     '-=0.15'
    //   )
    //   .from(
    //     '.section-3__button-wrap',
    //     { duration: 0.1, scale: 0.6, y: 50, opacity: 0 },
    //     '-=0.05'
    //   )
    //   .set('.section-3__bottle--1 img', { opacity: 1 }, 0)
    //   .set('.section-3__bottle--2 img', { opacity: 1 }, 0)
    //   .to(
    //     '.section-3__bottle--1 img',
    //     {
    //       duration: 0.5,
    //       ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
    //       y: '60vh',
    //       x: '-60vw',
    //       stagger: -0.09,
    //     },
    //     0
    //   )
    //   .to(
    //     '.section-3__bottle--2 img',
    //     {
    //       duration: 0.5,
    //       ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
    //       y: '-60vh',
    //       x: '60vw',
    //       stagger: -0.09,
    //     },
    //     0
    //   )
    //   .to('.section-3__bg', { duration: 0.3, scale: 0.5 }, '-=0.2')
    //   .to('.section-3__bg-image', { duration: 0.1, opacity: 1 }, '-=0.3');

    // let tweenScroll4 = gsap.timeline();
    // tweenScroll4

    //   .to('.section-3__content', { duration: 0.3, opacity: 0 }, 0)
    //   .from('.section-4__title', { duration: 0.8, opacity: 0, scale: 0.3 })
    //   .from('.section-4__image', { duration: 0.2, opacity: 0, y: 50 }, '-=0.3')
    //   .from(
    //     '.section-4__button-wrap',
    //     { duration: 0.2, opacity: 0, y: -50 },
    //     '-=0.2'
    //   )
    //   .set('body', { className: 'page--index main--init section--4' })
    //   .to('.header__nav-logo-panel-path', { duration: 0.3, fill: '#70b9d9' });

    // let tweenScrollFoot = gsap.timeline();
    // tweenScrollFoot.from(
    //   '.footer > *',
    //   {
    //     duration: 0.5,
    //     opacity: 0,
    //     y: 100,
    //     stagger: 0.1,
    //   },
    //   '+=0.5'
    // );

    // SCENES
    // var scene1 = new ScrollMagic.Scene({
    //   triggerElement: '.section-1',
    //   duration: 500,
    //   triggerHook: 0,
    // })
    //   .setClassToggle('.sidenav__item--1', 'active')
    //   .setTween(tweenScroll1)
    //   // .addIndicators()
    //   .addTo(controller);

    // var scene2 = new ScrollMagic.Scene({
    //   triggerElement: '.section-2',
    //   duration: 1000,
    //   triggerHook: 0,
    // })
    //   .setClassToggle('.sidenav__item--2', 'active')
    //   // .setPin('.section-2')
    //   .setTween(tweenScroll2)
    //   // .addIndicators()
    //   .addTo(controller);

    // var scene3 = new ScrollMagic.Scene({
    //   triggerElement: '.section-3',
    //   duration: 2000,
    //   triggerHook: 0,
    // })
    //   .setClassToggle('.sidenav__item--3', 'active')
    //   // .setPin('.section-3')
    //   .setTween(tweenScroll3)
    //   // .addIndicators()
    //   .addTo(controller);

    // var scene4 = new ScrollMagic.Scene({
    //   triggerElement: '.section-4',
    //   duration: 800,
    //   triggerHook: 80,
    // })
    //   .setClassToggle('.sidenav__item--4', 'active')
    //   // .setClassToggle('.header__nav-logo', 'header__nav-logo--panel-blue')

    //   .setTween(tweenScroll4)
    //   // .addIndicators()
    //   .addTo(controller);

    // var sceneFoot = new ScrollMagic.Scene({
    //   triggerElement: '.footer',
    //   duration: 300,
    //   triggerHook: 10,
    // })
    //   .setTween(tweenScrollFoot)
    //   // .addIndicators()
    //   .addTo(controller);
  } //page-index
};

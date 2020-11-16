import { gsap, Sine } from 'gsap/all';
import * as ScrollMagic from 'scrollmagic';
// import 'animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { CustomEase } from '../vendor/gsap-member/CustomEase';
import fullpage from 'fullpage.js';

gsap.registerPlugin(CustomEase);

ScrollMagicPluginGsap(ScrollMagic, gsap);

export let sectionScrolls = () => {
  if (document.querySelector('.page--index')) {
    // initial animation
    let controller = new ScrollMagic.Controller();
    let tweenLoad = gsap.timeline();

    tweenLoad
      // .from('.section-1__bg', { duration: 1, scale: 0, opacity: 0 })
      // .from('.section-1__bg', {
      //   duration: 1,
      //   clipPath: 'ellipse(0% 0% at 50% 0%)',
      // })
      .set('body', { className: 'page--index main--init section--1' })
      .from('.section-1__title', { duration: 0.5, y: 20, opacity: 0 })
      .from('.section-1__slider', { duration: 0.5, y: 20, opacity: 0 }, '-=0.3')
      .from('.sidenav__item', {
        duration: 0.5,
        x: -40,
        opacity: 0,
        stagger: 0.1,
      });
    // tweenLoad.to('.section-1__bg', { duration: 1, scale: 1, opacity: 1 });

    // let tweenWave = gsap.timeline({ repeat: -1, yoyo: true });
    // tweenWave.to('#section-1-clip', {
    //   duration: 3,
    //   scale: 0.9,
    //   transformOrigin: 'center center',
    //   ease: Sine.easeInOut,
    // });

    //.to('.section-1__bg-svg', {
    //   morphSVG: '.st0',
    //   ease: Sine.easeInOut,
    // })
    // .to('.section-1__bg-svg', { scale: 0.9 });

    let tweenScroll1 = gsap.timeline();

    tweenScroll1
      .to('.section-1__bg', { duration: 0.5, scale: 0.2 }, 0)
      .to(
        '.section-1__slider-item:not(.swiper-slide-active)',
        { duration: 0.1, opacity: 0 },
        0
      )
      .to('.slider__arrow', { duration: 0.1, opacity: 0 }, 0)
      .to('.section-1__title', { duration: 0.5, opacity: 0, scale: 0.2 }, 0)
      .to(
        '.section-1__slider-item-button-wrap',
        { duration: 0.1, opacity: 0 },
        0
      )
      .to('.section-1__slider', { duration: 0.5, y: -300 }, 0);

    // scroll to section 2
    let tweenScroll2 = gsap.timeline();

    tweenScroll2
      .set('body', { className: 'page--index main--init section--2' })
      .set('.header__nav-logo', {
        className: 'header__nav-item header__nav-logo header__nav-logo--panel',
      })
      .to('.header__nav-logo-panel-path', { duration: 0.3, fill: '#ffffff' })
      .from('.section-2__bg', { duration: 0.5, scale: 0.3 }, 0)
      .to('.section-2__bg', { duration: 0.3, borderRadius: 0 }, '-=0.3')
      .from('.section-2__bg video', { duration: 0.2, opacity: 0 }, '-=0.2')
      .from(
        '.section-2__content',
        { duration: 0.2, opacity: 0, y: 100 },
        '-=0.1'
      )
      .from(
        '.section-2__bottles-item',
        {
          duration: 0.3,
          scale: 0.9,
          y: 150,
          opacity: 0,
          stagger: 0.05,
        },
        '+=0.5'
      )
      .to(
        '.section-2__bottles-item',
        { duration: 0.2, scale: 0.9, y: -200, opacity: 0, stagger: 0.02 },
        '+=0.1'
      )
      .to(
        '.section-2__content',
        { duration: 0.2, opacity: 0, y: -100 },
        '-=0.1'
      )
      .to('.section-2__bg', { duration: 0.5, scale: 0.3 })
      .to(
        '.section-2__bg',
        { duration: 0.3, borderRadius: '3.125vw' },
        '-=0.3'
      );

    // section 3 animations. Pin section 3 block
    let tweenScroll3 = gsap.timeline();
    tweenScroll3
      .from('.section-3__bg', { duration: 0.5, scale: 0.3 }, '+=0.2')
      .from('.section-3__content', { duration: 0.3, opacity: 0 }, '-=0.2')
      .from(
        '.section-3__title',
        { duration: 0.2, scale: 0.5, opacity: 0 },
        '-=0.2'
      )
      .from(
        '.section-3__subtitle',
        { duration: 0.1, scale: 0.9, y: 50, opacity: 0 },
        '-=0.15'
      )
      .from(
        '.section-3__button-wrap',
        { duration: 0.1, scale: 0.6, y: 50, opacity: 0 },
        '-=0.05'
      )
      .set('.section-3__bottle--1 img', { opacity: 1 }, 0)
      .set('.section-3__bottle--2 img', { opacity: 1 }, 0)
      .to(
        '.section-3__bottle--1 img',
        {
          duration: 0.5,
          ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: '60vh',
          x: '-60vw',
          stagger: -0.09,
        },
        0
      )
      .to(
        '.section-3__bottle--2 img',
        {
          duration: 0.5,
          ease: CustomEase.create('custom', 'M0,0,C0.302,0,1,0.702,1,1'),
          y: '-60vh',
          x: '60vw',
          stagger: -0.09,
        },
        0
      )
      .to('.section-3__bg', { duration: 0.3, scale: 0.5 }, '-=0.2')
      .to('.section-3__bg-image', { duration: 0.1, opacity: 1 }, '-=0.3');

    let tweenScroll4 = gsap.timeline();
    tweenScroll4

      .to('.section-3__content', { duration: 0.3, opacity: 0 }, 0)
      .from('.section-4__title', { duration: 0.8, opacity: 0, scale: 0.3 })
      .from('.section-4__image', { duration: 0.2, opacity: 0, y: 50 }, '-=0.3')
      .from(
        '.section-4__button-wrap',
        { duration: 0.2, opacity: 0, y: -50 },
        '-=0.2'
      )
      .set('body', { className: 'page--index main--init section--4' })
      .to('.header__nav-logo-panel-path', { duration: 0.3, fill: '#70b9d9' });

    let tweenScrollFoot = gsap.timeline();
    tweenScrollFoot.from(
      '.footer > *',
      {
        duration: 0.5,
        opacity: 0,
        y: 100,
        stagger: 0.1,
      },
      '+=0.5'
    );

    // SCENES
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.section-1',
      duration: 500,
      triggerHook: 0,
    })
      .setClassToggle('.sidenav__item--1', 'active')
      .setTween(tweenScroll1)
      // .addIndicators()
      .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.section-2',
      duration: 1000,
      triggerHook: 0,
    })
      .setClassToggle('.sidenav__item--2', 'active')
      // .setClassToggle('.header__nav-logo', 'header__nav-logo--panel')
      // .setPin('.section-2')
      .setTween(tweenScroll2)
      // .addIndicators()
      .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.section-3',
      duration: 2000,
      triggerHook: 0,
    })
      .setClassToggle('.sidenav__item--3', 'active')
      // .setClassToggle('.header__nav-logo', 'header__nav-logo--panel')
      // .setPin('.section-3')
      .setTween(tweenScroll3)
      // .addIndicators()
      .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.section-4',
      duration: 800,
      triggerHook: 80,
    })
      .setClassToggle('.sidenav__item--4', 'active')
      // .setClassToggle('.header__nav-logo', 'header__nav-logo--panel-blue')

      .setTween(tweenScroll4)
      // .addIndicators()
      .addTo(controller);

    var sceneFoot = new ScrollMagic.Scene({
      triggerElement: '.footer',
      duration: 300,
      triggerHook: 10,
    })
      .setTween(tweenScrollFoot)
      // .addIndicators()
      .addTo(controller);
  } //page-index
};

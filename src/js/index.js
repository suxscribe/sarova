import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);
// import readmore from './components/readmore.js';
// import ripple from './components/ripple';

import { gsap, Sine } from 'gsap/all';

import fullpage from 'fullpage.js';

import { variables, elements } from './components/variables';

import {
  setVh,
  hidePreloader,
  bottleHover,
  classicBottleClick,
  checkFirstScreen,
  iOS,
} from './components/helpers';

import { section1Slider } from './components/swipers';
import { sectionsInit, sectionScrolls, classicInit, redInit } from './components/section-scrolls';
import { redParallax } from './components/red';

// import Splitting from 'splitting';
// import { validateForms } from './components/forms';

window.UIkit = UIkit; // fix not difined bug

// loads the Icon plugin
UIkit.use(Icons);

// some svg magic. SVG to shadow root
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../svg/', true, /\.svg$/));

// set default offset of scroll
UIkit.mixin(
  {
    data: {
      offset: variables.scrollOffset,
    },
  },
  'scroll'
);

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
  // COMMON SCRIPTS
  iOS();

  section1Slider();

  // setVh();
  // window.addEventListener('resize', setVh); // recalc browser height on resize

  sectionScrolls();

  bottleHover(
    '.section-2__bottles-item img[data-color]',
    '.section-2__bg',
    null,
    '.time-color-hover',
    null,
    '.section-2__button'
  );
  bottleHover(
    '.classic__bottle img[data-color]',
    '.classic__bg',
    '.classic__intro-before',
    '.bottle-color-hover',
    '.bottle-color-hover-button'
  );
  bottleHover(
    '.section-3__bottle img[data-color]',
    '.section-3__bg-color',
    '.section-3__intro-before',
    '.bottle-color-hover',
    '.bottle-color-hover-button'
  );
  bottleHover(
    '.time__bottle[data-color]',
    '.time__bg',
    null,
    '.bottle-color-hover',
    '.bottle-color-hover-button'
  );

  classicBottleClick('.classic__bottle img');
  classicBottleClick('.section-3__bottle img');

  checkFirstScreen();

  redParallax();

  // document.querySelectorAll('.section-3__bottle img').forEach((bottle) => {
  //   bottle.addEventListener('mouseenter', () => {
  //     bottle.style.transform += 'scale(1.05)';
  //   });
  // });
});

// Wait for everything to load
window.addEventListener('load', function() {
  // setTimeout(hidePreloader, 1000);
  // setTimeout(sectionScrolls, 1500);

  hidePreloader();
  sectionsInit();
  classicInit();
  redInit();
});

// scroll to top on page reload
window.onbeforeunload = function() {
  // window.scrollTo(0, 0);
};

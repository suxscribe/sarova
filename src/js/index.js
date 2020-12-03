import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Swiper, { Navigation, EffectFade, Keyboard, Controller } from 'swiper';
Swiper.use([Navigation, EffectFade, Keyboard, Controller]);
// import readmore from './components/readmore.js';
// import ripple from './components/ripple';

import gsap from 'gsap';
import Splitting from 'splitting';

import { variables, elements } from './components/variables';

import { setVh, hidePreloader } from './components/helpers';

import { section1Slider } from './components/swipers';
import { sectionsInit, sectionScrolls } from './components/section-scrolls';

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

  // headerScripts();

  section1Slider();

  setVh();
  window.addEventListener('resize', setVh); // recalc browser height on resize
  sectionScrolls();
});

// Wait for everything to load
window.addEventListener('load', function() {
  const startEverything = () => {
    hidePreloader();
    sectionScrolls();
  };

  // setTimeout(hidePreloader, 1000);
  // setTimeout(sectionScrolls, 1500);

  sectionsInit();
});

// scroll to top on page reload
window.onbeforeunload = function() {
  // window.scrollTo(0, 0);
};

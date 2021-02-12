import { variables } from './variables';

export const setVh = () => {
  if (!document.documentElement.classList.contains('ios')) {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // todo make --vh = 1vh on 960+
};

export const elements = {
  section1Video: document.querySelector('.section-1__bg-video'),
  section2Video: document.querySelector('.section-2__bg-video'),
  preloader: document.querySelector('.preloader'),
};

// Fade the page out when click on a link
export const pageFadeOut = () => {
  document.addEventListener('click', (event) => {
    // if (event.target.tagName.toLowerCase() === 'a') {
    //   event.preventDefault();
    //   elements.preloader.classList.remove('preloader--hidden');
    //   // need to wait for animation to finish
    //   window.location = event.target.href;
    //   // console.log(event.target);
    // }
  });
};

export const hidePreloader = () => {
  elements.preloader.classList.add('preloader--hidden');
};

export const bottleHover = (
  selector = null,
  target = null,
  target2 = null,
  target3 = null,
  target4 = null,
  target5 = null
) => {
  // selector - image selector with data-color attribute
  // target - bg element selector
  // target2 - bg gradient element selector for classic
  // target3 - elements to change color/fill
  // target4 - elements to change color on hover
  // target5 - time button change color on hover

  if (window.innerWidth >= variables.breakpointWidthM) {
    // hover effects only on desktop
    const elements = document.querySelectorAll(selector);
    const targetBg = document.querySelector(target);
    const target2Bg = document.querySelector(target2);
    const target3elements = document.querySelectorAll(target3);
    const target4elements = document.querySelectorAll(target4);

    // console.log(elements.length);
    // console.log(targetBg);
    if ((elements.length > 0) & (targetBg !== null)) {
      elements.forEach((image) => {
        image.addEventListener('mouseenter', () => {
          console.log('hover');

          targetBg.style.backgroundColor = image.dataset.color;
          targetBg.style.fill = image.dataset.color;

          if (image.dataset.color2 !== '') {
            if (target2Bg !== null) {
              target2Bg.style.boxShadow = `0px 60vh 40vh -40vh ${image.dataset.color2} inset`;
            }
            if (target3elements.length > 0) {
              target3elements.forEach((element) => {
                element.style.fill = image.dataset.color2;
                element.style.borderColor = image.dataset.color2;

                element.style.color = image.dataset.color2;

                const target3Svg = element.querySelector('svg');
                if (target3Svg) {
                  target3Svg.style.fill = image.dataset.color2;
                  target3Svg.style.stroke = image.dataset.color2;
                }
              });
            }

            if (target4) {
              //add hover style
              const target4class = target4.replace('.', '');

              if (document.querySelector(`style#${target4class}`)) {
                document.querySelector(`style#${target4class}`).remove();
              }
              let style = document.createElement('style');
              style.id = target4class;

              const css = `${target4}:hover{ background-color: ${image.dataset.color2}; color: #fff !important }`;

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(document.createTextNode(css));
              }

              document.getElementsByTagName('head')[0].appendChild(style);
            }
            if (target5) {
              //add hover style
              const target5class = target5.replace('.', '');

              if (document.querySelector(`style#${target5class}`)) {
                document.querySelector(`style#${target5class}`).remove();
              }
              let style = document.createElement('style');
              style.id = target5class;

              const css = `${target5}:hover{ color: ${image.dataset.color2}; }`;

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(document.createTextNode(css));
              }

              document.getElementsByTagName('head')[0].appendChild(style);
            }
          }
        });
      });
    }
  }
};

export const classicBottleClick = (selector) => {
  document.querySelectorAll(selector).forEach((bottle) => {
    bottle.addEventListener('click', () => {
      window.location = bottle.dataset.link;
    });
  });
};

export const checkFirstScreen = () => {
  let isTopVisible = false;
  var firstScreen = document.querySelector('#first-screen');
  let offcanvasButton = document.querySelector('.offcanvas__button');

  if (firstScreen && offcanvasButton) {
    if (isInViewport(firstScreen)) {
      isTopVisible = true;
      offcanvasButton.classList.add('offcanvas__button--invert');
    }

    window.addEventListener(
      'scroll',
      function(event) {
        // get in viewport
        if (isInViewport(firstScreen) && isTopVisible == false) {
          isTopVisible = true;
          console.log('in viewport');
          offcanvasButton.classList.add('offcanvas__button--invert');
        }
        // out of viewport
        if (!isInViewport(firstScreen) && isTopVisible == true) {
          isTopVisible = false;
          console.log('out ');
          offcanvasButton.classList.remove('offcanvas__button--invert');
        }
      },
      false
    );
  }
};

export const isInViewport = (elem) => {
  var bounding = elem.getBoundingClientRect();
  return bounding.top < window.innerHeight && bounding.bottom >= 0;
};

// DETECT IOS
export const iOS = () => {
  if (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  ) {
    document.documentElement.classList.add('ios');
  }
};
